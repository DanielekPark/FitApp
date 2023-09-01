import React from "react";
import { View, Text } from "react-native";
import { Button, ListItem, Avatar } from "@rneui/themed";
import styles from "../../styles/style.module";

const PlanItem = ({
  exer,
  setShowDemo,
  userData,
  setUserData,
  workoutBtns,
}) => {
  //Estimated weight & repetitions for user
  const determineNumbers = (exer, workoutBtns) => {
    let percentage;
    let repetitions;

    //New users
    if (userData.returningUser === 1) {
      if (workoutBtns === "this-week") percentage = 0.75;
      if (workoutBtns === "next-week") percentage = 0.8;
      if (percentage === 0.75) repetitions = 12;
      if (percentage === 0.8) repetitions = 10;
    }
    
    //Returning users
    if (userData.returningUser === 0 || workoutBtns === "next-week" && userData.returningUser === 0) {
        if (exer.reps >= 11) {
            repetitions = 10;
            percentage = exer.objective === 0 ? 0.75 : 0.6;
          }
      if (exer.reps >= 9 && exer.reps < 11) {
          repetitions = 8;
          percentage = exer.objective === 0 ? 0.8 : 0.65;
        }
        if (exer.reps < 9) {
            repetitions = 12;
            percentage = exer.objective === 0 ? 0.85 : 0.7;
          }
        }

    if (workoutBtns === "warm-up") {
      repetitions = 8; 
      percentage = 0.5;
    }
    //First item in the array is the estimated weight to use
    return [Math.trunc(exer.weight * percentage), repetitions];
  };

  //Opens modal & finds the exercise
  const toggleDemo = () => {
    const setImage = userData.exercises.map((item) => {
      if (item.name === exer.name) {
        return { ...item, showImage: true };
      }
      return { ...item, showImage: false };
    });
    setUserData({ ...userData, exercises: setImage });
    setShowDemo(true);
  };

  return (
    <ListItem
      bottomDivider
      containerStyle={exer.chosen ? {} : { display: "none" }}
    >
      <Avatar size="large" source={exer.startImg} />
      <ListItem.Content>
        <ListItem.Title>{exer.name}</ListItem.Title>
        <ListItem.Subtitle>
          3 sets{" "}
          {workoutBtns === "warm-up" &&
            `${determineNumbers(exer, workoutBtns)[1]} reps ${
              determineNumbers(exer, workoutBtns)[0]
            } lbs`}
          {workoutBtns === "this-week" &&
            `${determineNumbers(exer, workoutBtns)[1]} reps ${
              determineNumbers(exer, workoutBtns)[0]
            } lbs`}
          {workoutBtns === "next-week" &&
            `${determineNumbers(exer, workoutBtns)[1]} reps ${
              determineNumbers(exer, workoutBtns)[0]
            } lbs`}
        </ListItem.Subtitle>
        <ListItem.Subtitle>
          {workoutBtns === "warm-up" ? "1 min rest" : "1-2 min rest"}
        </ListItem.Subtitle>
      </ListItem.Content>
      <Button
        title="Demo"
        titleStyle={{ fontWeight: "700" }}
        buttonStyle={styles.activeBtn}
        onPress={toggleDemo}
      />
    </ListItem>
  );
};

export default PlanItem;
