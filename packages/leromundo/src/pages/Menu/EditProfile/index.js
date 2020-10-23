import React, { useRef } from 'react';
import {
  Text,
  View,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import { Form } from '@unform/mobile';

import CustomArrowBack from '@monorepo-hi-mobile/shared/components/CustomArrowBack';
import Button from '@monorepo-hi-mobile/shared/components/Button';
import Input from '@monorepo-hi-mobile/shared/components/Input';

import colors from '../../../styles/colors';

import { Styles } from './styles';

const EditProfile = () => {
  const navigation = useNavigation();

  const formRef = useRef();

  return (
    <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'position' : undefined}
        enabled>
        <View style={Styles.container}>
          <View style={Styles.header}>
            {Platform.OS === 'ios' && (
              <CustomArrowBack onPress={() => navigation.goBack()} />
            )}
            <View style={Styles.nav}>
              <Text style={Styles.title}>MEU PERFIL</Text>
            </View>
          </View>

          <View style={Styles.containerAvatar}>
            <TouchableOpacity onPress={() => {}} style={Styles.avatar}>
              <Icon
                name="account-circle"
                size={70}
                color={colors.defaultUserInfo}
              />

              <View style={Styles.pencil}>
                <Icon name="pencil-circle" size={30} />
              </View>
            </TouchableOpacity>
          </View>

          <View>
            <Form>
              <View style={Styles.inputContainer}>
                <Input
                  borderBottomWidth={1}
                  borderBottomColor={colors.defaultLabelColor}
                  placeholderTextColor={colors.defaultLabelColor}
                  name="name"
                  placeholder={`Luizin joga 10`}
                  style={Styles.input}
                />
              </View>

              <View style={Styles.inputContainer}>
                <Input
                  borderBottomWidth={1}
                  borderBottomColor={colors.defaultLabelColor}
                  placeholderTextColor={colors.defaultLabelColor}
                  name="email"
                  placeholder={`luis@hiedu.co`}
                  style={Styles.input}
                />
              </View>
            </Form>
          </View>

          <View>
            <Form>
              <View style={Styles.passwordContainer}>
                <Input
                  borderBottomWidth={1}
                  borderBottomColor={colors.defaultLabelColor}
                  placeholderTextColor={colors.defaultLabelColor}
                  name="name"
                  placeholder={`Luizin joga 10`}
                  style={Styles.inputPassword}
                  secureTextEntry
                  returnKeyType="next"
                />

                <TouchableOpacity onPress={() => {}}>
                  <Icon name="eye" size={23} />
                </TouchableOpacity>
              </View>

              <View style={Styles.passwordContainer}>
                <Input
                  borderBottomWidth={1}
                  borderBottomColor={colors.defaultLabelColor}
                  placeholderTextColor={colors.defaultLabelColor}
                  name="email"
                  placeholder={`luis@hiedu.co`}
                  style={Styles.inputPassword}
                  secureTextEntry
                />

                <TouchableOpacity onPress={() => {}}>
                  <Icon name="eye" size={23} />
                </TouchableOpacity>
              </View>
            </Form>
          </View>

          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 10,
              marginBottom: 10,
            }}>
            <Button
              background={`${colors.defaultButtonColor}`}
              title="Salvar"
              colorTitle={`${colors.primaryColor}`}
              onPress={() => navigation.navigate('EditProfile')}
            />
          </View>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default EditProfile;
