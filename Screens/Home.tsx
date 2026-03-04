import { Button, Appbar } from 'react-native-paper';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


function HomeScreen({navigation}  : {navigation: any}) {
  return (
    <>
      <Appbar.Header>
        <Appbar.Content title="Home" />
      </Appbar.Header>
      <View style = {styles.container}>
        <Text> Home Screen </Text>
         <Button mode="contained" onPress={() => navigation.navigate('Details')}>
          Go to details
        </Button>
      </View>
    </>
  );
}

function SecondScreen({navigation} : {navigation: any}) {
  return (
    <>
      <Appbar.Header>
        <Appbar.Content title="Second" />
      </Appbar.Header>
      <View style = {styles.container}>
        <Text> Second Screen </Text>
         <Button mode="contained" onPress={() => navigation.navigate('Details')}>
          Go to details
        </Button>
      </View>
    </>
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