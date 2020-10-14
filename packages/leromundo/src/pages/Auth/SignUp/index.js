import React, {useCallback, useContext, useRef} from 'react';
import {Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Form} from '@unform/mobile';

import {Styles} from './styles';

import {AuthContext} from '@monorepo-hi-mobile/shared/context/AuthContext';

import Logo from '@monorepo-hi-mobile/shared/components/Logo';
import Input from '@monorepo-hi-mobile/shared/components/Input';
import Button from '@monorepo-hi-mobile/shared/components/Button';
import ArrowBack from '@monorepo-hi-mobile/shared/components/CustomArrowBack';
import {apiUatHiv1} from '@monorepo-hi-mobile/shared/services/api';

import {service} from '../../../services/constant';

import logo from '../../../assets/images/logo.png';

import colors from '../../../styles/colors';
import AsyncStorage from '@react-native-community/async-storage';

const SignUp = () => {
  const formRef = useRef(null);
  const navigation = useNavigation();

  const handleSubmit = useCallback(async (data) => {
    try {
      const response = await apiUatHiv1.post(`/auth/registration/`, {
        service,
        name: data.name,
        email: data.email,
        password: data.password,
      });

      const {token} = response.data;

      await AsyncStorage.setItem('user_token', token);

      //navigation.navigate('HomeStackScreen', { screen: 'Home' });

      console.log(response);
    } catch (error) {
      console.log(error.response);
    }
  }, []);

  return (
    <View style={Styles.container}>
      <ArrowBack onPress={() => navigation.navigate('SignIn')} />

      <Text>Criar Conta</Text>

      <Form ref={formRef} onSubmit={handleSubmit}>
        <Input name="name" borderBottomWidth={1} placeholder="Nome" />
        <Input
          name="email"
          autoCapitalize="none"
          autoCorrect={false}
          borderBottomWidth={1}
          placeholder="Email"
        />
        <Input
          name="password"
          autoCapitalize="none"
          autoCorrect={false}
          borderBottomWidth={1}
          placeholder="Senha"
        />

        <Button
          background={`${colors.actionColor}`}
          title="Criar Conta"
          colorTitle={`${colors.primaryColor}`}
          onPress={() => formRef.current?.submitForm()}
        />
      </Form>

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
