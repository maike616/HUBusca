import React from "react";
import Home from "./src/screens/Home/Home";
import Profile from "./src/screens/Profile/Profile";
import { ThemeProvider } from "styled-components/native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();


const theme ={
  backgroundBody: '#2A2731',
  backgroundInputText: '#FFFFFF',
  inputTextColor: '#000000',
  backgroundHeader: '#000000',
  textColor: '#FFFFFF'
}

export default function App() {
  return (
    <ThemeProvider theme={theme}>  
      
      <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="HuBusca" component={Home}/>
      <Stack.Screen name="Perfil" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>


    </ThemeProvider>
    );
}
