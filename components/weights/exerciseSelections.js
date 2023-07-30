import React from "react";
import styles from "../../styles/style.module";
import { View, ScrollView, Text } from "react-native";
import { TabView } from "@rneui/base";
import ExerciseItem from "./exerciseItem";

const ExerciseSelections = ({ userData, setUserData, index, setIndex }) => {
  // SHOWS EXERCISES BASED ON AVAILABILITY; USER CHOOSES EXERCISES
  if (userData.availability === 0) {
    return (
      <TabView
        containerStyle={styles.redBrdr}
        value={index}
        onChange={setIndex}
        animationType="spring"
      >
        <TabView.Item style={{ width: "100%" }}>
          {/* UPPER BODY EXERCISES*/}
          <ScrollView>
            {userData.upper.map((exer) => {
              return (
                <ExerciseItem
                  key={`${exer.name}`}
                  exer={exer}
                  userData={userData}
                  setUserData={setUserData}
                />
              );
            })}
          </ScrollView>
        </TabView.Item>
        <TabView.Item style={{ width: "100%" }}>
          {/* LOWER BODY EXERCISES */}
          {/* <ScrollView>
          {userData.lower.map((exer) => {
              return (
                <ExerciseItem 
                  key={`${exer.name}`} 
                  exer={exer} 
                  userData={userData} 
                  setUserData={setUserData} />
              )
            })}
          </ScrollView> */}
        </TabView.Item>
        {/* DISPLAY WORKOUT PLAN BELOW */}
      </TabView>
    );
  }

  if (userData.availability === 1) {
    return (
      <TabView value={index} onChange={setIndex} animationType="spring">
        <TabView.Item style={{ backgroundColor: "red", width: "100%" }}>
          <Text h1>Day 1</Text>
          <View></View>
        </TabView.Item>
        <TabView.Item style={{ backgroundColor: "yellow", width: "100%" }}>
          <Text h1>Day 2</Text>
        </TabView.Item>
        <TabView.Item style={{ backgroundColor: "green", width: "100%" }}>
          <Text h1>Day 3</Text>
        </TabView.Item>
      </TabView>
    );
  }

  if (userData.availability === 2) {
    return (
      <TabView value={index} onChange={setIndex} animationType="spring">
        <TabView.Item style={{ backgroundColor: "red", width: "100%" }}>
          <Text h1>Day 1</Text>
        </TabView.Item>
        <TabView.Item style={{ backgroundColor: "yellow", width: "100%" }}>
          <Text h1>Day 2</Text>
        </TabView.Item>
        <TabView.Item style={{ backgroundColor: "green", width: "100%" }}>
          <Text h1>Day 3</Text>
        </TabView.Item>
        <TabView.Item style={{ backgroundColor: "blue", width: "100%" }}>
          <Text h1>Day 4</Text>
        </TabView.Item>
      </TabView>
    );
  }
};

export default ExerciseSelections;
