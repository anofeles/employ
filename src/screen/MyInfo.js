import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export const MyInfo = () => {
  return (
    <View style={styles.raw}>
      <Text>MyInfo</Text>
    </View>
  );
};

styles = StyleSheet.create({
  raw: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center'
  }
});
