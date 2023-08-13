import React from "react";
import { View } from "react-native";
import { ListItem, Avatar } from "@rneui/themed";
import styles from "../../styles/style.module";

const ExerciseItem = ({ exer, setUserData, userData }) => {
  //returns a string to update userData hook 
  const arrayExer = (exer) => {
    if (
      exer.muscleGroup === "chest" ||
      exer.muscleGroup === "shoulders" ||
      exer.muscleGroup === "back" ||
      exer.muscleGroup === "biceps" ||
      exer.muscleGroup === "triceps"
    ) {
      return "upper";
    }
    if (
      exer.muscleGroup === "thigh" ||
      exer.muscleGroup === "hamstring" ||
      exer.muscleGroup === "calf"
    ) {
      return "lower";
    }
  }

  //Selects the exercise
  const handlePress = (exer) => {
    let arry = arrayExer(exer);

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
      //checks if 6 different exercises have been selected
      setUserData({ ...userData, selectedNum: userData.selectedNum + 1, [arry]: updatePlan });
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

  //Add user's weight for exercise
  const handleChange = (value) => {
    const weight = Number(value);
    let arry = arrayExer(exer);

    const updateWeight = userData[arry].map((item) => {
      if(exer.name === item.name) {
        return {...item, weight: weight}
      }
      return item; 
    }); 
    setUserData({...userData, [arry]: updateWeight}); 
  }

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
        <ListItem.Title>{exer.name}</ListItem.Title>
        <ListItem.Subtitle>
          Primary muscle group: {exer.muscleGroup}
        </ListItem.Subtitle>
        {/* Show when 6 diff exercises are selected */}
          {/* <ListItem.Input 
            style={{flexDirection: 'row', textAlign: 'left',  }} 
            placeholder="1 Rep max"
            containerStyle={{borderColor: 'red', borderWidth: 1}}
            maxLength={3}
            keyboardType="numeric"
            onChangeText={handleChange}
            />*/}
      </ListItem.Content>
    </ListItem>
  );
};

export default ExerciseItem;
