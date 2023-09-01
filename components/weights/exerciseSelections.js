import React from "react";
import { View } from "react-native";
import ExerciseItem from "./exerciseItem";

const ExerciseSelections = ({ userData, setUserData, index }) => {
  // 2 day per week availability
  if (userData.availability === 0) {
    return (
      <View>
        {/* UPPER BODY EXERCISES*/}
        {index === 0 &&
          userData.upper.map((exer) => {
            return (
              <ExerciseItem
                key={`${exer.name}`}
                exer={exer}
                userData={userData}
                setUserData={setUserData}
              />
            );
          })}
        {/* LOWER BODY EXERCISES */}
        {index === 1 &&
          userData.lower.map((exer) => {
            return (
              <ExerciseItem
                key={`${exer.name}`}
                exer={exer}
                userData={userData}
                setUserData={setUserData}
              />
            );
          })}
      </View>
    );
  }

  // 3 day per week availability
  if (userData.availability === 1) {
    return (
      <View>
        {/* BACK & BICEP EXERCISES*/}
        {index === 0 &&
          userData.dayOne.map((exer) => {
            return (
              <ExerciseItem
                key={`${exer.name}`}
                exer={exer}
                userData={userData}
                setUserData={setUserData}
              />
            );
          })}
        {/*  LEGS & CORE EXERCISES */}
        {index === 1 &&
          userData.dayTwo.map((exer) => {
            return (
              <ExerciseItem
                key={`${exer.name}`}
                exer={exer}
                userData={userData}
                setUserData={setUserData}
              />
            );
          })}
        {/* CHEST & TRICEP EXERCISES */}
        {index === 2 &&
          userData.dayThree.map((exer) => {
            return (
              <ExerciseItem
                key={`${exer.name}`}
                exer={exer}
                userData={userData}
                setUserData={setUserData}
              />
            );
          })}
      </View>
    );
  }
};

export default ExerciseSelections;
