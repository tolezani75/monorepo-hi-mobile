import React from "react";
import { View, Text, Image } from "react-native";

import { Styles } from "./styles";

const Logo = ({ ...rest }) => {
  return (
    <View style={Styles.container}>
      <Image style={Styles.logo} {...rest} />
    </View>
  );
};

export default Logo;
