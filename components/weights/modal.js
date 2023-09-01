import React from "react";
import { Overlay, Icon } from "@rneui/themed";
import { View } from "react-native";
import Calculator from "../calculator/calculator";

const Modal = ({ setShowDialog, showDialog }) => {
  //closes modal window
  const closeModal = () => setShowDialog(false);

  return (
    <View>
      <Overlay isVisible={showDialog} onBackdropPress={closeModal}>
      <Icon name="close" type="font-awesome" style={{marginLeft: 'auto'}} color='#33cccc' onPress={closeModal}/>
        <Calculator />
      </Overlay>
    </View>
  );
};

export default Modal;
