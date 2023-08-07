import {
  View,
  Image,
  Text,
  ScrollView,
  Dimensions,
  Linking,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Button, Icon, ListItem } from "@rneui/themed";
import styles from "../../styles/style.module";

const PlanCard = () => {
  return (
    <>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          borderColor: "black",
          borderWidth: 2,
        }}
      >
        <Image
          style={{
            borderColor: "green",
            borderWidth: 2,
            height: 150,
            width: "45%",
          }}
          source={require("../../assets/images/bench-press-end.png")}
        />
        <View style={{ borderColor: "black", borderWidth: 2 }}>
          <Icon name="arrow-right" type="font-awesome" />
        </View>
        <Image
          style={{
            borderColor: "green",
            borderWidth: 2,
            height: 150,
            width: "45%",
          }}
          source={require("../../assets/images/bench-press-end.png")}
        />
      </View>
      <View style={{ borderColor: "black", borderWidth: 2 }}>
        <Text>Name: </Text>
        <Text>Primary Muscle Group: </Text>
        <View style={{ flexDirection: "row" }}>
          <Text>Video demo</Text>
          <Icon name="sc-youtube" type="evilicon" color="#FF0000" />
        </View>
      </View>
    </>
  );
};
export default PlanCard; 