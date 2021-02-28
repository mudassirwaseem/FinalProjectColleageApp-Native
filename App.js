import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './Screen/Login'
import SignUp from './Screen/SignUp'
import Navigation from './Screen/Navigate'      
import StudentFoam from './Screen/StudentFoam'      
import ComponyFoam from './Screen/ComponyFoam'      
import SignUpMain from './Screen/SignMain'      
import Dashboard from './Screen/Dashboard'      
import  SProfile from './Screen/StudenrProfile'      
import  ComponyProfile from './Screen/ComponyProfile'      
import  AdminP from './Screen/Admin'      
import  Indicater from './Screen/Indicater'      
// import ImagePickerExample from './Screen/ImagePicker'      

const Stack = createStackNavigator();







export default function App() {
  return (
     <NavigationContainer>
  <Stack.Navigator>
    <Stack.Screen name="Navigation" component={Navigation} />
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="SignUp" component={SignUp} />
    <Stack.Screen name="SignUpMain" component={SignUpMain} />
    <Stack.Screen name="Dashboard" component={Dashboard} />
    <Stack.Screen name="StudentFoam" component={StudentFoam} />
    <Stack.Screen name="ComponyFoam" component={ComponyFoam} />
    <Stack.Screen name="SProfile" component={SProfile} />
    <Stack.Screen name="ComponyProfile" component={ComponyProfile} />
    <Stack.Screen name="AdminP" component={AdminP} />
    <Stack.Screen name="Indicater" component={Indicater} />
  </Stack.Navigator>
</NavigationContainer>
  );
}





const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
