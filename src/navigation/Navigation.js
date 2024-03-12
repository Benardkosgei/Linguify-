import { StyleSheet, Text, View } from 'react-native'
import React,{ useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Dashboard
 from '../screens/DashboardScreen/Dashboard';
 import SplashScreen from 'react-native-splash-screen';
 import Home from '../screens/HomeScreen/Home';
 import DashboardTwo from '../screens/DashboardTwo/DashboardTwo';
 import ContentPage from '../screens/Content/ContentPage';
 import AboutScreen from '../screens/History/AboutScreen';
 //Imports
const Stack = createNativeStackNavigator();
const Navigation = () => {
        useEffect(() => {
          const timeoutId = setTimeout(() => {
            SplashScreen.hide();
          }, 2000);
          return () => clearTimeout(timeoutId);
        }, []);
      
  return (
   <NavigationContainer>
    <Stack.Navigator>
        <Stack.Screen options={{headerShown:false}} name="Dashboard" component={Dashboard}/>
        <Stack.Screen options={{headerShown:false}} name="Home" component={Home}/>
        <Stack.Screen options={{headerTitle:"iamunee"}} name="DashboardTwo" component={DashboardTwo}/>
        <Stack.Screen name="Content" component={ContentPage}/>
        <Stack.Screen options={{headerTitle:"About Keiyo"}} name="About" component={AboutScreen}/>
    </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation

const styles = StyleSheet.create({})