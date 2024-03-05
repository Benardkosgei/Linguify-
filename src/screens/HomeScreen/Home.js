import { StyleSheet, Text, View,SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import { Card,Title,Divider } from 'react-native-paper'
import FontAwesome  from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useNavigation } from '@react-navigation/native';
const Home = () => {
  const navigation = useNavigation();
  const letsGo= ()=>{
    navigation.navigate('DashboardTwo');
  };
  return (
    <SafeAreaView>
       <TouchableOpacity onPress={letsGo}>
      <View style={styles.container}>
     
            <Card style={styles.cards}>
              <Card.Actions style={styles.sCardAction}>
                <Title style={styles.sTitle}>Learn Kalenjin</Title>
                <MaterialIcons name="east" size={40} color={"black"} />
                </Card.Actions>
              </Card>
              
      </View>
      </TouchableOpacity>
      <Divider style={{height: 5, width: '90%', alignSelf: 'center', backgroundColor:'#000080', borderRadius:10, margin: 10,}}/>
      
      <TouchableOpacity onPress={letsGo}> 
      <View style={styles.container}>
            <Card style={styles.cards}>
              <Card.Actions style={styles.sCardAction}>
                <Title style={styles.sTitle}>Learn Luo</Title>
                <MaterialIcons name="east" size={40} color={"black"} />
                </Card.Actions>
              </Card>
      </View>
      </TouchableOpacity>
      <Divider style={{height: 5, width: '90%', alignSelf: 'center', backgroundColor:'#000080', borderRadius:10, margin: 10,}}/>
      
      <TouchableOpacity onPress={letsGo}> 
      <View style={styles.container}>
            <Card style={styles.cards}>
              <Card.Actions style={styles.sCardAction}>
                <Title style={styles.sTitle}>Learn Kiswahili</Title>
                <MaterialIcons name="east" size={40} color={"black"} />
                </Card.Actions>
              </Card>
      </View>
       </TouchableOpacity>
      <Divider style={{height: 5, width: '90%', alignSelf: 'center', backgroundColor:'#000080', borderRadius:10, margin: 10,}}/>
     
      <TouchableOpacity onPress={letsGo}> 
      <View style={styles.container}>
            <Card style={styles.cards}>
              <Card.Actions style={styles.sCardAction}>
                <Title style={styles.sTitle}>Learn Kikuyu</Title>
                <MaterialIcons name="east" size={40} color={"black"} />
                </Card.Actions>
              </Card>
      </View>
      </TouchableOpacity>
      <Divider style={{height: 5, width: '90%', alignSelf: 'center', backgroundColor:'#000080', borderRadius:10, margin: 10,}}/>
       
    </SafeAreaView>
  )
}

export default Home
const styles = StyleSheet.create({
  container:{
      marginTop:10,
      marginHorizontal:'auto',
      alignItems:'center',
  },
  cards:{
    paddingHorizontal:10,
    paddingVertical:20,
    borderRadius:5,
    width:'90%',
    marginVertical: 6,
},
sCardAction:{
  display:"flex",
  alignItems:"center", 
  flexDirection:"row",
  alignSelf:"flex-start",
},
sTitle:{
  fontSize:30,
  fontWeight:800,
  color:'blue',
}
})