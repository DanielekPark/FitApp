import { View, Image, Text, ScrollView } from "react-native";
import React from "react";
import { Button, Icon, ListItem, Avatar } from "@rneui/themed";
import styles from "../../styles/style.module";

const Plan = () => {
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
          title="Go back"
          type="outline"
          raised
          titleStyle={styles.aqua}
          containerStyle={styles.btnTitleContain}
          // onPress={() =>
          //     setUserData({
          //       ...userData,
          //       component: 'questionaire'
          //     })
          //   }
        />
        {/* 
            //Calculator button
          <Button
            title="Calculator"
            type="outline"
            raised
            titleStyle={styles.aqua}
            containerStyle={styles.btnTitleContain}
          /> */}
      </View>

      <View style={[styles.smMarTop, styles.redBrdr]}>
        <View style={{borderColor: 'blue', borderWidth: 1, marginTop: 5}}>
        <ListItem bottomDivider>
          <Avatar
            size="large"
            source={{ uri: "https://randomuser.me/api/portraits/men/36.jpg" }}
          />
          <Avatar
            size="large"
            source={{ uri: "https://randomuser.me/api/portraits/men/36.jpg" }}
          />
          <ListItem.Content>
            <ListItem.Title>Exercise</ListItem.Title>
            <ListItem.Subtitle>3 sets 12 reps</ListItem.Subtitle>
            <ListItem.Subtitle>1 min rest</ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
        </View>
      </View>
    </View>
  );
};

export default Plan;
