import { View } from "react-native";
import React, { useState } from "react";
import { Button, Text } from "@rneui/themed";
import styles from "../../styles/style.module";
import DemoModal from "./demoModal";
import List from "./list";

const Plan = ({ userData, setUserData }) => {
  const [showDemo, setShowDemo] = useState(false);
  const [workoutBtns, setWorkoutBtns] = useState("warm-up");

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
      <View
        style={[styles.smMarBottom, styles.smMarTop, { flexDirection: "row" }]}
      >
        <Button
          title="Go Back"
          titleStyle={{ fontWeight: "700" }}
          buttonStyle={styles.activeBtn}
          containerStyle={styles.btnTitleContain}
          onPress={() =>
            setUserData({
              ...userData,
              component: "selections",
            })
          }
        />
      </View>
      <View
        style={[
          { flexDirection: "row", justifyContent: "space-between" },
          styles.smMarTop,
        ]}
      >
        <Button
          title="Warm-up"
          titleStyle={
            workoutBtns === "warm-up"
              ? { color: "#33cccc" }
              : { color: "white" }
          }
          buttonStyle={[
            styles.activeBtn,
            workoutBtns === "warm-up"
              ? { backgroundColor: "white" }
              : { backgroundColor: "#33cccc" },
          ]}
          containerStyle={{ width: "30%" }}
          onPress={() => setWorkoutBtns("warm-up")}
        />
        <Button
          title="This week"
          titleStyle={
            workoutBtns === "this-week"
              ? { color: "#33cccc" }
              : { color: "white" }
          }
          buttonStyle={[
            styles.activeBtn,
            workoutBtns === "this-week"
              ? { backgroundColor: "white" }
              : { backgroundColor: "#33cccc" },
          ]}
          containerStyle={{ width: "30%" }}
          onPress={() => setWorkoutBtns("this-week")}
        />
        <Button
          title="Next week"
          titleStyle={
            workoutBtns === "next-week"
              ? { color: "#33cccc" }
              : { color: "white" }
          }
          buttonStyle={[
            styles.activeBtn,
            workoutBtns === "next-week"
              ? { backgroundColor: "white" }
              : { backgroundColor: "#33cccc" },
          ]}
          containerStyle={{ width: "30%" }}
          onPress={() => setWorkoutBtns("next-week")}
        />
      </View>
      <View style={styles.smMarTop}>
        <View>
          <Text h4 style={styles.aqua}>
            Day 1
          </Text>
        </View>
        <View style={{ marginTop: 5 }}>
          <View>
            {userData.availability === 0 && (
              <List
                showDemo={showDemo}
                setShowDemo={setShowDemo}
                userData={userData}
                setUserData={setUserData}
                workoutBtns={workoutBtns}
                setWorkoutBtns={setWorkoutBtns}
                arry={"upper"}
              />
            )}
            {userData.availability === 1 && (
              <List
                showDemo={showDemo}
                setShowDemo={setShowDemo}
                userData={userData}
                setUserData={setUserData}
                workoutBtns={workoutBtns}
                setWorkoutBtns={setWorkoutBtns}
                arry={"dayOne"}
              />
            )}
          </View>
          {/* Day 2 */}
          <Text h4 style={styles.aqua}>
            Day 2
          </Text>
          <View>
            {userData.availability === 0 && (
              <List
                showDemo={showDemo}
                setShowDemo={setShowDemo}
                userData={userData}
                setUserData={setUserData}
                workoutBtns={workoutBtns}
                setWorkoutBtns={setWorkoutBtns}
                arry={"lower"}
              />
            )}
            {userData.availability === 1 && (
              <List
                showDemo={showDemo}
                setShowDemo={setShowDemo}
                userData={userData}
                setUserData={setUserData}
                workoutBtns={workoutBtns}
                setWorkoutBtns={setWorkoutBtns}
                arry={"dayTwo"}
              />
            )}
          </View>
          {userData.availability === 1 && (
            <Text h4 style={styles.aqua}>
              Day 3
            </Text>
          )}
          {/* Day 3 */}
          {userData.availability === 1 && (
            <List
              showDemo={showDemo}
              setShowDemo={setShowDemo}
              userData={userData}
              setUserData={setUserData}
              workoutBtns={workoutBtns}
              setWorkoutBtns={setWorkoutBtns}
              arry={"dayThree"}
            />
          )}
          {/* Day 3 */}
          {userData.availability === 2 && (
            <List
              showDemo={showDemo}
              setShowDemo={setShowDemo}
              userData={userData}
              setUserData={setUserData}
              workoutBtns={workoutBtns}
              setWorkoutBtns={setWorkoutBtns}
              arry={"dayTwo"}
            />
          )}
          {/* Day 4 */}

          {/* Modal show demonstration of exercises */}
          <DemoModal
            userData={userData}
            setUserData={setUserData}
            showDemo={showDemo}
            setShowDemo={setShowDemo}
          />
        </View>
      </View>
    </View>
  );
};

export default Plan;
