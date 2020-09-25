import React from 'react';
import {Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

import {Styles} from './styles';

import Logo from '@monorepo-hi-mobile/shared/components/Logo';
import Input from '@monorepo-hi-mobile/shared/components/Input';
import Button from '@monorepo-hi-mobile/shared/components/Button';
import ArrowBack from '@monorepo-hi-mobile/shared/components/CustomArrowBack';

import logo from '../../../assets/images/logo.png';

import colors from '../../../styles/colors';

const SignIn = () => {
  const navigation = useNavigation();

  return (
    <View style={Styles.container}>
      <ArrowBack onPress={() => navigation.navigate('SignIn')} />
      <Text>Esqueceu a senha?</Text>

      <Input borderBottomWidth={1} placeholder="Email" />

      <Button
        background={`${colors.actionColor}`}
        title="Entrar"
        colorTitle={`${colors.primaryColor}`}
        onPress={() => {}}
      />

      <Button
        borderWidth={2}
        title="Voltar"
        onPress={() => navigation.navigate('SignIn')}
      />
    </View>
  );
};

export default SignIn;
