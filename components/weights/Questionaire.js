import { View, Text, Alert } from "react-native";
import React from "react";
import styles from "../../styles/style.module";
import { ButtonGroup, Button } from "@rneui/themed";

const Questionaire = ({ userData, setUserData }) => {
  const updateUserData = (key, value) => {
    setUserData({ ...userData, [key]: value });
  };

  const showButtons = () => {
    if(userData.returning === 0){
      if(userData.numOfWeeksUsed === ""){
        Alert.alert('Please answer all the questions');
        return;
      }

      if(userData.numOfWeeksUsed < 12){
        setUserData({ ...userData, numOfMonthsUsed: 0});
      }
    }
    setUserData({ ...userData, component: "selections" });
  };

  return (
    <>
      <View style={styles.topImgWrap}>
        <View>
          {/* ======= Next button =========*/}
          {userData.exp !== "" &&
            userData.objective !== "" &&
            userData.availability !== "" &&
            (<Button
                title="Next"
                titleStyle={{ fontWeight: "700" }}
                buttonStyle={styles.activeBtn}
                containerStyle={{
                  width: 200,
                  height: 40,
                  marginHorizontal: 50,
                  marginVertical: 10,
                }}
                onPress={showButtons}
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
                  styles.aqua,
                ]}
              >
                Are you a returning user?
              </Text>
            </View>
            <View>
              <View>
                <ButtonGroup
                  buttons={['Yes', 'No']}
                  containerStyle={styles.btnContainer}
                  selectedButtonStyle={styles.activeBtn}
                  buttonStyle={styles.inactiveBtn}
                  innerBorderStyle={styles.transparentBtn}
                  buttonContainerStyle={styles.btnWrapper}
                  textStyle={styles.aqua}
                  onPress={(value) => updateUserData('returningUser', value)}
                  selectedIndex={userData.returningUser}
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
          
          {//FOR RETURNING & INTERMEDIATE USERS
          userData.returningUser === 0 && 
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
                Number of months using this app
              </Text>
            </View>
            <View>
              <View>
                <ButtonGroup
                  buttons={['Less than 3 months', '3 - 4 months']}
                  containerStyle={styles.btnContainer}
                  selectedButtonStyle={styles.activeBtn}
                  buttonStyle={styles.inactiveBtn}
                  buttonContainerStyle={styles.btnWrapper}
                  innerBorderStyle={styles.transparentBtn}
                  textStyle={styles.aqua}
                  onPress={(value) => updateUserData("numOfMonthsUsed", value)}
                  selectedIndex={userData.availability}
                  vertical
                />
              </View>
            </View>

          </View>}
        </View>
      </View>
    </>
  );
};

export default Questionaire;
