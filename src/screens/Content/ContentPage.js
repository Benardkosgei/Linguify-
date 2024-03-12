import React, { useState, useEffect }  from 'react';
import { View, Text, StyleSheet,FlatList } from 'react-native';
import firestore from '@react-native-firebase/firestore';
const ContentPage = ({ route }) => {
// some names
  const [loadingNames, setLoadingNames] = useState(true);
  const [kalenames, setKaleNames] = useState([]);
  // load some words
  const [loadingWords, setLoadingWords] = useState(true);
  const [kalewords, setKaleWords] = useState([]);
  // load dowry
  const [loadingDowory, setLoadingDowory] = useState(true);
  const [dowory, setKaleDowory] = useState([]);
  // load subtribes
  const [loadingSubtribes, setLoadingSubtribes] = useState(true);
  const [subtribes, setKaleSubtribes] = useState([]);
//---------------------------------------------------------------------------
  const { title, description,itemid } = route.params;
     //  start kalenjin words
    //  for id 1
    useEffect(() => {
      console.log('ID:', itemid);
      // Fetch data for Kalenjin Names
      if (itemid == 1) {
        const subscriber = firestore()
          .collection('Kalenjin Names')
          .onSnapshot(querySnapshot => {
            const kalenames = [];
            querySnapshot.forEach(documentSnapshot => {
              kalenames.push({
                ...documentSnapshot.data(),
                key: documentSnapshot.id,
              });
            });
            setKaleNames(kalenames);
            setLoadingNames(false);
          });
        return () => subscriber();
      }
      // Fetch data for Kalenjin names
      if (itemid == 2) {
        const subscriber = firestore()
          .collection('basicwords')
          .onSnapshot(querySnapshot => {
            const kalewords = [];
            querySnapshot.forEach(documentSnapshot => {
              kalewords.push({
                ...documentSnapshot.data(),
                key: documentSnapshot.id,
              });
            });
            setKaleWords(kalewords);
            setLoadingWords(false);
          });
        return () => subscriber();
      }
      // 
      // Fetch data for Kalenjin names
      if (itemid == 4) {
        const subscriber = firestore()
          .collection('dowry')
          .onSnapshot(querySnapshot => {
            const dowory = [];
            querySnapshot.forEach(documentSnapshot => {
              dowory.push({
                ...documentSnapshot.data(),
                key: documentSnapshot.id,
              });
            });
            setKaleDowory(dowory);
            setLoadingDowory(false);
          });
        return () => subscriber();
      }
      //  End dowory
      // start subtribes
      if (itemid == 8) {
        const subscriber = firestore()
          .collection('subtribes')
          .onSnapshot(querySnapshot => {
            const subtribes = [];
            querySnapshot.forEach(documentSnapshot => {
              subtribes.push({
                ...documentSnapshot.data(),
                key: documentSnapshot.id,
              });
            });
            setKaleSubtribes(subtribes);
            setLoadingSubtribes(false);
          });
        return () => subscriber();
      }
      // end subtibes
      //----------------------------------------------------------------------
    }, [itemid]);
  //  end kalenjin Words
 console.log(kalenames)
  
  return (
    <View style={styles.container}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.description}>{description}</Text>

    {loadingNames || loadingWords || loadingDowory || loadingSubtribes ? (
      <Text>Loading...</Text>
    ) : (
      <FlatList
        data={
           itemid == 1 ? kalenames :
           itemid == 2 ? kalewords:
           itemid == 3 ? kalewords:
           itemid == 4 ? dowory: 
           itemid == 8 ? subtribes: kalenames
          }
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.meaning}>{item.meaning}</Text>
          </View>
        )}
        keyExtractor={item => item.key}
      />
    )}
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 18,
    marginBottom: 20,
  },
  item: {
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  meaning: {
    fontSize: 16,
  },
});

export default ContentPage;