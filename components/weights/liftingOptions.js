import React, { useState } from "react";
import { View, Text, Alert } from "react-native";
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

  /* Enables user to add sets & weights & preview workout */ 
  const nextBtn = () => {
    //checks weights for selected exercises have been added
    
    if(userData.hideExercises){
      const counter = userData.upper.reduce((total, item) => {
        if(item.weight > 4){
          total += 1; 
        }
        return total; 
      }, 0) + userData.lower.reduce((total, item) => {
        if(item.weight > 4){
          total += 1; 
        }
        return total; 
      }, 0)

      if (counter === userData.selectedNum) {
        setUserData({...userData, component: 'plan'}); 
        return;
      }

      if(counter !== userData.selectedNum){
        Alert.alert('Please add weights for all of your exercises'); 
        return; 
      }
    }

    if(userData.availability === 0 && userData.selectedNum === 6){
      setUserData({...userData, hideExercises: true }); 
      return; 
    }
  }

  //need feature for adding weight to exercises 
  //create modal for calculator

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
            title="Next"       
            titleStyle={{ fontWeight: "700" }}
            buttonStyle={styles.activeBtn}
            containerStyle={{
              width: 150,
              height: 40,
              marginVertical: 10,
            }}
            onPress={nextBtn}
          />
        )}
      </View>
      <View style={styles.smMarTop}>
        <View>
          {/* ======= Exercises tab selection ======== */}
          <TabBtns userData={userData} index={index} setIndex={setIndex} />
        </View>
        <View>
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
            visible={userData.hideExercises ? true : false}
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
