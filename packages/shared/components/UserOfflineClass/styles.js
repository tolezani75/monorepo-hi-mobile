import { StyleSheet, Dimensions } from "react-native";
import { isIphoneX } from "react-native-iphone-x-helper";

const ScreenWidth = Dimensions.get("window").width;
export const PosterWidth = Dimensions.get("window").width / 3;
export const DetailsWidth = Dimensions.get("window").width / 1.7;

export const Styles = StyleSheet.create({
  containerContent: {
    flex: 1,
    flexDirection: "row",
  },

  button: {
    width: ScreenWidth,
    marginVertical: 4,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },

  content: {
    flexDirection: "column",
    width: DetailsWidth,
  },

  poster: {
    height: (ScreenWidth - 20 * 4) / 3 / 0.6,
    width: (ScreenWidth - 20 * 4) / 3,
    borderRadius: 8,
  },

  posterBlock: {
    marginBottom: 20,
    marginRight: 20,
  },

  posterWidth: {
    width: (ScreenWidth - 20 * 4) / 3,
  },

  titleCourse: {
    fontWeight: "bold",
    marginLeft: 7,
  },

  containerDataUserCourse: {
    position: "absolute",
    top: isIphoneX() ? 170 : 140,
    bottom: 0,
  },
});
