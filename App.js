import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Pages/Home';
import Login from './Pages/Login';
import SingUp from './Pages/SingUp';
import StepTwo from './Pages/StepTwo';
import StepTree from './Pages/StepTree';
import StepFour from './Pages/SteepFour';


const Tab = createBottomTabNavigator();

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
