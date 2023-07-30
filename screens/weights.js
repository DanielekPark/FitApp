import { View, Image, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "../styles/style.module";
import { Button } from "@rneui/themed";
import Questionaire from "../components/weights/questionaire";
import LiftingOptions from "../components/weights/liftingOptions";
import exercises from "../components/weights/exercises";

function WeightsScreen() {
  const [userData, setUserData] = useState({
    levels: ["Beginner", "Intermediate", "Returning user"],
    goals: ["Gain muscle", "Get stronger"],
    days: [2, 3, 4],
    exercises,
    component: "questionaire",
    exp: "",
    availability: "",
    objective: "",
    edit: "",
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
    previewPlan: false,
  });

  useEffect(() => {
    console.log(userData.upper);
  }, [userData]);

  return (
    <View style={[styles.screenWrapper]}>
      <View>
        {/* ======= Weight lifting questionaire =========*/}
        {userData.component === "questionaire" && (
          <Questionaire userData={userData} setUserData={setUserData} />
        )}

        {/* ======= Exercise Selection =========*/}
        {userData.component === "selections" && (
          <LiftingOptions userData={userData} setUserData={setUserData} />
        )}
      </View>
    </View>
  );
}

export default WeightsScreen;
