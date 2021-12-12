import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState as useGlobalState } from '@hookstate/core';
import globalState from './globalState';


// Screens
import loginScreen from '../app/screens/login';
import dashboardScreen from '../app/screens/dashboard';

const Stack = createNativeStackNavigator();

export default function App() {
  const global = useGlobalState(globalState);
  const { auth, userToken } = global.get();
  
  console.log(userToken)
  console.log(auth)

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}>
        {auth ? (
          <>
            <Stack.Screen name="Dashboard" component={dashboardScreen} />
          </>
        ) : (
          <>
            <Stack.Screen name="Login" component={loginScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}