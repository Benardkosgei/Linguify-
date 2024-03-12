import { StyleSheet, Text, View,Dimensions } from 'react-native'
import React from 'react'
import {Button,Title} from 'react-native-paper';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get("window").height;

const Dashboard = ({navigation}) => {
  return (
    <View style={styles.root}>
    
      <Title style={styles.sHead}>Learn Today{"\n"}Earn Tommorrow</Title>
      <Text style={styles.topic}>
      Enhance your language learning journey with Linguify
      </Text>
       <Button icon={'arrow-right'} mode="contained-tonal" textColor="#000" buttonColor="#D9D9D9" style={{ borderRadius:5, width:'60%'}} labelStyle={{fontWeight:'800', fontSize:19}} onPress={() => navigation.navigate('Home')}>
            Get Started    
              </Button>
             
               
    </View>
  )
}

export default Dashboard
const styles = StyleSheet.create({
   root:{
    height: windowHeight,
    backgroundColor:'#adebeb',
    padding:20,
   },
   sHead:{
    fontSize:43,
    fontWeight:800,
    marginBottom:15,
    marginTop:30,
    lineHeight:43,
   },
   topic:{
    fontSize:20,
    marginBottom:40,
   }
})