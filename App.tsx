import React from "react";
import Home from "./src/screens/Home/Home";
import { ThemeProvider } from "styled-components/native";

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
      <Home/>
    </ThemeProvider>
    );
}
