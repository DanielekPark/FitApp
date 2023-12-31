import React from "react";
import { Overlay, Icon } from "@rneui/themed";
import { View, Text, Image } from "react-native";
import styles from "../../styles/style.module";

const DemoModal = ({ showDemo, setShowDemo, userData }) => {
  //closes modal window
  const closeModal = () => setShowDemo(false);
  const selected = userData?.exercises?.find(
    (item) => item?.showImage === true
  );

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

          {selected?.showImage &&
          <View
            style={{
              marginTop: 10,
              marginBottom: 10,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Image
              style={{ padding: 0, height: 150, width: "45%" }}
              source={selected?.startImg}
            />
            <Icon
              name="arrow-right"
              type="font-awesome"
              color="#33cccc"
              style={{ marginTop: "auto", marginBottom: "auto" }}
            />
            <Image
              style={{ padding: 0, height: 150, width: "45%" }}
              source={selected?.endImg}
            />
          </View> }
        
        <Text style={[{ marginBottom: 10 }, styles.aqua]}>{selected?.name}</Text>
        <Text style={[{ marginBottom: 10 }, styles.aqua]}>{selected?.muscleGroup}</Text>
      </Overlay>
    </View>
  );
};

export default DemoModal;
