import React, { useState } from "react";
import { Button, Dialog, CheckBox, ListItem, Avatar } from "@rneui/themed";
import { View, Text, StyleSheet } from "react-native";
import Calculator from "../calculator/calculator";

const Modal = ({ setShowDialog, showDialog }) => {
  //closes modal window
  const closeModal = () => setShowDialog(!showDialog);

  return (
    <View>
      <Dialog isVisible={showDialog} onBackdropPress={closeModal}>
        <Dialog.Title title=" " />
        <Calculator />
      </Dialog>
    </View>
  );
};

export default Modal;
