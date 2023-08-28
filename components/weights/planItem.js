import React from "react";
import { View, Image, Text } from "react-native";
import { Button, ListItem, Avatar } from "@rneui/themed";
import styles from "../../styles/style.module";

const PlanItem = ({ exer, showDemo, setShowDemo, userData, setUserData, workoutBtns, setWorkoutBtns }) => {

  //Changes for exercise based on warm-up or week
  const determineWeight = (exer, workoutBtns) => {
    let percentage; 
    if (workoutBtns === 'warm-up') percentage = 0.5;
    if (workoutBtns === 'this-week') percentage = 0.7;
    if (workoutBtns === 'next-week') percentage = 0.6;
    //Estimated weight for user
    return Math.trunc(exer.weight * percentage);
  };

  //Opens modal & finds the exercise 
  const toggleDemo = () => {
    const setImage = userData.exercises.map((item) => {
      if(item.name === exer.name) {
        return {...item, showImage: true}
      }
      return {...item, showImage: false}; 
    }); 
    setUserData({...userData, exercises: setImage});
    setShowDemo(true);
  }

  return (
    <ListItem
      bottomDivider
      containerStyle={exer.chosen ? {} : { display: "none" }}
    >
      <Avatar
        size="large"
        source={exer.startImg}
      />
      <ListItem.Content>
        <ListItem.Title>{exer.name}</ListItem.Title>
        <ListItem.Subtitle>
            3 sets {workoutBtns === 'warm-up' && `8 reps ${determineWeight(exer, workoutBtns)} lbs`} 
            {workoutBtns === 'this-week' && `12 reps ${determineWeight(exer, workoutBtns)} lbs`} 
            {workoutBtns === 'next-week' && `10 reps ${determineWeight(exer, workoutBtns)} lbs`} 
        </ListItem.Subtitle>
        <ListItem.Subtitle>1-2 min rest</ListItem.Subtitle>
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
