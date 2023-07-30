import React, { useState } from "react";
import { View, Dimensions } from "react-native";
import { Button, Text, Input } from "@rneui/themed";
import styles from "../../styles/style.module";

function Calculator() {
  const [fitData, setFitData] = useState({
    weight: "",
    reps: "",
    oneRepMax: "",
  });

  //Calculates recommended weight based on weight & repetitions data
  const calcStrength = () => {
    //converts data received from user to number
    const weight = fitData.weight / 1;
    const repetitions = fitData.reps / 1;

    if (!weight || weight < 7) return;
    if (!repetitions) return;
    if (repetitions < 1 || repetitions > 15) return;
    const oneRepMax = Math.round(weight / (1.0287 - 0.0278 * repetitions));

    setFitData({ ...fitData, reps: repetitions });
    setFitData({ ...fitData, weight: weight });
    setFitData({ ...fitData, oneRepMax: `${oneRepMax}` });
  };

  return (
    <View
      style={[
        styles.calcWrapper,
        { height: Dimensions.get("window").height / 2 },
      ]}
    >
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
            Calculate your strength
          </Text>
          {fitData.oneRepMax > 0 && (
            <Text style={[styles.centerText, styles.smMarBottom]}>
              {`Estimated 1 repetition max ${fitData.oneRepMax}`}
            </Text>
          )}
        </View>
        <View style={styles.smMarTop}>
          <Input
            inputMode="numeric"
            maxLength={3}
            placeholder="Weight used"
            onChangeText={(value) => setFitData({ ...fitData, weight: value })}
            inputContainerStyle={styles.inputContainer}
            inputStyle={styles.inputStyle}
          />
          <Input
            inputMode="numeric"
            maxLength={2}
            placeholder="Reps completed"
            onChangeText={(value) => setFitData({ ...fitData, reps: value })}
            inputContainerStyle={styles.inputContainer}
            inputStyle={styles.inputStyle}
          />
          <Button
            buttonStyle={styles.calcBtn}
            title="Calculate"
            onPress={calcStrength}
            containerStyle={{ marginTop: 100 }}
          />
        </View>
      </View>
    </View>
  );
}

export default Calculator;
