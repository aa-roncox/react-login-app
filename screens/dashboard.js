import * as React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { createState, useState } from '@hookstate/core';


const dashboardScreen = () => {    
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.row}>
                <View style={styles.col}>
                    <Text style={styles.headerImage}>?</Text>
                </View>
                <View style={styles.col}>
                    <Text style={styles.headerText}>Welcome back</Text>
                    <Text style={styles.headerName}>John Smith</Text>
                </View>
            </View>
            <View style={styles.content}>

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
    headerName: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 28,
        fontWeight: 'bold'
    },
    headerImage: {
        fontSize: 52,
        color: '#000',
        textAlign: 'center',
        backgroundColor: '#fff',
        width: '50%',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    content: {
        height: '80%',
        backgroundColor: '#fff',
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
    }
});  

export default dashboardScreen;