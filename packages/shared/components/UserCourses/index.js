import React from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import { Styles, PosterWidth } from "./styles";

const UserCoursesInProgress = ({
  item,
  progressBarColor,
  actionColor,
  backgroundColor,
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
            <View style={{ marginLeft: 10, marginVertical: 5 }}>
              <Text style={Styles.titleCourse}>
                Relatórios Escolares: uma reflexão sobre concepções de
                avalicação e o texto escrito - Módulo 2
              </Text>
            </View>

            <View style={Styles.containerDataUserCourse}>
              <View style={{ marginLeft: 10, marginVertical: 2 }}>
                <Text>Episódios: 10</Text>
              </View>

              <View style={{ marginVertical: 5, width: PosterWidth }}>
                <View
                  style={{
                    backgroundColor: progressBarColor,
                    width: PosterWidth,
                    marginLeft: 10,
                  }}
                >
                  <View
                    style={{
                      backgroundColor: actionColor,
                      //width: (posterWidth * item.percentComplete) / 100,
                      width: (PosterWidth * 30) / 100,
                      height: 5,
                    }}
                  />
                </View>
              </View>

              <View style={{ marginLeft: 10, marginVertical: 2 }}>
                <Text>Concluido: 20%</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default UserCoursesInProgress;
