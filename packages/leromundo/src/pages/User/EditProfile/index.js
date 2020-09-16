import React, {useState, useCallback} from 'react';
import {Text, View} from 'react-native';

import {Styles} from './styles';

import {
  accountIconColor,
  containerColor,
  refresherColor,
} from '~/styles/colors';

const EditProfile = () => {
  return (
    <View style={Styles.container}>
      <Text>EditProfile</Text>
    </View>
  );
};

export default EditProfile;
