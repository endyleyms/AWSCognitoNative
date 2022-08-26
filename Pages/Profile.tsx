import React from "react";
import { SafeAreaView, StyleSheet, View, Text, Pressable} from 'react-native';

export default function Profile({navigation}){
    return(
        <>
        <SafeAreaView style={styles.container1}>
            <View style={styles.container2}>
                <Text style={styles.text2}>YOUR PROFILE ACCOUNT IS DONE!</Text>
                <View style={styles.circle}></View>
                <Pressable style={styles.buton}>
                    <Text style={styles.text} onPress={() => navigation.navigate('StepFour')}>END</Text>
                </Pressable>
            </View>
            
        </SafeAreaView>
        </>
    );
}
const styles= StyleSheet.create({
    container1:{
        position: 'relative',
        alignItems: 'stretch',
        width: '80%',
        height: '90%',
        left: 35,
        top: '5%',
        bottom: 20,
        backgroundColor: '#FFFFFF',
        borderColor: '#e8e8e8',
        borderRadius:20
    },
    text:{
        fontWeight: 'bold',
        color: 'white',
        justifyContent:'center',
        alignItems:'center',
        padding: 5
    },
    container2:{
        position: 'relative',
        alignItems: 'stretch',
        top: '30%',
        height: '100%',       
    },
    buton:{
        backgroundColor: '#8100C7',
        width: '70%',
        height: '7%',
        padding: 10,
        marginVertical: 5,
        alignItems: 'center',
        borderRadius: 5,
        position:'relative',
        left:40,
        top: 70
    },
    circle:{
        backgroundColor: '#8100C7',
        width: 110,
        height: 110,
        borderRadius: 60,
        left: 100
    },
    text2:{
        color:'#2D0046',
        fontWeight: 'bold',
        position:'relative',
        left: 40,
        paddingBottom:20
    }
})