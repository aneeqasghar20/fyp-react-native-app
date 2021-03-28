import React from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';

export default function Appointments() {
    return (
        <SafeAreaView>
            <Text style={styles.container}>Appointments Page
    </Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        backgroundColor: '#fff',
    },
    card:
    {
        marginBottom: 10,
        marginLeft: '2%',
        width: '96%'
    },
    cardImage:
    {
        width: 300,
        height: 200,
        // borderColor: 2,
        // border: '2 solid red',
        borderWidth: 6,
        borderColor: '#f00',
        // backgroundColor:'#f6d',
    },
    cardText:
    {
        padding: 10,
        fontSize: 16
    }
});
