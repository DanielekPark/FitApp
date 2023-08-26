import React from "react";
import { Overlay, Button, Icon, Card } from "@rneui/themed";
import { View, Text, StyleSheet, Image } from "react-native";
import Calculator from "../calculator/calculator";
import styles from "../../styles/style.module";

const DemoModal = ({ showDemo, setShowDemo }) => {
  //closes modal window
  const closeModal = () => setShowDemo(false);

  return (
    <View>
      <Overlay isVisible={showDemo} onBackdropPress={closeModal}>
        <Icon
          name="close"
          type="font-awesome"
          style={{ marginLeft: "auto" }}
          color="#33cccc"
          onPress={closeModal}
        />
        <View
          style={{
            marginTop: 10,
            marginBottom: 10,
            flexDirection: "row",
            justifyContent: "space-between"
          }}
        >
          <Image
            style={{ padding: 0, height: 150, width: "45%" }}
            source={{
              uri: "https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg",
            }}
          />
          <Icon name="arrow-right" type="font-awesome" style={{marginTop: 'auto', marginBottom: 'auto'}} />
          <Image
            style={{ padding: 0, height: 150, width: "45%" }}
            source={{
              uri: "https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg",
            }}
          />
        </View>
        <Text style={{ marginBottom: 10 }}>
          Exercise name
        </Text>
        <Text style={{ marginBottom: 10 }}>
          Muscle group
        </Text>
      </Overlay>
    </View>
  );
};

export default DemoModal;
