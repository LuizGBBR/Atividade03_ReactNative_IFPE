import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Input, Avatar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';


export default function loginScreen({navigation}) {
  return (
    <View style={styles.container}>
      <view>
      <Avatar
  size="xlarge"
  source={{
    uri:
      'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
  }}
/>
      </view>
      <view>
<Input placeholder='Login' />
<Input placeholder="Senha" secureTextEntry={true} />
      </view>
      <view>
<Button title="Login"
buttonStyle={{width: 100, margin:10}}/>
      </view>
      <view>
<Button 
onPress={()=> navigation.navigate('Cadastro')}
title="Cadastrar"
buttonStyle={{backgroundColor: '#F44336', width: 100}}/>
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