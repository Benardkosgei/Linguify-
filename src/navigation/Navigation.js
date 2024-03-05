import { StyleSheet, Text, View } from 'react-native'
import React,{ useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Dashboard
 from '../screens/DashboardScreen/Dashboard';
 import SplashScreen from 'react-native-splash-screen';
 import Home from '../screens/HomeScreen/Home';
 import DashboardTwo from '../screens/DashboardTwo/DashboardTwo';
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
        <Stack.Screen name="Dashboard" component={Dashboard}/>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="DashboardTwo" component={DashboardTwo}/>
    </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation

const styles = StyleSheet.create({})