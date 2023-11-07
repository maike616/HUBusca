import React from "react";
import { StatusBar } from "react-native";
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
      <StatusBar
          backgroundColor={theme.backgroundHeader}
          barStyle="light-content" // Define a cor dos ícones e textos como brancos
        />
      <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerTitleStyle: {
          color: theme.textColor, // Define a cor do título
          fontSize: 24, // Define o tamanho do título
          fontWeight: "bold", // Define o peso da fonte do título
        },
        headerStyle: {
          backgroundColor: theme.backgroundHeader, // Cor de fundo da barra de navegação (verde)
        },
      }}>
      <Stack.Screen name="HUBusca" component={Home}/>
      <Stack.Screen name="Perfil" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>


    </ThemeProvider>
    );
}
