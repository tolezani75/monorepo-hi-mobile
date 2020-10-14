import React, {useEffect, useRef, useContext, useCallback} from 'react';
import {
  Text,
  ScrollView,
  Animated,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  TouchableWithoutFeedback,
} from 'react-native';

import {Form} from '@unform/mobile';
import {service} from '../../../services/constant';

import {useNavigation} from '@react-navigation/native';

import {AuthContext} from '@monorepo-hi-mobile/shared/context/AuthContext';
import styles, {IMAGE_HEIGHT, IMAGE_HEIGHT_SMALL} from './styles';
import logo from '../../../assets/images/logo.png';

import Input from '@monorepo-hi-mobile/shared/components/Input';
import Button from '@monorepo-hi-mobile/shared/components/Button';

import colors from '../../../styles/colors';

const SignIn = () => {
  const formRef = useRef(null);
  const navigation = useNavigation();

  const {SignIn} = useContext(AuthContext);

  const passwordInputRef = useRef();

  const imageHeight = new Animated.Value(IMAGE_HEIGHT);

  const keyboardWillShow = (event) => {
    Animated.timing(imageHeight, {
      duration: event.duration,
      toValue: IMAGE_HEIGHT_SMALL,
    }).start();
  };

  const keyboardWillHide = (event) => {
    Animated.timing(imageHeight, {
      duration: event.duration,
      toValue: IMAGE_HEIGHT,
    }).start();
  };

  const keyboardDidShow = (event) => {
    Animated.timing(imageHeight, {
      toValue: IMAGE_HEIGHT_SMALL,
    }).start();
  };

  const keyboardDidHide = (event) => {
    Animated.timing(imageHeight, {
      toValue: IMAGE_HEIGHT,
    }).start();
  };

  const handleSubmit = useCallback((data) => {
    try {
      SignIn({service, username: data.email, password: data.password});
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    function loadKeyboard() {
      if (Platform.OS == 'ios') {
        keyboardWillShowSub = Keyboard.addListener(
          'keyboardWillShow',
          keyboardWillShow,
        );
        keyboardWillHideSub = Keyboard.addListener(
          'keyboardWillHide',
          keyboardWillHide,
        );
      } else {
        keyboardWillShowSub = Keyboard.addListener(
          'keyboardDidShow',
          keyboardDidShow,
        );
        keyboardWillHideSub = Keyboard.addListener(
          'keyboardDidHide',
          keyboardDidHide,
        );
      }
    }

    loadKeyboard();
  }, [keyboardWillShow, keyboardWillHide, keyboardDidShow, keyboardDidHide]);

  return (
    <>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <KeyboardAvoidingView
          style={[styles.container]}
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
          <Animated.Image
            source={logo}
            style={[styles.logo, {height: imageHeight}]}
          />
          <ScrollView contentContainerStyle={{flex: 1}}>
            <Text>Login</Text>

            <Form ref={formRef} onSubmit={handleSubmit}>
              <Input
                autoCapitalize="none"
                autoCorrect={false}
                name="email"
                keyboardType="email-address"
                returnKeyType="next"
                borderBottomWidth={1}
                placeholder="Email"
                onSubmitEdditing={() => passwordInputRef.current?.focus()}
              />

              <Input
                autoCapitalize="none"
                autoCorrect={false}
                name="password"
                ref={passwordInputRef}
                secureTextEntry
                returnKeyType="send"
                borderBottomWidth={1}
                placeholder="Senha"
              />

              <Button
                background={`${colors.actionColor}`}
                title="Entrar"
                colorTitle={`${colors.primaryColor}`}
                onPress={() => formRef.current?.submitForm()}
              />
            </Form>

            <Button
              onPress={() => navigation.navigate('ForgotPassword')}
              title="Esqueci minha senha"
            />

            <Button
              borderWidth={2}
              title="Criar Conta"
              onPress={() => navigation.navigate('SignUp')}
            />
          </ScrollView>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
      <SafeAreaView />
    </>
  );
};

export default SignIn;
