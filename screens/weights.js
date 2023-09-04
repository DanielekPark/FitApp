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
    numOfMonthsUsed: 0,
    exp: "",
    days: [2, 3],
    exercises,
    component: "questionaire",
    availability: "", //Index based
    selectedNum: 0, //Number of different types of exercises selected
    numOfWeights: 0, //Number of weights added to exercises
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
        exer.muscleGroup === "Core" ||
        exer.muscleGroup === "Calf"
      ) {
        return exer;
      }
    }),
    //3 day availability
    dayOne: exercises.filter(
      (exer) => exer.muscleGroup === "Back" || exer.muscleGroup === "Biceps"||
        exer.muscleGroup === "Core" 
    ),
    dayTwo: exercises.filter(
      (exer) =>
        exer.muscleGroup === "Hamstring" ||
        exer.muscleGroup === "Thigh" ||
        exer.muscleGroup === "Calf" 
    ),
    dayThree: exercises.filter(
      (exer) => exer.muscleGroup === "Chest" || exer.muscleGroup === "Triceps"
    ),
    //dayFour: [],
    hideExercises: false,
  });

  // useEffect(() => {
  //   console.log(userData.numOfMonthsUsed);
  // }, [userData]);

    /* 
      intermediate day 4 availability
      dayOne 2 back(1 single joint) exercises 1 bicep
      dayTwo all include calf
      dayThree 2 chest (1 single joint), 1 tricep
      dayFour 1 ab & 1 oblique
    */
  

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
