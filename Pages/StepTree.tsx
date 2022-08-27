import React from "react";
import { SafeAreaView, StyleSheet, View, Text, Pressable} from 'react-native';

export default function StepTree({navigation, route}){
    const { params } = route.params;
    return(
        <>
        <SafeAreaView style={styles.container1}>
            <View style={styles.containerSteps}>
                <View style={styles.containerSelect}><Text style={styles.text} onPress={() => navigation.navigate('SingUp')}>1</Text></View> 
                <View style={styles.containerSelect}><Text style={styles.text}  onPress={() => navigation.navigate('StepTwo')}>2</Text></View> 
                <View style={styles.containerSelect}><Text style={styles.text}>3</Text></View> 
                <View style={styles.containerStep}><Text style={styles.text}>4</Text></View>    
            </View>
            <View style={styles.container2}>
                <Text style={styles.text2}>YOUR ACCOUNT HAS BEEN CREATED!</Text>
                <View style={styles.circle}></View>
                <Pressable style={styles.buton}>
                    <Text style={styles.text} onPress={() => navigation.navigate('StepFour', { params: params})}>COMPLETE PROFILE</Text>
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
    containerSteps:{
        display:'flex',
        justifyContent:'space-around',
        flexDirection:'row',
        top:'10%'
    },
    containerSelect:{
        backgroundColor: '#8100C7',
        width: 30,
        height: 30,
        borderRadius: 2
    },
    containerStep:{
        backgroundColor: '#801BC452',
        width: 30,
        height: 30,
        borderRadius: 2
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
        width: 240,
        height: 50,
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