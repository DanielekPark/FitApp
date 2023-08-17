import { View, Image, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "../styles/style.module";
import { Button } from "@rneui/themed";
import Questionaire from "../components/weights/questionaire";
import LiftingOptions from "../components/weights/liftingOptions";
import exercises from "../components/weights/exercises";
import Plan from "../components/weights/plan";

function WeightsScreen() {
  const [userData, setUserData] = useState({
    levels: ["Beginner", "Intermediate", "Returning user"],
    goals: ["Gain muscle", "Get stronger"],
    days: [2, 3, 4],
    exercises,
    component: "questionaire",
    exp: "",
    availability: "", //based on index
    objective: "",
    selectedNum: 0, //selected number of different exercises
    upper: exercises.filter((exer) => {
      if (
        exer.muscleGroup === "shoulders" ||
        exer.muscleGroup === "chest" ||
        exer.muscleGroup === "back"
      ) {
        return exer;
      }
    }),
    lower: exercises.filter((exer) => {
      if (
        exer.muscleGroup === "thigh" ||
        exer.muscleGroup === "hamstring" ||
        exer.muscleGroup === "calf"
      ) {
        return exer;
      }
    }),
    hideExercises: false,
    previewPlan: false,
  });

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

          {/* ======= Preview Exercise Plan ========= 
        {userData.component === "plan" && (
          <Plan />
        )}*/}
        </ScrollView>
      </View>
  );
}

export default WeightsScreen;
