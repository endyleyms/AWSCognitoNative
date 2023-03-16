import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Pressable, StatusBar, Image, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import IosZoomImage from './Components/IosZoomImage';

const { width, height } = Dimensions.get('window');

// const imageurl = [
//     {ImageUrl: 'http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcSbywUFuXvFMZ1dqCi--Qc4bjlee40_0qvyaggtR1fWqbMQtsT7GfjWZj4oeOf5lRNq' },
//     {ImageUrl: 'https://i.guim.co.uk/img/media/90e8c9ef02b4b18c60f378d9a72665bbae9a1917/225_0_3750_2251/master/3750.jpg?width=465&quality=85&dpr=1&s=none'},
//     {ImageUrl: 'https://www.realsimple.com/thmb/7KXyUV7RHuoQEHbyGrv7j6m7U0U=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/orchid-care-tips-53e826a2bf20448a9c58a0cab2254430.jpg' }
// ]

const ImageScreen1 = () => {
    return (
        <View style={styles.container}>
            <IosZoomImage ImageUrl={'http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcSbywUFuXvFMZ1dqCi--Qc4bjlee40_0qvyaggtR1fWqbMQtsT7GfjWZj4oeOf5lRNq'} />
        </View>
    );
}

const ImageScreen2 = () => {
    return (
        <View style={styles.container}>
            <IosZoomImage ImageUrl={ 'https://i.guim.co.uk/img/media/90e8c9ef02b4b18c60f378d9a72665bbae9a1917/225_0_3750_2251/master/3750.jpg?width=465&quality=85&dpr=1&s=none'} />
        </View>
    );
}

const ImageScreen3 = () => {
    return (
        <View style={styles.container}>
            <IosZoomImage ImageUrl={ 'https://www.realsimple.com/thmb/7KXyUV7RHuoQEHbyGrv7j6m7U0U=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/orchid-care-tips-53e826a2bf20448a9c58a0cab2254430.jpg'} />
        </View>
    );
}

const Tab = createMaterialTopTabNavigator();

export default function Profile({navigation}){
    const [tab, setTab] =useState([
        {
            name: '1',
            component:ImageScreen1
        },
        {
            name: '2',
            component:ImageScreen2
        },
        {
            name: '3',
            component:ImageScreen3
        }

    ])
    return(
        <>
        <NavigationContainer independent={true} >
            <Tab.Navigator
            swipeEnabled={false}
            >
                {
                    tab.map(tab => <Tab.Screen name={tab.name} component={tab.component} />)
                }
            </Tab.Navigator>
            <StatusBar />
        </NavigationContainer>
        </>
    );
}
const styles= StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: width,
        height:height
    },
    images:{
        width: width,
        height:height
    },
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