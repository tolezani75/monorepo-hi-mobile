import React, {useEffect, useRef} from 'react';
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

import {useNavigation} from '@react-navigation/native';

import styles, {IMAGE_HEIGHT, IMAGE_HEIGHT_SMALL} from './styles';
import logo from '../../../assets/images/logo.png';

import Input from '@monorepo-hi-mobile/shared/components/Input';
import Button from '@monorepo-hi-mobile/shared/components/Button';

import colors from '../../../styles/colors';

const SignIn = () => {
  const navigation = useNavigation();

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

            <Input
              keyboardType="email-address"
              autoCaptalize="none"
              autoCorrect={false}
              returnKeyType="next"
              borderBottomWidth={1}
              placeholder="Email"
              onSubmitEdditing={() => passwordInputRef.current?.focus()}
            />

            <Input
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
              onPress={() => {}}
            />

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
