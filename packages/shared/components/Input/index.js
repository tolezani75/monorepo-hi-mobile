import React from "react";
import { TextInput, View } from "react-native";

import { Styles } from "./styles";

const Input = ({ borderBottomColor, borderBottomWidth, ...rest }) => {
  return (
    <View style={Styles.container}>
      <TextInput
        style={[
          Styles.input,
          {
            borderBottomColor,
            borderBottomWidth,
          },
        ]}
        {...rest}
      />
    </View>
  );
};

export default Input;
