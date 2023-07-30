import { View, Image, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "../styles/style.module";
import { ButtonGroup } from "@rneui/themed";
import Questionaire from "../components/weights/questionaire";
// import LiftingOptions from "../components/weights/liftingOptions";
// import exercises from "../components/weights/exercises";

function WeightsScreen() {
  const [userData, setUserData] = useState({
    levels: ["Beginner", "Intermediate", "Returning user"],
    goals: ["Gain muscle", "Get stronger"],
    days: [2, 3, 4],
    exercises: [],
    component: "questionaire",
    edit: "",
    availability: "",
    exp: "",
    objective: '',
    upper: [],
    lower: [],
    previewPlan: false,
    index: "",
  });



  // useEffect(() => {
  //   console.log(userData, "line 30");
  // }, [userData]);

  return (
    <View style={[styles.screenWrapper]}>
      <View style={styles.topImgWrap}>
        {/* ======= Dumbbell Image =========*/}
        <View>
          <Image source={require("../assets/images/dumbbell.png")} />
        </View>
      </View>

      <View style={styles.smMarBottom}>
        {/* ======= Weight lifting questionaire =========*/}
        {userData.component === 'questionaire' && 
        <Questionaire userData={userData} setUserData={setUserData}/>}

      </View>
    </View>
  );
}

export default WeightsScreen;
