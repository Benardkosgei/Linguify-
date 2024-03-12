import React from 'react';
import {
  View,
  FlatList,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const DashboardTwo = ({navigation}) => {
  const images = [
    {
      id: '1',
      icon:'task-alt',
      title: 'Basic Words',
      description:
        " interactive & rewarding.",
    },
    {
      id: '2',
      icon:'task-alt',
      title: 'Names and their meanings',
      description: 'E-Lab',
    },
    {
      id: '3',
      icon:"task-alt",
      title: 'Clans (Ortinweek)',
      description: 'Codecrafters ',
    },{
      id: '4',
      icon:"task-alt",
      title: 'Dowry',
      description: 'Codecrafters ',
    },
    {
      id: '5',
      icon:"task-alt",
      title: 'Months (Araek)',
      description: 'Codecrafters ',
    },
    {
      id: '6',
      icon:"task-alt",
      title: 'Legendaries ()',
      description: 'Codecrafters ',
    },
    {
      id: '7',
      icon:"task-alt",
      title: 'Kalenjin Tribe',
      description: 'Codecrafters ',
    },
    {
      id: '8',
      icon:"chevron-right",
      title: 'Kalenjin Sub-tribes',
      description: 'Codecrafters ',
    },{
      id: '9',
      icon:"chevron-right",
      title: 'Kalenjin Sub-tribes',
      description: 'Codecrafters ',
    },{
      id: '10',
      icon:"chevron-right",
      title: 'Kalenjin Sub-tribes',
      description: 'Codecrafters ',
    },{
      id: '11',
      icon:"chevron-right",
      title: 'Kalenjin Sub-tribes',
      description: 'Codecrafters ',
    },{
      id: '12',
      icon:"chevron-right",
      title: 'Kalenjin Sub-tribes',
      description: 'Codecrafters ',
    },{
      id: '13',
      icon:"chevron-right",
      title: 'Kalenjin Sub-tribes',
      description: 'Codecrafters ',
    },{
      id: '14',
      icon:"chevron-right",
      title: 'Kalenjin Sub-tribes',
      description: 'Codecrafters ',
    },{
      id: '15',
      icon:"chevron-right",
      title: 'Kalenjin Sub-tribes',
      description: 'Codecrafters ',
    },{
      id: '16',
      icon:"chevron-right",
      title: 'Kalenjin Sub-tribes',
      description: 'Codecrafters ',
    },{
      id: '17',
      icon:"chevron-right",
      title: 'Kalenjin Sub-tribes',
      description: 'Codecrafters ',
    },{
      id: '18',
      icon:"chevron-right",
      title: 'Kalenjin Sub-tribes',
      description: 'Codecrafters ',
    },
    
  
  ];

  const renderItem = ({item}) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => navigation.navigate('Dashboard')}>
         <MaterialIcons style={styles.icon} name={item.icon} size={40} color={"black"} />
         <Text style={styles.title}>{item.title} </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={images}
        numColumns={1}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.flatlistContainer}
      />
     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#212330',
  },
  flatlistContainer: {
    padding: 5,
   
  },
  item: {
    flex: 1,
    margin: 7,
    padding:10,
    alignItems:"center",
    flexDirection:'row',
    height: Dimensions.get('window').width / 5 - 10, // Adjust height based on your layout
    backgroundColor: '#e1e1e1',
    marginVertical:3,
    borderRadius:5,
  },
  icon: {
    fontSize:50,
    borderRadius: 10,
  },
  title: {
     fontSize:22,
    fontWeight: 'bold',
    color: '#0F0F0F',
    marginLeft:10,
  },
});

export default DashboardTwo;
