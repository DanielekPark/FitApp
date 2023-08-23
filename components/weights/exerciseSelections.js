import React from "react";
import styles from "../../styles/style.module";
import { View, ScrollView, Text } from "react-native";
import { TabView, FAB } from "@rneui/base";
import ExerciseItem from "./exerciseItem";

const ExerciseSelections = ({ userData, setUserData, index, setIndex }) => {
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
        <View>

        </View>
      </View>
    );
  }

  // 3 day per week availability
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

  // 4 day per week availability
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
