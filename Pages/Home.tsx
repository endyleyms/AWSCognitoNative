import React from "react";
import { StyleSheet, View, Text, Pressable} from 'react-native';


export default function Home({navigation}) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#2D0046' }}>
        <View style={styles.homebuttons}>
          <Pressable style={styles.butonL}>
            <Text style={styles.textL} onPress={() => navigation.navigate('Login')}>LOGIN</Text>
          </Pressable>
          <Pressable style={styles.butonS}>
            <Text onPress={() => navigation.navigate('StepTwo')}>SINGUP</Text>
          </Pressable> 
        </View>
  
        
      </View>
    );
}

const styles = StyleSheet.create({
    homebuttons:{
      top:'30%',
      width: '100%',
      left: '20%'
    },
    butonL:{
      backgroundColor: '#FBAC00',
      width: 240,
      height: 40,
      padding: 10,
      marginVertical: 5,
      alignItems: 'center',
      borderRadius: 5,
      color:'#FFFFFF'
    },
    textL:{
      color: '#FFFFFF',
    },
  
    butonS:{
      backgroundColor: '#FFFFFF',
      width: 240,
      height: 40,
      padding: 10,
      marginVertical: 5,
      alignItems: 'center',
      borderRadius: 5,
    },
  });