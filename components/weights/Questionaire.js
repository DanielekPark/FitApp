import { View, Image, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "../../styles/style.module";
import { ButtonGroup } from "@rneui/themed";

const Questionaire = ({userData, setUserData}) => {
    const updateUserData = (key, value) => {
        setUserData({ ...userData, [key]: value });
      };
    return (
        <View style={[styles.smMarBottom, styles.screenWidth]}>
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
                Choose your level
              </Text>
            </View>
            <View>
              <View>
                <ButtonGroup
                  buttons={userData.levels}
                  containerStyle={styles.btnContainer}
                  selectedButtonStyle={styles.activeBtn}
                  buttonStyle={styles.inactiveBtn}
                  innerBorderStyle={styles.transparentBtn}
                  buttonContainerStyle={styles.btnWrapper}
                  textStyle={styles.aqua}
                  onPress={(value) => updateUserData("exp", value)}
                  selectedIndex={userData.exp}
                  vertical
                />
              </View>
            </View>
          </View>
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
                Exercise goals
              </Text>
            </View>
            <View>
              <View>
                <ButtonGroup
                  buttons={userData.goals}
                  containerStyle={styles.btnContainer}
                  selectedButtonStyle={styles.activeBtn}
                  buttonStyle={[styles.inactiveBtn, styles.aqua]}
                  innerBorderStyle={styles.transparentBtn}
                  buttonContainerStyle={styles.btnWrapper}
                  textStyle={styles.aqua}                      onPress={(value) => updateUserData("objective", value)}
                  selectedIndex={userData.objective}
                  vertical
                />
              </View>
            </View>
          </View>
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
                Days available per week
              </Text>
            </View>
            <View>
              <View>
                <ButtonGroup
                  buttons={userData.days}
                  containerStyle={styles.btnContainer}
                  selectedButtonStyle={styles.activeBtn}
                  buttonStyle={styles.inactiveBtn}
                  buttonContainerStyle={styles.btnWrapper}
                  innerBorderStyle={styles.transparentBtn}
                  textStyle={styles.aqua}
                  onPress={(value) => updateUserData("availability", value)}
                  selectedIndex={userData.availability}
                  vertical
                />
              </View>
            </View>
          </View>
        </View>
      </View>
    )
}

export default Questionaire; 