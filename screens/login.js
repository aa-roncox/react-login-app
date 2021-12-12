import * as React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import LoginForm from '../components/loginForm';


const loginScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.row}>
                <View style={styles.col}>
                    <Text style={styles.headerImage}>?</Text>
                </View>
                <View style={styles.col}>
                    <Text style={styles.headerText}>Welcome back</Text>
                </View>
            </View>
            <View style={styles.content}>
                <LoginForm/>
            </View>
        </SafeAreaView>
      );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000',
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        height: '20%'
    },
    col: {
        width: '50%',
        justifyContent: 'center'
    },
    headerText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 22
    },
    headerImage: {
        fontSize: 52,
        color: '#000',
        textAlign: 'center',
        backgroundColor: '#fff',
        width: '50%',
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    content: {
        height: '80%',
        backgroundColor: '#fff',
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        justifyContent: 'center',
        alignContent: 'center',
    }
});  

export default loginScreen;