import Reactotron from "reactotron-react-native";
import { reactotronRedux } from "reactotron-redux";
import reactotronSaga from "reactotron-redux-saga";
import AsyncStorage from "@react-native-community/async-storage";

if (__DEV__) {
  const tron = Reactotron.setAsyncStorageHandler(AsyncStorage)
    .configure()
    .useReactNative()
    .connect();

  tron.clear();
  console.tron = tron;
}
