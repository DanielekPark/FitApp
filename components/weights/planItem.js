import React from "react";
import { View, Text } from "react-native";
import { Button, ListItem, Avatar } from "@rneui/themed";
import styles from "../../styles/style.module";

const PlanItem = ({ exer, showDemo, setShowDemo, userData, setUserData, workoutBtns, setWorkoutBtns }) => {

  //Estimated weight & repetitions for user
  const determineNumbers = (exer, workoutBtns) => {
    let percentage; 
    let repetitions; 
    if (workoutBtns === 'warm-up') percentage = 0.5;
    if (workoutBtns === 'this-week') percentage = 0.7;
    if (workoutBtns === 'next-week') percentage = 0.6;

    if(userData.returningUser === 1){
      if(percentage === 0.5) repetitions = 8; 
      if(percentage === 0.7) repetitions = 12;
      if(percentage === 0.6) repetitions = 10; 
      //First item in the array is the estimated weight
      return [Math.trunc(exer.weight * percentage), repetitions];
    }
    
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
            3 sets {workoutBtns === 'warm-up' && `${determineNumbers(exer, workoutBtns)[1]} reps ${determineNumbers(exer, workoutBtns)[0]} lbs`} 
            {workoutBtns === 'this-week' && `${determineNumbers(exer, workoutBtns)[1]} reps ${determineNumbers(exer, workoutBtns)[0]} lbs`} 
            {workoutBtns === 'next-week' && `${determineNumbers(exer, workoutBtns)[1]} reps ${determineNumbers(exer, workoutBtns)[0]} lbs`} 
        </ListItem.Subtitle>
        <ListItem.Subtitle>{workoutBtns === 'warm-up'? '1 min rest' : '1-2 min rest'}</ListItem.Subtitle>
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
