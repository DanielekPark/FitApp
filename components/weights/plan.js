import { View, Image, Text, ScrollView } from "react-native";
import React, {useState} from "react";
import { Button, Icon, ListItem, Avatar } from "@rneui/themed";
import styles from "../../styles/style.module";
import DemoModal from "./demoModal";

const Plan = () => {
  const [showDemo, setShowDemo] = useState(false); 

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

      <View style={[styles.smMarBottom, { flexDirection: "row" }]}>
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

      <View style={[styles.smMarTop, styles.redBrdr]}>
        <View style={{ borderWidth: 1, marginTop: 5 }}>
          <Text>Day 1</Text>
        </View>
        <View style={{ borderColor: "blue", borderWidth: 1, marginTop: 5 }}>
          <ListItem bottomDivider>
            <Avatar
              size="large"
              source={{ uri: "https://randomuser.me/api/portraits/men/36.jpg" }}
            />
            <Button
              title="Demo"
              titleStyle={{ fontWeight: "700" }}
              buttonStyle={styles.activeBtn}
              onPress={() =>  setShowDemo(true)}
            />
            <ListItem.Content>
              <ListItem.Title>Exercise</ListItem.Title>
              <ListItem.Subtitle>3 sets 12 reps </ListItem.Subtitle>
              <ListItem.Subtitle>1 min rest</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
          <DemoModal showDemo={showDemo} setShowDemo={setShowDemo} />
        </View>
      </View>
    </View>
  );
};

export default Plan;
