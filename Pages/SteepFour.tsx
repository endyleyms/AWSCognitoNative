import React from "react";
import { SafeAreaView, StyleSheet, View, Text, Pressable, TextInput} from 'react-native';

export default function StepFour({navigation}){
    const [one, setOne] = React.useState('');
    const [two, setTwo] = React.useState('');
    const [tree, setTree] = React.useState('');
    const [four, setFour] = React.useState('');



    return(
        <>
        <SafeAreaView style={styles.container1}>
            <View style={styles.containerSteps}>
                <View style={styles.containerSelect}><Text style={styles.text} onPress={() => navigation.navigate('SingUp')}>1</Text></View> 
                <View style={styles.containerSelect}><Text style={styles.text}  onPress={() => navigation.navigate('StepTwo')}>2</Text></View> 
                <View style={styles.containerSelect}><Text style={styles.text} onPress={() => navigation.navigate('StepTree')}>3</Text></View> 
                <View style={styles.containerSelect}><Text style={styles.text}>4</Text></View>    
            </View>
            <View style={styles.container2}>
                <View style={styles.containerSteps}>
                    <View style={styles.containerNumber}>
                        <TextInput
                        style={styles.input}
                        value={one}
                        onChangeText={(text) =>setOne(text)}
                    />
                    </View> 
                    <View style={styles.containerNumber}>
                        <TextInput
                        style={styles.input}
                        value={two}
                        onChangeText={(text) =>setTwo(text)}
                    />
                    </View> 
                    <View style={styles.containerNumber}>
                        <TextInput
                        style={styles.input}
                        value={tree}
                        onChangeText={(text) =>setTree(text)}
                    />
                    </View> 
                    <View style={styles.containerNumber}>
                        <TextInput
                        style={styles.input}
                        value={four}
                        onChangeText={(text) =>setFour(text)}
                    />
                    </View> 
                </View>
                <Text style={styles.text1}>Didn't receive the code?</Text>
                <Pressable style={styles.butonR}>
                    <Text style={styles.textR} >RESEND</Text>
                </Pressable> 
                <Pressable style={styles.buton}>
                    <Text style={styles.text} >VERIFY</Text>
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
        bottom: '20&',
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
        width: '30px',
        height: '30px',
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
        width: 50,
        height:50
    },
    input:{
        height: 50,
        width:40,
        backgroundColor: '#F7F7F7',
        alignContent:'center',
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
        top: 80
    },
    butonR:{
        backgroundColor: '#F7F7F7',
        width: '50%',
        height: '7%',
        padding: 10,
        marginVertical: 5,
        alignItems: 'center',
        borderRadius: 5,
        position:'relative',
        left:70,
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