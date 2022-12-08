import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Input, Avatar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';


export default function cadastroScreen({navigation}) {
  return (
    <View style={styles.container}>
      <view>
        <Input
  placeholder='email@gmail.com'
  leftIcon={
    <Icon
      name='user'
      size={24}
      color='black'
    />
  }
/>
<Input 
placeholder="Senha" 
secureTextEntry={true}
leftIcon={
  <Icon
      name='lock'
      size={24}
      color='black'
    />
}
/>
      </view>
      <view>
      <Button 
onPress={()=> navigation.navigate('Login')}
title="Cadastrar"
buttonStyle={{width: 100, margin:10}}/>
      </view>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#E7DDD7',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });