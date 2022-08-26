import React from "react";
import { SafeAreaView, TextInput, StyleSheet, View, Text, Pressable} from 'react-native';


export default function Login({navigation}){
    const [indicative, setIndicative] = React.useState('');
    const [number, setNumber] = React.useState('');

    return(
        <>
    <SafeAreaView style={styles.container1}>
        <View style={styles.containerSteps}>
         <View style={styles.containerSelect}><Text style={styles.text}>1</Text></View> 
         <View style={styles.containerStep}><Text style={styles.text}>2</Text></View> 
         <View style={styles.containerStep}><Text style={styles.text}>3</Text></View> 
         <View style={styles.containerStep}><Text style={styles.text}>4</Text></View>    
        </View>
        <View style={styles.container2}>
            <Text style={styles.text1}>Enter your mobile number to continue</Text>
            <View style={styles.containerInput}>
                <View style={styles.containerIndicative}>
                    <TextInput
                    style={styles.input}
                    value={indicative}
                    onChangeText={(text) =>setIndicative(text)}
                    placeholder="+57" />
                </View>
        
                <View style={styles.container}>
                    <TextInput
                    style={styles.input}
                    value={number}
                    onChangeText={(text) =>setNumber(text)}
                    placeholder="Mobile number" />
                </View>   
            </View>  
            <Text  style={styles.text1}>Have a account?</Text>
            <Text style={styles.text2} onPress={() => navigation.navigate('Login')}>Login with user and password </Text>

            <Pressable style={styles.buton}>
            <Text style={styles.text} onPress={() => navigation.navigate('StepTwo')} >NEXT</Text>
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
        top: '40%',
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
      containerStep:{
        backgroundColor: '#801BC452',
        width: 30,
        height: 30,
        borderRadius: 2
      },
      containerInput:{
        display:'flex',
        flexDirection:'row'
      },

      container:{
        backgroundColor: 'white',
        borderColor: '#e8e8e8',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginVertical: 5,
        left:30,
        width: 200,
      },
      containerIndicative:{
        backgroundColor: 'white',
        borderColor: '#e8e8e8',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginVertical: 5,
        left:30,
        width: 50,
      },

      input:{
        height: 30,
        width:'100%',
        backgroundColor: '#F7F7F7'
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
        top: 50
      },
      text:{
        fontWeight: 'bold',
        color: 'white',
        justifyContent:'center',
        alignItems:'center',
        padding: 5
      },
      text1:{
        position:'relative',
        fontWeight: 'bold',
        color: '#787878',
        left:40,
        padding: 5
      },
      text2:{
        position:'relative',
        fontWeight: 'bold',
        left:40,
        color:'#8100C7',
        padding: 5
      }
})