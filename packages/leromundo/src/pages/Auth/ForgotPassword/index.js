import React, {useRef, useCallback, useContext} from 'react';
import {Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Form} from '@unform/mobile';

import {Styles} from './styles';

import {AuthContext} from '@monorepo-hi-mobile/shared/context/AuthContext';

import Logo from '@monorepo-hi-mobile/shared/components/Logo';
import Input from '@monorepo-hi-mobile/shared/components/Input';
import Button from '@monorepo-hi-mobile/shared/components/Button';
import ArrowBack from '@monorepo-hi-mobile/shared/components/CustomArrowBack';

import {service} from '../../../services/constant';

import logo from '../../../assets/images/logo.png';

import colors from '../../../styles/colors';

const SignIn = () => {
  const formRef = useRef(null);
  const navigation = useNavigation();

  const {resetPassword} = useContext(AuthContext);

  const handleSubmit = useCallback(async (data) => {
    resetPassword({service, email: data.email});
  }, []);

  return (
    <View style={Styles.container}>
      <ArrowBack onPress={() => navigation.navigate('SignIn')} />
      <Text>Esqueceu a senha?</Text>

      <Form ref={formRef} onSubmit={handleSubmit}>
        <Input
          name="email"
          autoCapitalize="none"
          autoCorrect={false}
          borderBottomWidth={1}
          placeholder="Email"
        />

        <Button
          background={`${colors.actionColor}`}
          title="Entrar"
          colorTitle={`${colors.primaryColor}`}
          onPress={() => formRef.current?.submitForm()}
        />
      </Form>

      <Button
        borderWidth={2}
        title="Voltar"
        onPress={() => navigation.navigate('SignIn')}
      />
    </View>
  );
};

export default SignIn;
