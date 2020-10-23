import React, { useCallback, useRef, useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Form } from '@unform/mobile';
import AsyncStorage from '@react-native-community/async-storage';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { AuthContext } from '@monorepo-hi-mobile/shared/context/AuthContext';
import Logo from '@monorepo-hi-mobile/shared/components/Logo';
import Input from '@monorepo-hi-mobile/shared/components/Input';
import Button from '@monorepo-hi-mobile/shared/components/Button';
import ArrowBack from '@monorepo-hi-mobile/shared/components/CustomArrowBack';
import { apiUatHiv1 } from '@monorepo-hi-mobile/shared/services/api';

import { service } from '../../../services/constant';
import logo from '../../../assets/images/logo.png';
import colors from '../../../styles/colors';
import { Styles } from './styles';

const SignUp = () => {
  const formRef = useRef(null);
  const navigation = useNavigation();
  const [hidePassword, setHidePassword] = useState(true);

  const handleSubmit = useCallback(async (data) => {
    try {
      const response = await apiUatHiv1.post(`/auth/registration/`, {
        service,
        name: data.name,
        email: data.email,
        password: data.password,
      });

      const { token } = response.data;

      await AsyncStorage.setItem('user_token', token);

      //navigation.navigate('HomeStackScreen', { screen: 'Home' });

      console.log(response);
    } catch (error) {
      console.log(error.response);
    }
  }, []);

  return (
    <View style={Styles.container}>
      <View style={{ marginLeft: 10 }}>
        <ArrowBack onPress={() => navigation.navigate('SignIn')} />
      </View>

      <Text style={Styles.title}>CRIAR CONTA</Text>

      <Form ref={formRef} onSubmit={handleSubmit}>
        <Text style={Styles.label}>NOME*</Text>
        <View style={Styles.passwordContainer}>
          <Input name="name" style={Styles.inputPassword} placeholder="Nome" />
        </View>

        <Text style={Styles.label}>E-MAIL</Text>
        <View style={Styles.passwordContainer}>
          <Input
            name="email"
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Email"
            style={Styles.inputPassword}
          />
        </View>

        <Text style={Styles.label}>SENHA</Text>
        <View style={Styles.passwordContainer}>
          <Input
            name="password"
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Senha"
            style={Styles.inputPassword}
            secureTextEntry={hidePassword}
          />

          <TouchableOpacity onPress={() => setHidePassword(!hidePassword)}>
            <Icon name={hidePassword ? 'eye-off' : 'eye'} size={23} />
          </TouchableOpacity>
        </View>

        <View style={{ alignItems: 'center' }}>
          <Button
            background={`${colors.actionColor}`}
            title="Criar Conta"
            colorTitle={`${colors.primaryColor}`}
            onPress={() => formRef.current?.submitForm()}
          />
        </View>
      </Form>
      <View style={{ alignItems: 'center' }}>
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
    </View>
  );
};

export default SignUp;
