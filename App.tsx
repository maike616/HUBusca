
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from "./src/screens/Home/Home";
const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <Home/>
  );
}
