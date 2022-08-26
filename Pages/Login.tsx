import React from "react";
import { SafeAreaView, TextInput, StyleSheet, View, Text, Pressable} from 'react-native';


export default function Login({navigation}){
    const [email, setEmail] = React.useState('');
    const [password, setPasswor] = React.useState('');


    return(
    <>
    <SafeAreaView style={styles.container1}>
        <View style={styles.containerHello}>
        </View>        
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
        <Text style={styles.text2} onPress={() => navigation.navigate('SingUp')}>Dont have an account? Sing up </Text>

        <Pressable style={styles.buton}>
          <Text style={styles.text} >LOGIN</Text>
        </Pressable>
        
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
        bottom: '20&',
        backgroundColor: '#FFFFFF',
        borderColor: '#e8e8e8',
        display: 'flex',
        justifyContent:'space-evenly',
        borderRadius:20
      },
      containerHello:{
        backgroundColor: '#8100C7',
        width: '100px',
        height: '100px',
        left:90,
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
      },
      input:{
        height: 30,
        width:'100%',
        backgroundColor: '#F7F7F7'
      },
      buton:{
        backgroundColor: '#8100C7',
        width: '60%',
        height: '7%',
        padding: 10,
        marginVertical: 5,
        alignItems: 'center',
        borderRadius: 5,
        left:40,
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
      },
      text2:{
        position:'relative',
        fontWeight: 'bold',
        left:40,
      }
})