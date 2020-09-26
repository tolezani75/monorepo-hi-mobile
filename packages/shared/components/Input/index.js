import React from "react";
import { TextInput, View } from "react-native";

import { Styles } from "./styles";

const Input = ({ borderBottomColor, borderBottomWidth, ...rest }) => {
  return (
    <>
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
    </>
  );
};

export default Input;
