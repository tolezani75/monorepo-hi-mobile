import React from 'react';
import { FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import UserCoursesInProgress from '@monorepo-hi-mobile/shared/components/UserCourses';

import { Styles, DetailsWidth, PosterWidth } from './styles';
import colors from '~/styles/colors';

const data = [
  {
    id: 1,
    title: 'luis',
  },
  {
    id: 2,
    title: 'astolfo',
  },
];

const CoursesInProgress = () => {
  const navigation = useNavigation();

  return (
    <FlatList
      style={Styles.listContainer}
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <UserCoursesInProgress
          item={item}
          progressBarColor={colors.progressBarColor}
          actionColor={colors.actionColor}
          backgroundColor={colors.classListBackgroundColor}
          onPress={() => {}}
        />
      )}
    />
  );
};

export default CoursesInProgress;
