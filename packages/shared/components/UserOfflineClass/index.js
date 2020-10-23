import React from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import { Styles, PosterWidth } from "./styles";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const UserOfflineClass = ({
  item,
  progressBarColor,
  actionColor,
  backgroundColor,
  accountIconColor,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={[Styles.button, { backgroundColor: backgroundColor }]}
      onPress={onPress}
    >
      <View style={[Styles.posterBlock, Styles.posterWidth]}>
        <View style={[Styles.containerContent]}>
          <View>
            <Image
              style={Styles.poster}
              source={{
                uri:
                  "https://d1moz875wjmnuy.cloudfront.net/editorial/2020/06-30/5ed6742e42204be79df2310be88689a3-640x360.jpg",
              }}
              resizeMethod="resize"
            />
          </View>

          <View style={Styles.content}>
            <View
              style={{
                flexDirection: "row",
                marginLeft: 10,
                marginVertical: 5,
              }}
            >
              <FontAwesome5
                name="cloud-download-alt"
                color={accountIconColor}
                size={20}
              />
              <Text style={Styles.titleCourse}>
                Relatórios Escolares: uma reflexão sobre concepções de
                avalicação e o texto escrito - Módulo 2
              </Text>
            </View>

            <View style={Styles.containerDataUserCourse}>
              <View style={{ marginLeft: 10, marginVertical: 2 }}>
                <Text>Episódios: 10</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default UserOfflineClass;
