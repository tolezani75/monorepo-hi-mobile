import React, { useState, useRef, useContext, useCallback } from 'react';
import {
  Text,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Image,
  View,
  TouchableOpacity,
} from 'react-native';
import { Form } from '@unform/mobile';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import * as Yup from 'yup';

import Input from '@monorepo-hi-mobile/shared/components/Input';
import Button from '@monorepo-hi-mobile/shared/components/Button';
import { AuthContext } from '@monorepo-hi-mobile/shared/context/AuthContext';
import { Schema } from '@monorepo-hi-mobile/shared/utils/validation/fields/AuthValidationFields';
import { GetValidationErrors } from '@monorepo-hi-mobile/shared/utils/validation/fields/GetValidationErrors';

import { service } from '../../../services/constant';
import { Styles } from './styles';
import logo from '../../../assets/images/logo.png';
import colors from '../../../styles/colors';

const SignIn = () => {
  const formRef = useRef();
  const passwordInputRef = useRef();
  const navigation = useNavigation();
  const [hidePassword, setHidePassword] = useState(true);

  const { SignIn } = useContext(AuthContext);

  const handleSubmit = useCallback(async (data) => {
    try {
      formRef.current?.setErrors({});
      await Schema.validate(data, { abortEarly: false });

      SignIn({
        service: service,
        username: data.email,
        password: data.password,
      });
    } catch (error) {
      console.log(error);
      if (error instanceof Yup.ValidationError) {
        const errors = GetValidationErrors(error);
        //formRef.current?.setErrors(errors);
      }
    }
  }, []);

  return (
    <KeyboardAvoidingView
      enabled
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{ flex: 1 }}>
        <View style={Styles.container}>
          <View style={Styles.containerContent}>
            <View style={Styles.containerLogo}>
              <Image source={logo} style={Styles.logo} />
            </View>

            <View>
              <Text style={[Styles.title]}>LOGIN</Text>
            </View>
          </View>

          <Form ref={formRef} onSubmit={handleSubmit}>
            <Text style={Styles.label}>E-MAIL</Text>
            <View style={Styles.passwordContainer}>
              <Input
                name="email"
                style={Styles.inputPassword}
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="email-address"
                returnKeyType="next"
                placeholder="email@example.com"
                onSubmitEdditing={() => passwordInputRef.current?.focus()}
              />
            </View>

            <View>
              <Text style={[Styles.label, { marginTop: 20 }]}>SENHA</Text>
              <View style={[Styles.passwordContainer, { marginBottom: 10 }]}>
                <Input
                  placeholderTextColor={colors.defaultLabelColor}
                  name="name"
                  placeholder="********"
                  style={Styles.inputPassword}
                  secureTextEntry={hidePassword}
                  returnKeyType="next"
                />

                <TouchableOpacity
                  onPress={() => setHidePassword(!hidePassword)}>
                  <Icon name={hidePassword ? 'eye-off' : 'eye'} size={23} />
                </TouchableOpacity>
              </View>
            </View>

            <Button
              background={`${colors.defaultButtonColor}`}
              title="Entrar"
              colorTitle={`${colors.primaryColor}`}
              onPress={() => formRef.current?.submitForm()}
            />
          </Form>

          <View style={Styles.footer}>
            <Button
              onPress={() => navigation.navigate('ForgotPassword')}
              title="Esqueci minha senha"
            />

            <Button
              borderWidth={2}
              title="Criar Conta"
              onPress={() => navigation.navigate('SignUp')}
            />
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default SignIn;
