import { Button } from 'react-native-paper';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import App from '../App';



function HomeScreen({navigation}  : {navigation: any}) {
  return (
    <View style = {styles.container}>
      <Text> Home Screen </Text>
       <Button mode="contained" onPress={() => navigation.navigate('Details')}>
        Go to details
      </Button>
    </View>
  );
}

function SecondScreen({navigation} : {navigation: any}) {
  return (
    <View style = {styles.container}>
      <Text> Second Screen </Text>
       <Button mode="contained" onPress={() => navigation.navigate('Details')}>
        Go to details
      </Button>
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

export default HomeScreen;