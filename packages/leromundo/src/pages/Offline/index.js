import React from 'react';
import { View, FlatList, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import UserOfflineClass from '@monorepo-hi-mobile/shared/components/UserOfflineClass';

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

const Offline = () => {
  const navigation = useNavigation();

  return (
    <>
      <View style={Styles.header}>
        <Text style={Styles.title}>Offline</Text>
      </View>

      <FlatList
        style={Styles.listContainer}
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <UserOfflineClass
            item={item}
            progressBarColor={colors.progressBarColor}
            actionColor={colors.actionColor}
            backgroundColor={colors.classListBackgroundColor}
            accountIconColor={colors.accountIconColor}
            onPress={() => {}}
          />
        )}
      />
    </>
  );
};

export default Offline;
