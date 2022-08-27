import React from "react";
import { SafeAreaView, StyleSheet, View, Text, Pressable, TextInput} from 'react-native';
import {getCognitoUser} from "../AWSCognito/UserPool";

export default function StepFour({navigation, route}){
    const { params } = route.params;
    const [code, setCode] = React.useState('');
    const setDigitAtIndex = (num, index)=>{
        setCode((previousCode)=> [...previousCode.slice(0,index), num.trim()[0], ...previousCode.slice(index + 1, 6)].join('') )
    }
    console.log(code)

    const handleConfirmRegister  = async () =>{
        console.log("code:  ", code.slice())
        const cognitoUser = getCognitoUser(params);
        cognitoUser.confirmRegistration(code, true, function(err, result) {
            if (err) {
                alert(err.message || JSON.stringify(err));
                return;
            }
            console.log('call result: ' + result);
        });
        navigation.navigate('TabScreen', {
            screen: 'Profile',})    
    }



    return(
        <>
        <SafeAreaView style={styles.container1}>
            <View style={styles.containerSteps}>
                <View style={styles.containerSelect}><Text style={styles.text}  onPress={() => navigation.navigate('StepTwo')}>1</Text></View> 
                <View style={styles.containerSelect}><Text style={styles.text} onPress={() => navigation.navigate('StepTree')}>2</Text></View> 
                <View style={styles.containerSelect}><Text style={styles.text}>3</Text></View>    
            </View>
            <View style={styles.container2}>
                <View style={styles.containerSteps}>
                    <View style={styles.containerNumber}>
                        <TextInput
                        style={styles.input}
                        value={code[0]}
                        onChangeText={(text) =>setDigitAtIndex(text, 0)}
                    />
                    </View> 
                    <View style={styles.containerNumber}>
                        <TextInput
                        style={styles.input}
                        value={code[1]}
                        onChangeText={(text) =>setDigitAtIndex(text, 1)}
                    />
                    </View> 
                    <View style={styles.containerNumber}>
                        <TextInput
                        style={styles.input}
                        value={code[2]}
                        onChangeText={(text) =>setDigitAtIndex(text, 2)}
                    />
                    </View> 
                    <View style={styles.containerNumber}>
                        <TextInput
                        style={styles.input}
                        value={code[3]}
                        onChangeText={(text) =>setDigitAtIndex(text, 3)}
                    />
                    </View>
                    <View style={styles.containerNumber}>
                        <TextInput
                        style={styles.input}
                        value={code[4]}
                        onChangeText={(text) =>setDigitAtIndex(text, 4)}
                    />
                    </View> 
                    <View style={styles.containerNumber}>
                        <TextInput
                        style={styles.input}
                        value={code[5]}
                        onChangeText={(text) =>setDigitAtIndex(text, 5)}
                    />
                    </View> 
                </View>
                <Text style={styles.text1}>Didn't receive the code?</Text>
                <Pressable style={styles.butonR}>
                    <Text style={styles.textR} >RESEND</Text>
                </Pressable> 
                <Pressable style={styles.buton}>
                    <Text style={styles.text} onPress={handleConfirmRegister}>VERIFY</Text>
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
    container2:{
        position: 'relative',
        alignItems: 'stretch',
        top: '30%',
        height: '100%',
       
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
    text:{
        fontWeight: 'bold',
        color: 'white',
        justifyContent:'center',
        alignItems:'center',
        padding: 5
    },
    containerNumber:{
        backgroundColor: 'white',
        borderColor: '#2C0444',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 5,
        marginVertical: 5,
        left:5,
        top: 1,
        width: 40,
        height:50
    },
    input:{
        height: 45,
        width:30,
        backgroundColor: '#F7F7F7',
        alignContent:'center',
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
        top: 80
    },
    butonR:{
        backgroundColor: '#F7F7F7',
        width: 200,
        height: 45,
        padding: 10,
        marginVertical: 5,
        alignItems: 'center',
        borderRadius: 5,
        position:'relative',
        left:60,
        top: 60
       
    },
    textR:{
        fontWeight: 'bold',
        color: '#707070',
        justifyContent:'center',
        alignItems:'center',
        padding: 5
    },
    text1:{
        position:'relative',
        fontWeight: 'bold',
        color: '#787878',
        left:70,
        padding: 5,
        top: 60
    },
})