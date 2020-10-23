import React, { useRef, useCallback, useContext } from 'react';
import { Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Form } from '@unform/mobile';
import * as Yup from 'yup';

import { AuthContext } from '@monorepo-hi-mobile/shared/context/AuthContext';
import Logo from '@monorepo-hi-mobile/shared/components/Logo';
import Input from '@monorepo-hi-mobile/shared/components/Input';
import Button from '@monorepo-hi-mobile/shared/components/Button';
import ArrowBack from '@monorepo-hi-mobile/shared/components/CustomArrowBack';
import { Schema } from '@monorepo-hi-mobile/shared/utils/validation/fields/ResetPasswordFields';
import { GetValidationErrors } from '@monorepo-hi-mobile/shared/utils/validation/fields/GetValidationErrors';

import { service } from '../../../services/constant';
import logo from '../../../assets/images/logo.png';
import colors from '../../../styles/colors';
import { Styles } from './styles';

const SignIn = () => {
  const formRef = useRef(null);
  const navigation = useNavigation();

  const { resetPassword } = useContext(AuthContext);

  const handleSubmit = useCallback(async (data) => {
    try {
      await Schema.validate(data, { abortEarly: false });

      resetPassword({ service, email: data.email });
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        GetValidationErrors(error);
      }
    }
  }, []);

  return (
    <View style={Styles.container}>
      <ArrowBack onPress={() => navigation.navigate('SignIn')} />
      <Text style={Styles.title}>ESQUECEU A SENHA?</Text>

      <Form ref={formRef} onSubmit={handleSubmit}>
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

        <View style={{ alignItems: 'center', marginTop: 20 }}>
          <Button
            background={`${colors.defaultButtonColor}`}
            title="Entrar"
            colorTitle={`${colors.primaryColor}`}
            onPress={() => formRef.current?.submitForm()}
          />
        </View>
      </Form>

      <View style={{ alignItems: 'center' }}>
        <Button
          borderWidth={2}
          title="Voltar"
          onPress={() => navigation.navigate('SignIn')}
        />
      </View>
    </View>
  );
};

export default SignIn;
