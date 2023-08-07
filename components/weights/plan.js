import {
  View,
  Image,
  Text,
  ScrollView,
  Dimensions,
  Linking,
} from "react-native";
import React from "react";
import { Button, Icon, ListItem } from "@rneui/themed";
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

      <View
        style={[
          styles.smMarTop,
          styles.redBrdr,
          { height: Dimensions.get("window").height / 1.5 },
        ]}
      >
    <ListItem
      containerStyle={[styles.listItem, { marginBottom: 2 }, styles.mxAuto]}
      bottaomDivider
    >
    <Button title="" />
    </ListItem>
        {/* <ScrollView>
            <PlanCard />
        </ScrollView> */}
      </View>
    </View>
  );
};

export default Plan;
