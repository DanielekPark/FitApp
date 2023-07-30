import React, { useEffect } from "react";
import { Pressable } from "react-native";
import { ListItem, Avatar } from "@rneui/themed";
import styles from "../../styles/style.module";

const ExerciseItem = ({ exer, setUserData, userData }) => {

  const handlePress = (exer) => {
    const arry = exer.edit;
    //Amount of exercises selected targeting the same muscle group
    // const countSelected = userData[arry].reduce((total, item) => {
    //   if (item.muscleGroup === exer.muscleGroup) {
    //     if (item.chosen) {
    //       total += 1;
    //     }
    //   }
    //   return total;
    // }, 0);
    console.log(userData.availability)

    //CHECKS IF EXERCISES THAT TARGETS THE SAME MUSCLES HAS BEEN CHOSEN
    // if (countSelected < 1) {
    //   const updatePlan = userData[arry].map((item) => {
    //     if (exer.muscleGroup === item.muscleGroup) {
    //       if (exer.name === item.name) {
    //         return { ...item, chosen: !item.chosen };
    //       }
    //     }
    //     return item;
    //   });
    //   setUserData({ ...userData, [arry]: updatePlan });
    // }

    // if (countSelected >= 1) {
    //   const removePrev = userData[arry].map((item) => {
    //     if (exer.muscleGroup === item.muscleGroup) {
    //       if (exer.name !== item.name) {
    //         return { ...item, chosen: false };
    //       }
    //       if (exer.name === item.name) {
    //         return { ...item, chosen: true };
    //       }
    //     }
    //     return item;
    //   });
    //   setUserData({ ...userData, [arry]: removePrev });
    // }
  };

  return (
    <Pressable onPress={() => handlePress(exer)}>
      <ListItem containerStyle={[styles.listItem, styles.mxAuto]} bottomDivider>
        <ListItem.CheckBox
          iconType="material-community"
          checkedIcon="checkbox-marked"
          uncheckedIcon="checkbox-blank-outline"
          checked={exer.chosen ? true : false}
        />
        <Avatar
          size="large"
          source={{ uri: "https://randomuser.me/api/portraits/men/36.jpg" }}
        />
        <ListItem.Content>
          <ListItem.Title>{exer.name}</ListItem.Title>
          <ListItem.Subtitle>
            Primary muscle group: {exer.muscleGroup}
          </ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    </Pressable>
  );
};

export default ExerciseItem;
