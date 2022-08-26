import React from "react";
import { SafeAreaView, TextInput, StyleSheet, View, Text, Pressable} from 'react-native';


export default function Login({navigation}){
    const [indicative, setIndicative] = React.useState('');
    const [number, setNumber] = React.useState('');

    return(
        <>
    <SafeAreaView style={styles.container1}>
        <View>
         <View style={styles.containerHello}></View> 
         <View style={styles.containerHello}></View> 
         <View style={styles.containerHello}></View> 
         <View style={styles.containerHello}></View>    
        </View>
               
        <View style={styles.container}>
            <TextInput
            style={styles.input}
            value={indicative}
            onChangeText={(text) =>setIndicative(text)}
            placeholder="Your email" />
        </View>
    
        <View style={styles.container}>
            <TextInput
            style={styles.input}
            value={number}
            onChangeText={(text) =>setNumber(text)}
            secureTextEntry={true}
            placeholder="Your password" />
        </View>
        <Text>Enter your mobile number to continue</Text>
        <Text  style={styles.text1}>Forget your paswword?</Text>
        <Text style={styles.text2} onPress={() => navigation.navigate('SingUp')}>Dont have an account? Sing up </Text>

        <Pressable style={styles.buton}>
        <Text style={styles.text} >Login</Text>
        </Pressable>
        
    </SafeAreaView>
    </>
    );

}