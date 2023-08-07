import React from "react";
import { Pressable } from "react-native";
import { ListItem, Avatar } from "@rneui/themed";
import styles from "../../styles/style.module";

const ExerciseItem = ({ exer, setUserData, userData }) => {
  //Selects the exercise
  const handlePress = (exer) => {
    let arry = "";

    if (
      exer.muscleGroup === "chest" ||
      exer.muscleGroup === "shoulders" ||
      exer.muscleGroup === "back" ||
      exer.muscleGroup === "biceps" ||
      exer.muscleGroup === "triceps"
    ) {
      arry = "upper";
    }
    if (
      exer.muscleGroup === "thigh" ||
      exer.muscleGroup === "hamstring" ||
      exer.muscleGroup === "calf"
    ) {
      arry = "lower";
    }

    //Number of the same type of exercise targeting the same muscles
    const checkType = userData[arry].reduce((total, item) => {
      if (item.muscleGroup === exer.muscleGroup) {
        if (item.chosen) {
          total += 1;
        }
      }
      return total;
    }, 0);

    //Selects 1 exercise from a muscle group
    if (checkType < 1) {
      const updatePlan = userData[arry].map((item) => {
        if (exer.name === item.name) {
          return { ...item, chosen: !item.chosen };
        }

        return item;
      });
      setUserData({ ...userData, [arry]: updatePlan });
    }

    //Removes previous exercise & selects an exercise targeting the same muscle group
    if (checkType > 0) {
      const removePrev = userData[arry].map((item) => {
        if (exer.muscleGroup === item.muscleGroup) {
          if (exer.name !== item.name) {
            return { ...item, chosen: false };
          }
          if (exer.name === item.name) {
            return { ...item, chosen: true };
          }
        }
        return item;
      });
      setUserData({ ...userData, [arry]: removePrev });
    }
  };

  return (
    <ListItem
      onPress={() => handlePress(exer)}
      containerStyle={[styles.listItem, { marginBottom: 2 }, styles.mxAuto]}
      bottomDivider
    >
      {/* hide checkbox to add weight and reps*/}
      <ListItem.CheckBox
        iconType="material-community"
        checkedIcon="checkbox-marked"
        uncheckedIcon="checkbox-blank-outline"
        checked={exer.chosen}
        onPress={() => handlePress(exer)}
      />
      <Avatar
        size="large"
        source={{ uri: "https://randomuser.me/api/portraits/men/36.jpg" }}
      />
      <ListItem.Content>
        <ListItem.Title>
          {exer.name}
        </ListItem.Title>
        <ListItem.Subtitle>
          Primary muscle group: {exer.muscleGroup}
        </ListItem.Subtitle>
        {/* Sets */}
        <ListItem.Input></ListItem.Input>
        {/* Reps */}
        <ListItem.Input></ListItem.Input>
      </ListItem.Content>
    </ListItem>
  );
};

export default ExerciseItem;
