import React from "react";
import { SafeAreaView, TextInput, StyleSheet, View, Text, Pressable, Image} from 'react-native';
import UserPool from "../AWSCognito/UserPool";
import {CognitoUser, AuthenticationDetails} from "amazon-cognito-identity-js";
import user from '../assets/User.png'



export default function Login({navigation}){
    const [email, setEmail] = React.useState('');
    const [password, setPasswor] = React.useState('');

    const handleLogin = () =>{
      const user = new CognitoUser({
        Username: email,
        Pool: UserPool
      });
      const authDetails= new AuthenticationDetails({
        Username: email,
        Password: password
      });
      user.authenticateUser(authDetails, {
        onSuccess: (data)=>{
          console.log("onSuccess: ", data)
        },
        onFailure:(err) => {
          console.error("onFailure: ", err)
        },
        newPasswordRequired: (data)=>{
          console.log("newPasswordRequiered: ", data)
        },
      });
      navigation.navigate('TabScreen', {
        screen: 'Profile',})
    }


    return(
    <>
    <SafeAreaView style={styles.container1}>
        <View style={styles.containerHello}>
          <Image source={user} style={{ width: 90, height: 90, top: 4, left: 8}}/>
        </View>   
        <View>
          <View style={styles.container}>
              <TextInput
              style={styles.input}
              value={email}
              onChangeText={(text) =>setEmail(text)}
              placeholder="Your email" />
          </View>
      
          <View style={styles.container}>
              <TextInput
              style={styles.input}
              value={password}
              onChangeText={(text) =>setPasswor(text)}
              secureTextEntry={true}
              placeholder="Your password" />
          </View>
          <Text  style={styles.text1}>Forget your paswword?</Text>
          <Text style={styles.text2} onPress={() => navigation.navigate('StepTwo')}>Dont have an account? Sing up </Text>

          <Pressable style={styles.buton}>
            <Text style={styles.text} onPress={handleLogin}>LOGIN</Text>
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
        display: 'flex',
        justifyContent:'space-evenly',
        borderRadius:20
      },
      containerHello:{
        backgroundColor: '#8100C7',
        width: 100,
        height: 100,
        left:110,
        borderRadius: 30
      },
      container:{
        backgroundColor: 'white',
        borderColor: '#e8e8e8',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginVertical: 5,
        left:30,
        width: 250,
        height:40
      },
      input:{
        height: 38,
        width:230,
        backgroundColor: '#F7F7F7'
      },
      buton:{
        backgroundColor: '#8100C7',
        width: 200,
        height: 40,
        padding: 10,
        marginVertical: 5,
        alignItems: 'center',
        borderRadius: 5,
        left:50,
        top:40
      },
      text:{
        fontWeight: 'bold',
        color: 'white',
      },
      text1:{
        position:'relative',
        fontWeight: 'bold',
        color: '#FBAC00',
        left:40,
        padding: 5
      },
      text2:{
        position:'relative',
        fontWeight: 'bold',
        left:40,
        padding: 5
      }
})