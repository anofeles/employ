import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';

import {AppTextInput} from '../ui/AppTextInput'

export const AddOrder = () => {
  const [name,setName] = useState(null);
  const [fname,setFname] = useState(null);
  const [addres,setAddres] = useState(null);
  const [text,setText] = useState(null);
  const [prise,setPrise] = useState(null);
  const colorInput = '#ccc';
  return (
    <View style={styles.raw}>
      <Text>name</Text>
        <AppTextInput onChangeText={text => setName(text)} value={name} colo={colorInput}/>
      {/*<TextInput  onChangeText={text => setName(text)} value={name}/>*/}
      <Text>fname</Text>
      <AppTextInput  onChangeText={text => setFname(text)} value={fname}/>
      <Text>addres</Text>
      <AppTextInput  onChangeText={text => setAddres(text)} value={addres}/>
      <Text>text</Text>
      <AppTextInput  onChangeText={text => setText(text)} value={text}/>
      <Text>prise</Text>
      <AppTextInput onChangeText={text => setPrise(text)} value={prise}/>
    </View>
  );
};

styles = StyleSheet.create({
  raw: {
   padding: 10
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1
  }
});
