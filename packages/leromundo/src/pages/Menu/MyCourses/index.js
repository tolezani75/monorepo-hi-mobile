import React, { useState } from 'react';
import { View, Dimensions, Text } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { useNavigation } from '@react-navigation/native';

import CoursesInProgress from './CoursesInProgress';
import CoursesCompleted from './CoursesCompleted';

import CustomArrow from '@monorepo-hi-mobile/shared/components/CustomArrowBack';

import { Styles } from './styles';
import colors from '~/styles/colors';

const FirstRoute = () => <CoursesInProgress />;

const SecondRoute = () => <CoursesCompleted />;

const initialLayout = { width: Dimensions.get('window').width };

const MyCourses = () => {
  const navigation = useNavigation();

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'first', title: 'EM ANDAMENTO' },
    { key: 'second', title: 'CONCLUÍDOS' },
  ]);

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });

  return (
    <View style={{ flex: 1 }}>
      <View style={Styles.header}>
        <CustomArrow onPress={() => navigation.goBack()} />

        <Text>MEUS CURSOS</Text>
      </View>

      <TabView
        lazy
        renderTabBar={(props) => <TabBar {...props} />}
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
        renderTabBar={(props) => (
          <TabBar
            {...props}
            activeColor={colors.disableColor}
            inactiveColor={colors.disableColor}
            indicatorStyle={{ backgroundColor: colors.disableColor }}
            style={{
              backgroundColor: colors.backgroundDefault,
              color: colors.defaultTextColor,
            }}
          />
        )}
        style={{
          backgroundColor: colors.backgroundDefault,
          color: colors.defaultTextColor,
        }}
      />
    </View>
  );
};

export default MyCourses;
