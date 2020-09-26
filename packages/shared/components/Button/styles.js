import { Dimensions, Platform, StyleSheet } from "react-native";

const ButtonWidth = Dimensions.get("window").width;

export const Styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    borderRadius: 50,
    marginVertical: Platform.OS === "android" ? 7 : 4,

    width: ButtonWidth - 30,
  },

  textButton: {
    fontSize: 17,
  },
});
