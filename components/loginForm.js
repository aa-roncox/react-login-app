import * as React from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';
import axios from 'axios';
import globalState from '../globalState';
import { useState as useGlobalState, useState } from '@hookstate/core';


const loginForm = () => {
    const global = useGlobalState(globalState);

    const email = useState("");
    const password = useState("");


    const Login = () => {
      // TODO
      // Handle error checking
      // Sanditize inputs to save trip to the server
      axios.post('http://localhost:3000/v1/auth/login', {
        email: email.get(),
        password: password.get()
      })
      .then(function (req) {
        console.log(req)
        global.auth.set(true)
        global.auth.set(req.data.message)
      })
      .catch(function (err) {
        console.log(err);
      });
    }
    
    return (
      <View style={styles.container}>
          <Text style={styles.TextInputLabel}>Email</Text>
          <TextInput
            style={styles.TextInput}
            placeholderTextColor="#003f5c"
            value={email.get()}
            secureTextEntry={false}
            onChangeText={(value) => email.set(value)}
          />
          <Text style={styles.TextInputLabel}>Password</Text>
          <TextInput
            style={styles.TextInput}
            placeholderTextColor="#003f5c"
            secureTextEntry={true}
            value={password.get()}
            onChangeText={(value) => password.set(value)}
          />
          <TouchableOpacity onPress={Login} style={styles.btnPrimary}>
            <Text style={styles.btnPrimaryText}>Login</Text>
          </TouchableOpacity>
      </View>
    )
}

const styles = StyleSheet.create({
  container: {
    width: '80%',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  TextInputLabel: {
    fontWeight: 'bold',
    marginBottom: 5
  },
  TextInput: {
    backgroundColor: '#FAF8F2',
    marginBottom: 20,
    padding: 10,
    borderRadius: 5
  },
  btnPrimary: {
    backgroundColor: '#DEB574',
    padding: 10,
    borderRadius: 5,
    color: '#000',
  },
  btnPrimaryText: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
    textAlign: 'center'
  }
})

export default loginForm;