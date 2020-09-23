import React from "react";
import { Text, View, Alert, TouchableOpacity } from "react-native";

import { Styles } from "./styles";

const ButtonComponent = ({
  title,
  borderWidth,
  borderColor,
  background,
  colorTitle,
  ...rest
}) => {
  return (
    <TouchableOpacity
      style={[
        Styles.button,
        {
          backgroundColor: background,
          borderWidth: borderWidth,
          borderColor: borderColor,
        },
      ]}
      {...rest}
    >
      <Text style={[Styles.textButton, { color: colorTitle }]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ButtonComponent;
