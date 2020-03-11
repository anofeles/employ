import React, { useState } from 'react';
import { View, StyleSheet, Text, ScrollView, Alert } from 'react-native';
import * as Location from 'expo-location';
import { useSelector, useDispatch } from 'react-redux';

import {AppTextInput} from '../ui/AppTextInput'
import {AppButton} from '../ui/AppButton'
import {addOrderPost} from "../stor/actopns/post";



export const AddOrder = ({route,navigation}) => {
    const dispach = useDispatch();
    const [local,setLocal] = useState(null);
    const location = Location.getCurrentPositionAsync({});
    setLocal({ locationResult: JSON.stringify(location) });
console.log(location);

  const [name,setName] = useState(null);
  const [fname,setFname] = useState(null);
  const [addres,setAddres] = useState(null);
  const [text,setText] = useState(null);
  const [prise,setPrise] = useState(null);

  const colorInput = 'red';

  const addOrder = () => {
      const checked = {
          name:name,
          fname:fname,
          addres:addres,
          text:text,
          prise:prise
      };
      if(checked.addres && checked.fname && checked.name && checked.prise && checked.text ){
          dispach(addOrderPost(checked));
          setName(null);
          setFname(null);
          setAddres(null);
          setText(null);
          setPrise(null);
          navigation.navigate('Tasck');
      }
      else{
          Alert.alert('შეცდომა','გთხოვთ შეავსოტ ყველა ველი');
      }
  };

  return (
    <View style={styles.raw}>
        <ScrollView>
      <Text>name</Text>
        <AppTextInput onChangeText={text => setName(text)} value={name} color={colorInput}/>
      {/*<TextInput  onChangeText={text => setName(text)} value={name}/>*/}
      <Text>fname</Text>
      <AppTextInput  onChangeText={text => setFname(text)} value={fname}/>
      <Text>addres</Text>
      <AppTextInput  onChangeText={text => setAddres(text)} value={addres} color={colorInput}/>
      <Text>text</Text>
      <AppTextInput  onChangeText={text => setText(text)} value={text}/>
      <Text>prise</Text>
      <AppTextInput onChangeText={text => setPrise(text)} value={prise} color={colorInput}/>
      <View style={styles.buttonView}>
          <AppButton onPress={addOrder}>დამატება</AppButton>
      </View>

        </ScrollView>
    </View>
  );
};

styles = StyleSheet.create({
  raw: {
   paddingTop: 10
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1
  },
    buttonView: {
      paddingTop: 20
    }
});
