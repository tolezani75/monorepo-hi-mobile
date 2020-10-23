import React from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import ArrowBack from '@monorepo-hi-mobile/shared/components/CustomArrowBack';

import { Styles } from './styles';

const About = () => {
  const navigation = useNavigation();

  return (
    <View style={Styles.container}>
      <View>
        <ArrowBack onPress={() => navigation.goBack()} />
      </View>

      <Text style={Styles.label}>SOBRE O LER O MUNDO</Text>
      <Text style={Styles.text}>
        A Casa do Saber surgiu em 2004 em São Paulo a partir de um grupo de
        amigos que se reuniam em casa em torno de um professor de filosofia e
        algumas garrafas de vinho. Os interessados nos estudos aumentaram tanto
        que os amigos resolveram criar uma instituição. Unidos até hoje, eles
        compõem o conselho diretor da Casa do Saber: o empresário Jair Ribeiro,
        a atriz Maria Fernanda Cândido, o advogado Pierre Moreau, a empresária
        Ana Maria Diniz, o cientista político Luiz Felipe D’Ávila, o
        publicitário Celso Loducca, o educador Gabriel Chalita e o jornalista
        Mario Vitor Santos, que também é o diretor executivo da Casa.
      </Text>
    </View>
  );
};

export default About;
