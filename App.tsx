import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as PaperProvider } from 'react-native-paper';
import HomeScreen from './Screens/Home';
import SecondScreen from './Screens/Second';
import CustomAppBar from './components/AppBar';

// Määritellään reittien tyypit TypeScriptille
export type RootStackParamList = {
  Home: undefined;
  Second: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            // Tässä asetetaan oma Appbar kaikille näkymille
            header: (props) => <CustomAppBar {...props} />,
          }}
        >
          <Stack.Screen 
            name="Home" 
            component={HomeScreen} 
            options={{ title: 'MD Nav Demo' }} 
          />
          <Stack.Screen 
            name="Second" 
            component={SecondScreen} 
            options={{ title: 'MD Nav Demo' }} 
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}