import React from 'react';
import {Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {Styles} from './styles';

import Logo from '@monorepo-hi-mobile/shared/components/Logo';
import Input from '@monorepo-hi-mobile/shared/components/Input';
import Button from '@monorepo-hi-mobile/shared/components/Button';
import ArrowBack from '@monorepo-hi-mobile/shared/components/CustomArrowBack';

import logo from '../../../assets/images/logo.png';

import colors from '../../../styles/colors';

const SignUp = () => {
  const navigation = useNavigation();

  return (
    <View style={Styles.container}>
      <ArrowBack onPress={() => navigation.navigate('SignIn')} />

      <Text>Criar Conta</Text>

      <Input borderBottomWidth={1} placeholder="Nome" />
      <Input borderBottomWidth={1} placeholder="Senha" />
      <Input borderBottomWidth={1} placeholder="Senha" />

      <Button
        background={`${colors.actionColor}`}
        title="Criar Conta"
        colorTitle={`${colors.primaryColor}`}
        onPress={() => {}}
      />

      <Button
        borderWidth={2}
        title="Já tenho conta"
        onPress={() => navigation.navigate('SignIn')}
      />

      <View>
        <Text>
          * O nome inserido será utilizado nos certificados de conclusão dos
          cursos.
        </Text>
      </View>
    </View>
  );
};

export default SignUp;
