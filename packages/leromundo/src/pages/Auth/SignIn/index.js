import React from 'react';
import {Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

import {Styles} from './styles';

import Logo from '@monorepo-hi-mobile/shared/components/Logo';
import Input from '@monorepo-hi-mobile/shared/components/Input';
import Button from '@monorepo-hi-mobile/shared/components/Button';

import logo from '../../../assets/images/logo.png';

import colors from '../../../styles/colors';

const SignIn = () => {
  return (
    <View style={Styles.container}>
      <Logo source={logo} />

      <Text>Login</Text>

      <Input borderBottomWidth={1} placeholder="Email" />
      <Input borderBottomWidth={1} placeholder="Senha" />

      <Button
        background={`${colors.actionColor}`}
        title="Entrar"
        colorTitle={`${colors.primaryColor}`}
        onPress={() => {}}
      />

      <View style={Styles.containerResetPassword}>
        <TouchableOpacity onPress={() => {}} style={Styles.buttonResetPassword}>
          <Text style={Styles.textResetPassword}>Esqueceu a senha ?</Text>
        </TouchableOpacity>
      </View>

      <Button borderWidth={2} title="Criar Conta" onPress={() => {}} />
    </View>
  );
};

export default SignIn;
