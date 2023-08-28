import { View, Image, Text } from "react-native";
import React, { useState } from "react";
import { Button } from "@rneui/themed";
import styles from "../../styles/style.module";
import DemoModal from "./demoModal";
import PlanItem from "./planItem";

const Plan = ({ userData, setUserData }) => {
  const [showDemo, setShowDemo] = useState(false);
  const [workoutBtns, setWorkoutBtns] = useState('warm-up');

  return (
    <View>
      <View>
        <View>
          <Text
            style={[
              styles.fontTwenty,
              styles.centerText,
              styles.smMarBottom,
              styles.smMarTop,
              styles.aqua,
            ]}
          >
            Weightlifting plan
          </Text>
        </View>
      </View>

      <View style={[styles.smMarBottom, styles.smMarTop, { flexDirection: "row" }]}>
        <Button
          title="Go Back"
          titleStyle={{ fontWeight: "700" }}
          buttonStyle={styles.activeBtn}
          containerStyle={styles.btnTitleContain}
          // onPress={() =>
          //     setUserData({
          //       ...userData,
          //       component: 'questionaire'
          //     })
          //   }
        />
      </View>
      <View style={[{flexDirection: 'row', justifyContent: 'space-between'}, styles.smMarTop]}>
        <Button
          title="Warm-up"
          titleStyle={ workoutBtns === 'warm-up' ? {color: "#33cccc"} : {color: 'white'}}
          buttonStyle={[styles.activeBtn, workoutBtns === 'warm-up' ? {backgroundColor: 'white'} : {backgroundColor: "#33cccc"}]}
          containerStyle={{width: '30%'}}
          onPress={() => setWorkoutBtns('warm-up')}
        />
        <Button
          title="This week"
          titleStyle={ workoutBtns === 'this-week' ? {color: "#33cccc"} : {color: 'white'}}
          buttonStyle={[styles.activeBtn, workoutBtns === 'this-week' ? {backgroundColor: 'white'} : {backgroundColor: "#33cccc"}]}
          containerStyle={{width: '30%'}}
          onPress={() => setWorkoutBtns('this-week')}
        />
        <Button
          title="Next week"
          titleStyle={ workoutBtns === 'next-week' ? {color: "#33cccc"} : {color: 'white'}}
          buttonStyle={[styles.activeBtn, workoutBtns === 'next-week' ? {backgroundColor: 'white'} : {backgroundColor: "#33cccc"}]}
          containerStyle={{width: '30%'}}
          onPress={() => setWorkoutBtns('next-week')}
        />
      </View>
      <View style={styles.smMarTop}>
        {/* button groups for 2 day, 3 day, 4 day */}
        {/* Warm up */}
        <View style={{ marginTop: 5 }}>
          <Text>Day 1</Text>
        </View>
        <View style={{ marginTop: 5 }}>
          {userData.lower.map((exer) => {
            return (
              <PlanItem
                key={exer.name + "plan-item"}
                exer={exer}
                showDemo={showDemo}
                setShowDemo={setShowDemo}
                userData={userData}
                setUserData={setUserData}
                workoutBtns={workoutBtns}
                setWorkoutBtns={setWorkoutBtns}
              />
            );
          })}
          {/* Day 2 */}
          <Text>Day 2</Text>
          {userData.upper.map((exer) => {
            return (
              <PlanItem
                key={exer.name + "plan-item"}
                exer={exer}
                showDemo={showDemo}
                setShowDemo={setShowDemo}
                userData={userData}
                setUserData={setUserData}
                workoutBtns={workoutBtns}
                setWorkoutBtns={setWorkoutBtns}
              />
            );
          })}
          {/* Day 3 */}

          {/* Day 4 */}

          <DemoModal showDemo={showDemo} setShowDemo={setShowDemo} />
        </View>
      </View>
    </View>
  );
};

export default Plan;
