import { View, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "../styles/style.module";
import Questionaire from "../components/weights/questionaire";
import LiftingOptions from "../components/weights/liftingOptions";
import exercises from "../components/weights/exercises";
import Plan from "../components/weights/plan";

function WeightsScreen() {
  const [userData, setUserData] = useState({
    levels: ["Beginner", "Intermediate"],
    goals: ["Gain muscle", "Get stronger"],
    returningUser: "",
    exp: "",
    days: [2, 3],
    exercises,
    component: "questionaire",
    availability: "", //based on index
    objective: "",
    selectedNum: 0, //selected number of different exercises
    numOfWeights: 0, //number of different weights for exercises
    //2 day availability
    upper: exercises.filter((exer) => {
      if (
        exer.muscleGroup === "Shoulders" ||
        exer.muscleGroup === "Chest" ||
        exer.muscleGroup === "Back"
      ) {
        return exer;
      }
    }),
    lower: exercises.filter((exer) => {
      if (
        exer.muscleGroup === "Thigh" ||
        exer.muscleGroup === "Hamstring" ||
        exer.muscleGroup === "Calf"
      ) {
        return exer;
      }
    }),
    //3 day availability
    dayOne: exercises.filter(
      (exer) => exer.muscleGroup === "Back" || exer.muscleGroup === "Biceps"
    ),
    dayTwo: exercises.filter(
      (exer) =>
        exer.muscleGroup === "Hamstring" ||
        exer.muscleGroup === "Thigh" ||
        exer.muscleGroup === "Core"
    ),
    dayThree: exercises.filter(
      (exer) => exer.muscleGroup === "Chest" || exer.muscleGroup === "Triceps"
    ),
    hideExercises: false,
    previewPlan: false,
  });

  // useEffect(() => {
  //   console.log(userData.objective);
  // }, [userData]);

  useEffect(() => {
    if (userData.exp === 0) setUserData({ ...userData, days: [2, 3] });
    if (userData.exp === 1) setUserData({ ...userData, days: [2, 3, 4] });
  }, [userData.exp]);

  return (
    <View style={[styles.screenWrapper]}>
      <ScrollView>
        {/* ======= Weight lifting questionaire =========*/}
        {userData.component === "questionaire" && (
          <Questionaire userData={userData} setUserData={setUserData} />
        )}

        {/* ======= Exercise Selection =========*/}
        {userData.component === "selections" && (
          <LiftingOptions userData={userData} setUserData={setUserData} />
        )}

        {/* ======= Preview Exercise Plan ========= */}
        {userData.component === "plan" && (
          <Plan userData={userData} setUserData={setUserData} />
        )}
      </ScrollView>
    </View>
  );
}

export default WeightsScreen;
