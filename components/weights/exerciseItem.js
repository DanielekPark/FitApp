import React from "react";
import { View, Text } from "react-native";
import { ListItem, Avatar,  } from "@rneui/themed";
import styles from "../../styles/style.module";

const ExerciseItem = ({ exer, setUserData, userData }) => {
  //returns a string to update userData hook
  const arrayExer = (exer) => {
    if (userData.availability === 0) {
      if (
        exer.muscleGroup === "Chest" ||
        exer.muscleGroup === "Shoulders" ||
        exer.muscleGroup === "Back" ||
        exer.muscleGroup === "Biceps" ||
        exer.muscleGroup === "Triceps"
      ) {
        return "upper";
      }
      if (
        exer.muscleGroup === "Thigh" ||
        exer.muscleGroup === "Hamstring" ||
        exer.muscleGroup === "Calf"
      ) {
        return "lower";
      }
    }

    if (userData.availability === 1) {
      if (exer.muscleGroup === "Back" || exer.muscleGroup === "Biceps")
        return "dayOne";
      if (
        exer.muscleGroup === "Thigh" ||
        exer.muscleGroup === "Hamstring" ||
        exer.muscleGroup === "Core"
      )
        return "dayTwo";
      if (exer.muscleGroup === "Chest" || exer.muscleGroup === "Triceps")
        return "dayThree";
    }
  };

  //Selects the exercise
  const handlePress = (exer) => {
    const arry = arrayExer(exer);

    //Number of exercises type targeting the same muscle group
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
      setUserData({
        ...userData,
        selectedNum: userData.selectedNum + 1,
        [arry]: updatePlan,
      });
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

  //Adds either reps or weight for an exercise
  const handleChange = (value, key) => {
    const number = Number(value);
    const arry = arrayExer(exer);

    const updateWeight = userData[arry].map((item) => {
      if (exer.name === item.name) {
        return { ...item, [key]: number};
      }
      return item;
    });

    setUserData({ ...userData, [arry]: updateWeight });
  };

  //Adds repetitions to exercises completed by user
  const addReps = (value) => {
    const arry = arrayExer(exer);
    const reps = Number(value);

    const updateReps = userData[arry].map((item) => {
      if (exer.name === item.name) {
        return { ...item, reps };
      }
      return item;
    });
    setUserData({ ...userData, [arry]: updateReps });
  };

  return (
    <ListItem
      onPress={() => handlePress(exer)}
      containerStyle={
        userData.hideExercises
          ? [
              styles.listItem,
              { marginBottom: 2 },
              styles.mxAuto,
              exer.chosen ? {} : { display: "none" },
            ]
          : [styles.listItem, { marginBottom: 5 }, styles.mxAuto]
      }
      bottomDivider
    >
      {/* hides checkbox to add weight & reps*/}
      {!userData.hideExercises && (
        <ListItem.CheckBox
          iconType="material-community"
          checkedIcon="checkbox-marked"
          uncheckedIcon="checkbox-blank-outline"
          checked={exer.chosen}
          onPress={() => handlePress(exer)}
        />
      )}
      <Avatar size="large" source={exer.startImg} />
      <ListItem.Content>
        <ListItem.Title>{exer.name}</ListItem.Title>
        <ListItem.Subtitle>
          Primary muscle group: {exer.muscleGroup}
        </ListItem.Subtitle>
        {/* Show when 6 diff exercises are selected */}
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-around",
            alignItems: "center",
            marginTop: 5,
          }}
        >
          {userData.returningUser === 0 && userData.hideExercises && (
            <View style={{ width: "50%", marginBottom: 5 }}>
              <ListItem.Input
                label={`${exer.reps} reps`}
                style={{ textAlign: "left", fontSize: 14 }}
                placeholder="Reps completed"
                maxLength={2}
                keyboardType="numeric"
                onChangeText={(value) => handleChange(value, 'reps') }
              />
            </View>
          )}
          {userData.hideExercises && (
            <View style={{ width: "50%" }}>
              <ListItem.Input
              label={`${exer.weight} lbs`}
                style={{ textAlign: "left", fontSize: 14 }}
                placeholder="1 Rep max"
                maxLength={3}
                keyboardType="numeric"
                onChangeText={(value) => handleChange(value, 'weight')}
              />
            </View>
          )}
        </View>
      </ListItem.Content>
    </ListItem>
  );
};

export default ExerciseItem;
