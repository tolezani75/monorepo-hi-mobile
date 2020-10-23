import React from 'react';
import { Text, View, Image, ScrollView, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import CustomArrowBack from '@monorepo-hi-mobile/shared/components/CustomArrowBack';
import Button from '@monorepo-hi-mobile/shared/components/Button';

import { Styles } from './styles';
import avatar from '../../../assets/images/picture.jpeg';
import { TextInput } from 'react-native-gesture-handler';
import colors from '../../../styles/colors';

const Profile = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
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
          <Image style={Styles.avatar} source={avatar} />
        </View>

        <View style={Styles.containerCountCourses}>
          <View style={Styles.countCourses}>
            <Text style={{ color: colors.defaultTextColor, fontSize: 24 }}>
              3
            </Text>
            <Text style={{ color: colors.defaultTextColor }}>CONCLUÍDOS</Text>
          </View>

          <View style={Styles.countCourses}>
            <Text style={{ color: colors.defaultTextColor, fontSize: 24 }}>
              8
            </Text>
            <Text style={{ color: colors.defaultTextColor }}>EM ANDAMENTO</Text>
          </View>
        </View>

        <View style={Styles.containerContentUser}>
          <View style={Styles.contentUser}>
            <Text style={{ color: colors.defaultLabelColor }}>
              NOME COMPLETO
            </Text>
            <TextInput
              style={Styles.input}
              editable={false}
              placeholder={`Luizin joga 10`}
              placeholderTextColor={`${colors.borderPrimary}`}
            />
          </View>

          <View style={Styles.contentUser}>
            <View style={Styles.contentUser}>
              <Text style={{ color: colors.defaultLabelColor }}>E-MAIL</Text>
              <TextInput
                style={[Styles.input]}
                editable={false}
                placeholder={`luis@hiedu.co`}
                placeholderTextColor={`${colors.borderPrimary}`}
              />
            </View>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 7,
              }}>
              <Icon name="info-circle" size={20} />
              <Text style={{ color: colors.defaultLabelColor, marginLeft: 7 }}>
                e-mail não verificado
              </Text>
            </View>
          </View>

          <Button
            background={`${colors.defaultButtonColor}`}
            title="Editar Perfil"
            colorTitle={`${colors.primaryColor}`}
            onPress={() => navigation.navigate('EditProfile')}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Profile;
