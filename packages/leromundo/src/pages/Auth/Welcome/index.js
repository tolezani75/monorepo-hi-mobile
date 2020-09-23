import React from 'react';
import {View, ImageBackground, Platform, SafeAreaView} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Button from '@monorepo-hi-mobile/shared/components/Button';

import {Styles} from './styles';

import colors from '../../../styles/colors';

import onBoardingImg from '../../../assets/images/onboarding.jpg';

const Welcome = () => {
  const navigation = useNavigation();
  return (
    <ImageBackground style={Styles.image} source={onBoardingImg}>
      <View
        style={[
          Styles.container,
          {marginBottom: Platform.OS === 'android' && 20},
        ]}>
        <Button
          background={`${colors.actionColor}`}
          onPress={() => navigation.navigate('SignIn')}
          title="Entrar"
          colorTitle={`${colors.primaryColor}`}
        />
      </View>
      <SafeAreaView />
    </ImageBackground>
  );
};

export default Welcome;
