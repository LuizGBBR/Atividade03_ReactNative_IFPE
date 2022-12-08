import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Input, Avatar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import loginScreen from './screens/login';
import cadastroScreen from './screens/cadastro';

const Stack = createNativeStackNavigator();

function App() {
return (
<NavigationContainer>
<Stack.Navigator>
<Stack.Screen name="Login" component={loginScreen} />
<Stack.Screen name="Cadastro" component={cadastroScreen} />
</Stack.Navigator>
</NavigationContainer>
);
}

export default App;