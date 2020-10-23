import React, { useState } from 'react';
import { View, Text, Picker } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import ArrowBack from '@monorepo-hi-mobile/shared/components/CustomArrowBack';

import { Styles } from './styles';

const langs = [
  { id: 0, language: 'Português' },
  { id: 1, language: 'Inglês' },
  { id: 2, language: 'Espanhol' },
];

const Translate = () => {
  const [selectedValue, setSelectedValue] = useState(langs[0].language);
  const navigation = useNavigation();

  return (
    <View style={Styles.container}>
      <View>
        <ArrowBack onPress={() => navigation.goBack()} />
      </View>

      <Text style={Styles.label}>Selecione o idioma desejado</Text>
      <View style={{ flex: 1, alignItems: 'center' }}>
        <Picker
          selectedValue={selectedValue}
          style={{ height: 50, width: '100%' }}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
          {langs.map((lang) => (
            <Picker.Item
              key={lang.id}
              label={lang.language}
              value={lang.language}
            />
          ))}
        </Picker>
      </View>
    </View>
  );
};

export default Translate;
