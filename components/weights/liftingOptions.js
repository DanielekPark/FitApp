import React, { useState } from "react";
import { View, Text, Alert } from "react-native";
import styles from "../../styles/style.module";
import { Button } from "@rneui/base";
import TabBtns from "./tabBtns";
import ExerciseSelections from "./exerciseSelections";
import Modal from "./modal";

const LiftingOptions = ({ userData, setUserData }) => {
  const [index, setIndex] = useState(0);
  const [showDialog, setShowDialog] = useState(false); 

  //Goes back to previous section of weightlifting
  const goBack = () => {
    if(userData.component === 'selections' && userData.hideExercises){
      setUserData({ ...userData, hideExercises: false });
      return; 
    }

    if (userData.component === "selections") {
      setUserData({ ...userData, component: "questionaire" });
      return;
    }
  };

  const countSelected = (...arry) => {
    return [].concat(...arry)
      .reduce((total, item) => {
        if(item.weight > 4){
          total += 1; 
        }
        return total;
      }, 0); 
  }

  /* Enables user to add sets & weights & preview workout */
  const nextBtn = () => {
    //checks if weights for selected exercises have been added
    if (userData.hideExercises) {
      //Number of weights added for each exercise
      let counter; 
      if(userData.availability === 0) counter = countSelected(userData.lower, userData.upper);  
      if(userData.availability === 1) counter = countSelected(userData.dayOne, userData.dayTwo, userData.dayThree);  

      if (counter === userData.selectedNum) {
        setUserData({ ...userData, component: "plan" });
        return;
      }

      if (counter !== userData.selectedNum) {
        Alert.alert('Please provide weights of all exercises');
        return;
      }
    }

    //Hides exercises 
    if (userData.availability === 0 && userData.selectedNum === 6) {
      setUserData({ ...userData, hideExercises: true });
      setIndex(0);
      return;
    }

    if (userData.availability === 1 && userData.selectedNum === 7) {
      setUserData({ ...userData, hideExercises: true });
      setIndex(0);
      return;
    }
  };

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
          {/* =======Modal Button======== */}
          {userData.hideExercises && (
            <Button
              title="Calculator"
              titleStyle={{ fontWeight: "700" }}
              buttonStyle={styles.activeBtn}
              containerStyle={{
                width: 150,
                height: 40,
                marginVertical: 10,
                marginLeft: "auto",
                marginRight: "auto",
              }}
              onPress={() => setShowDialog(!showDialog)}
            />
          )}
          {/* =======Modal======== */}
          {showDialog && <Modal setShowDialog={setShowDialog} showDialog={showDialog} />}
        </View>
      </View>
    </View>
  );
};

export default LiftingOptions;
