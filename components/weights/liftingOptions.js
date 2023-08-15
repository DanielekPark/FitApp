import React, { useState } from "react";
import { View, Text } from "react-native";
import styles from "../../styles/style.module";
import { Button, FAB } from "@rneui/base";
import TabBtns from "./tabBtns";
import ExerciseSelections from "./exerciseSelections";

const LiftingOptions = ({ userData, setUserData }) => {
  const [index, setIndex] = useState(0);

  //Goes back to previous section of weightlifting
  const goBack = () => {
    if(userData.availability === 0 && userData.selectedNum === 6){
      setUserData({...userData, hideExercises: false}); 
      return; 
    }

    if(userData.component === 'selections') {
      setUserData({ ...userData, component: "questionaire" }); 
      return; 
    }
  }

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
            Choose your exercises
          </Text>
        </View>
      </View>
      <View
        style={[
          styles.smMarBottom,
          { flexDirection: "row", justifyContent: "space-evenly" },
        ]}
      >
        <Button
          title="Go Back"
          titleStyle={{ fontWeight: "700" }}
          buttonStyle={styles.activeBtn}
          containerStyle={{
            width: 150,
            height: 40,
            marginVertical: 10,
          }}
          onPress={goBack}
        />
        {/* Hide button if there are less than 6 different exercises selected */}
        {userData.availability === 0 && userData.selectedNum === 6 && (
          <Button
            title="Add sets & reps"
            titleStyle={{ fontWeight: "700" }}
            buttonStyle={styles.activeBtn}
            containerStyle={{
              width: 150,
              height: 40,
              marginVertical: 10,
            }}
            onPress={() => setUserData({...userData, hideExercises: true })}
          />
        )}
      </View>
      <View style={styles.smMarTop}>
        <View>
          {/* ======= Exercises tab selection ======== */}
          <TabBtns userData={userData} index={index} setIndex={setIndex} />
        </View>
        <View style={{ height: 350 }}>
          {/* =======Displays exercises ======== */}
          <ExerciseSelections
            userData={userData}
            setUserData={setUserData}
            index={index}
            setIndex={setIndex}
          />
          {/* =======Calculator======== */}
          <FAB
            containerStyle={{ top: 80 }}
            title="calculator"
            visible={false}
            size="small"
            placement="right"
            color="#33cccc"
          />
        </View>
      </View>
    </View>
  );
};

export default LiftingOptions;
