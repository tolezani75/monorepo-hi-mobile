import { Dimensions, StyleSheet } from "react-native";

const InputWidth = Dimensions.get("window").width;

export const Styles = StyleSheet.create({
  input: {
    height: 50,
    backgroundColor: "#fff",
    marginVertical: 5,
    width: InputWidth - 30,
  },
});
