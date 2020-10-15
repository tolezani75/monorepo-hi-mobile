import React, {useContext} from 'react';
import {View, Text, Button, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import {AuthContext} from '@monorepo-hi-mobile/shared/context/AuthContext';
import avatar from '../../assets/images/picture.jpeg';

import {Styles} from './styles';
import {ScrollView} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

const Profile = () => {
  const {SignOut} = useContext(AuthContext);

  const navigation = useNavigation();

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{flex: 1}}>
      <View style={Styles.container}>
        <View style={Styles.header}>
          <Image style={Styles.avatar} source={avatar} />

          <View style={Styles.containerText}>
            <Text style={Styles.nameUser}>Olá,</Text>
            <Text style={Styles.nameUser}>
              Junior Luis Astolfo ronaldo fenomeno
            </Text>
            <Text style={Styles.premium}>PREMIUM</Text>
          </View>
        </View>

        <View style={Styles.containerContent}>
          <View style={Styles.content}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Profile')}
              style={Styles.button}>
              <Icon name="user" size={23} />
            </TouchableOpacity>
            <Text style={Styles.textContent}>EDITAR PERFIL</Text>
          </View>

          <View style={Styles.content}>
            <TouchableOpacity
              onPress={() => navigation.navigate('MyCourses')}
              style={Styles.button}>
              <Icon name="book" size={23} />
            </TouchableOpacity>
            <Text style={Styles.textContent}>MEUS CURSOS</Text>
          </View>

          <View style={Styles.content}>
            <TouchableOpacity style={Styles.button}>
              <Icon name="wallet" size={23} />
            </TouchableOpacity>
            <Text style={Styles.textContent}>RESTAURAR COMPRA</Text>
          </View>

          {/* <View style={Styles.content}>
            <TouchableOpacity style={Styles.button}>
              <Icon name="bell" size={23} />
            </TouchableOpacity>
            <Text style={Styles.textContent}>NOTIFICAÇÕES</Text>
          </View> */}

          <View style={Styles.content}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Help')}
              style={Styles.button}>
              <Icon name="question-circle" size={23} />
            </TouchableOpacity>
            <Text style={Styles.textContent}>AJUDA</Text>
          </View>

          <View style={Styles.content}>
            <TouchableOpacity
              onPress={() => navigation.navigate('About')}
              style={Styles.button}>
              <Icon name="bell" size={23} />
            </TouchableOpacity>
            <Text style={Styles.textContent}>SOBRE</Text>
          </View>

          <View style={Styles.content}>
            <TouchableOpacity style={Styles.button}>
              <Icon name="sign-out-alt" size={23} />
            </TouchableOpacity>
            <Text style={Styles.textContent}>SAIR</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Profile;
