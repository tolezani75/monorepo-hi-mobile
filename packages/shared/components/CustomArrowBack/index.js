import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

import { Styles } from "./styles";

const CustomArrowBack = ({ onPress }) => {
  return (
    <TouchableOpacity style={Styles.container} onPress={onPress}>
      <Icon onPress={onPress} name="arrow-left" size={30} color="#666" />
    </TouchableOpacity>
  );
};

export default CustomArrowBack;
