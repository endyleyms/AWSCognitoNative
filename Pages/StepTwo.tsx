import React from "react";
import { SafeAreaView, TextInput, StyleSheet, View, Text, Pressable} from 'react-native';
import UserPool, {getAttributeList} from "../AWSCognito/UserPool";


export default function StepTwo({navigation}){
    const [email, setEmail] = React.useState('');
    const [number, setNumber] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [confirm, setConfirm] = React.useState('');




    const handleCreateUser  = async () =>{
      const attributes = [
        {
          Name: 'email',
          Value: email,
        },
        {
          Name: 'phone_number',
          Value: number,
        }
      ]

      const attributeList = getAttributeList(attributes);
      UserPool.signUp(email, password, attributeList, null, (err, data)=>{
        if(err){
          console.error(err);
        }
        console.log(data);
        navigation.navigate('StepTree')
      });
     
    }

    return(
        <>
        <SafeAreaView style={styles.container1}>
            <View style={styles.containerSteps}>
                <View style={styles.containerSelect}><Text style={styles.text} onPress={() => navigation.navigate('SingUp')}>1</Text></View> 
                <View style={styles.containerSelect}><Text style={styles.text}>2</Text></View> 
                <View style={styles.containerStep}><Text style={styles.text}>3</Text></View> 
                <View style={styles.containerStep}><Text style={styles.text}>4</Text></View>    
            </View>
            <View style={styles.container2}>
                <View style={styles.containerInput}>
                    <View style={styles.container}>
                        <TextInput
                        style={styles.input}
                        value={email}
                        onChangeText={(text) =>setEmail(text)}
                        placeholder="Email" />
                    </View>        
                    <View style={styles.container}>
                        <TextInput
                        style={styles.input}
                        value={number}
                        onChangeText={(text) =>setNumber(text)}
                        placeholder="Mobile number" />
                    </View> 
                    <View style={styles.container}>
                        <TextInput
                        style={styles.input}
                        value={password}
                        secureTextEntry={true}
                        onChangeText={(text) =>setPassword(text)}
                        placeholder="Password" />
                    </View> 
                    <View style={styles.container}>
                        <TextInput
                        style={styles.input}
                        value={confirm}
                        secureTextEntry={true}
                        onChangeText={(text) =>setConfirm(text)}
                        placeholder="Repeat Password" />
                    </View>   
                </View>  
                <Pressable style={styles.buton}>
                    <Text style={styles.text} onPress={handleCreateUser} >CREATE</Text>
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
      containerStep:{
        backgroundColor: '#801BC452',
        width: 30,
        height: 30,
        borderRadius: 2
      },
      containerInput:{
        display:'flex',
        flexDirection:'column'
      },

      container:{
        backgroundColor: 'white',
        borderColor: '#e8e8e8',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginVertical: 5,
        left:30,
        width: 270,
        height: 50
      },

      input:{
        height: 45,
        width:240,
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