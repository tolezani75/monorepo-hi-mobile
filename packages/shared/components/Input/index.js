import React, { useEffect, useRef } from "react";
import { TextInput, View } from "react-native";
import { useField } from "@unform/core";

import { Styles } from "./styles";

const Input = ({ name, borderBottomColor, borderBottomWidth, ...rest }) => {
  const inputRef = useRef(null);

  const { fieldName, registerField, defaultValue, error } = useField(name);

  useEffect(() => {
    inputRef.current.value = defaultValue;
  }, [defaultValue]);
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "value",
      clearValue(ref) {
        ref.value = "";
        ref.clear();
      },
      setValue(ref, value) {
        ref.setNativeProps({ text: value });
        inputRef.current.value = value;
      },
      getValue(ref) {
        return ref.value;
      },
    });
  }, [fieldName, registerField]);

  return (
    <TextInput
      style={[
        Styles.input,
        {
          borderBottomColor,
          borderBottomWidth,
        },
      ]}
      ref={inputRef}
      defaultValue={defaultValue}
      onChangeText={(value) => {
        if (inputRef.current) {
          inputRef.current.value = value;
        }
      }}
      {...rest}
    />
  );
};

export default Input;
