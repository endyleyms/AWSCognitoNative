import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View,Pressable } from 'react-native';
import Login from './Pages/Login';
import SingUp from './Pages/SingUp';


const Tab = createBottomTabNavigator();
function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#2D0046' }}>
      <Text>Home Screen</Text>
      <View style={styles.homebuttons}>
        <Pressable style={styles.butonL}>
          <Text style={styles.textL} onPress={() => navigation.navigate('Login')}>Login</Text>
        </Pressable>
        <Pressable style={styles.butonS}>
          <Text onPress={() => navigation.navigate('SingUp')}>SingUp</Text>
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
        <Stack.Screen 
        name="Home" 
        component={HomeScreen}
        options={{
          title: 'Home',
          headerStyle: {
            backgroundColor: '#2D0046',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} 
        />
        <Stack.Screen 
        name="Login" 
        component={Login}
        options={{
          title: 'Login',
          headerStyle: {
            backgroundColor: '#2D0046',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} 
        />
        <Stack.Screen 
        name="SingUp" 
        component={SingUp}
        options={{
          title: 'SingUp',
          headerStyle: {
            backgroundColor: '#2D0046',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} 
        />
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
