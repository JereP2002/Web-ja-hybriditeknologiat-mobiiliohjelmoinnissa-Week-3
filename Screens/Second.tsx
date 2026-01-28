import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import App from '../App';

function SecondScreen() {
  return (
    <View style = {styles.container}>
      <Text> Second Screen </Text>
    </View>
  );
}
function HomeScreen() {
  return (
    <View style = {styles.container}>
      <Text> Home Screen </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SecondScreen;