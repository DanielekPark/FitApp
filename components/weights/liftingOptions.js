import React, { useState } from "react";
import { View, Text } from "react-native";
import styles from "../../styles/style.module";
import { Button } from "@rneui/base";
import TabBtns from "./tabBtns";
import ExerciseSelections from "./exerciseSelections";

const LiftingOptions = ({ userData, setUserData}) => {
  const [index, setIndex] = useState(0);

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
      <View style={[styles.smMarBottom, {flexDirection: 'row'}]}>
        <Button
          title="Go back"
          type="outline"
          raised
          titleStyle={styles.aqua}
          containerStyle={styles.btnTitleContain}
          onPress={() =>
            setUserData({
              ...userData,
              component: 'questionaire'
            })
          }
        />
        <Button
          title="Next"
          type="outline"
          raised
          titleStyle={styles.aqua}
          containerStyle={styles.btnTitleContain}
        />
      </View>
      <View style={styles.smMarTop}>
        <View>
        {/* ======= Exercises tab selection ======== */}
          <TabBtns 
            userData={userData}
            index={index} 
            setIndex={setIndex} />
        </View>
        <View
          style={{height: 350}}
        >
          {/* =======Displays exercises ======== */}
           <ExerciseSelections 
            userData={userData} 
            setUserData={setUserData} 
            index={index} 
            setIndex={setIndex} /> 
            
        </View>
      </View>
    </View>
  );
};

export default LiftingOptions;
