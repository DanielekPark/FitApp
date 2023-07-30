import { View, Image, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "../../styles/style.module";
import { ButtonGroup, Button } from "@rneui/themed";

const Questionaire = ({ userData, setUserData }) => {
  const updateUserData = (key, value) => {
    setUserData({ ...userData, [key]: value });
  };

  const showButtons = () => {
    setUserData({ ...userData, component: "selections" });
  };

  return (
    <>
      <View style={styles.topImgWrap}>
        <View>
          {/* ======= Next button =========*/}
          {userData.exp !== "" &&
            userData.objective !== "" &&
            userData.availability !== "" && (
              <Button
                title="Next"
                titleStyle={{ fontWeight: "700" }}
                buttonStyle={styles.activeBtn}
                containerStyle={{
                  width: 200,
                  height: 40,
                  marginHorizontal: 50,
                  marginVertical: 10,
                }}
                onPress={() => showButtons()}
              />
            )}
        </View>
      </View>
      <View style={[styles.screenWidth]}>
        <View>
          <View>
            <View>
              <Text
                style={[
                  styles.fontTwenty,
                  styles.centerText,
                  styles.smMarBottom,
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
                  textStyle={styles.aqua}
                  onPress={(value) => updateUserData("objective", value)}
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
    </>
  );
};

export default Questionaire;
