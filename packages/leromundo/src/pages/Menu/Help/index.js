import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TextInput, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import CustomArrow from '@monorepo-hi-mobile/shared/components/CustomArrowBack';

import prices from '~/assets/images/prices_table.png';
import { Styles } from './styles';
import QuestionsJSON from '../../../utils/questions.json';
import colors from '~/styles/colors';

const Questions = QuestionsJSON;

const Help = () => {
  const navigation = useNavigation();
  const [questions, setQuestions] = useState(Questions);
  const [search, setSearch] = useState('');
  const [refreshing, setRefreshing] = useState(false);
  const [availableProducts, setAvailableProducts] = useState([]);

  searchFilterFunction = (text) => {
    setRefreshing(true);
    if (questions) {
      const newData = questions.filter((item) => {
        const itemData = `${item.question.toUpperCase()} ${item.answer.toUpperCase()}`;
        const textData = text.toUpperCase();

        return itemData.indexOf(textData) > -1;
      });
      if (newData.length) {
        setQuestions(newData);
        setSearch(text);
        setRefreshing(false);
      } else {
        setQuestions([]);
        setSearch(text);
        setRefreshing(false);
      }
    } else {
      setSearch(text);
      setRefreshing(false);
    }
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{ flex: 1, paddingHorizontal: 10 }}>
      <View style={Styles.header}>
        <CustomArrow onPress={() => navigation.goBack()} />

        <Text>AJUDA</Text>
      </View>

      <View style={{ marginBottom: 15 }}>
        <TextInput
          style={Styles.input}
          onChangeText={(search) => searchFilterFunction(search)}
          value={search}
          placeholder="Digite aqui sua dúvida..."
          placeholderTextColor={colors.placeholderTextColor}
        />
      </View>

      <View style={{ marginBottom: 15 }}>
        {questions &&
          questions.map((q) => (
            <View key={q.question}>
              <Text style={Styles.title}>{q.question}</Text>
              <Text style={{ textAlign: 'left' }}>{q.answer}</Text>
            </View>
          ))}
      </View>

      <View style={Styles.containerPriceTable}>
        <Text style={Styles.title}>Tabela de Preços</Text>
        <Image source={prices} style={Styles.priceTable} />
      </View>

      <View style={{ marginBottom: 15 }}>
        <Text style={Styles.title}>Suporte</Text>
      </View>

      <View>
        <Text>
          {' '}
          O suporte da plataforma Ler o Mundo é feito pelo e-mail
          vamos@leromundo.com.br
        </Text>
      </View>
    </ScrollView>
  );
};

export default Help;
