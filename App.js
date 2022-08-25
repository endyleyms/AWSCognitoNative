import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View,Pressable } from 'react-native';


const Tab = createBottomTabNavigator();
function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#2D0046' }}>
      <Text>Home Screen</Text>
      <View style={styles.homebuttons}>
        <Pressable style={styles.butonL}>
          <Text style={styles.textL}>Login</Text>
        </Pressable>
        <Pressable style={styles.butonS}>
          <Text style={styles.text}>SingUp</Text>
        </Pressable> 
      </View>

      
    </View>
  );
}


const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
     <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator> 
    </NavigationContainer>
    
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
    width: '60%',
    height: '40%',
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
    width: '60%',
    height: '40%',
    padding: 10,
    marginVertical: 5,
    alignItems: 'center',
    borderRadius: 5,
  },
});
