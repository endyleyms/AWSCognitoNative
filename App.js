import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from './Pages/Home';
import Login from './Pages/Login';
import StepTwo from './Pages/StepTwo';
import StepTree from './Pages/StepTree';
import StepFour from './Pages/SteepFour';
import Profile from './Pages/Profile';


const Tab = createBottomTabNavigator();
function TabScreen() {
  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = focused
            ? 'home'
            : 'home';
        } else{
          iconName = focused ? 'ios-person' : 'ios-person';
        }

        // You can return any component that you like here!
        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: '#2D0046',
      tabBarInactiveTintColor: 'gray',
    })}
    >
      <Tab.Screen 
      name="Profile" 
      component={Profile}
      options={{
        title: 'Profile',
        headerStyle: {
          backgroundColor: '#2D0046',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }} />
    </Tab.Navigator>
  );
}




const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
     <Stack.Navigator>
        <Stack.Screen 
        name="Home" 
        component={Home}
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
          name="TabScreen" 
          component={TabScreen}
          options={{ headerShown: false }}
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
        name="StepTwo" 
        component={StepTwo}
        options={{
          title: 'StepTwo',
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
        name="StepTree" 
        component={StepTree}
        options={{
          title: 'StepTree',
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
        name="StepFour" 
        component={StepFour}
        options={{
          title: 'StepFour',
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
