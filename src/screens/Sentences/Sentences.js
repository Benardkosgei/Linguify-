import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { Card, Title, Divider } from 'react-native-paper'
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Sentences = () => {
  const sentences = [
    { kalenjin: 'Chamgei', english: 'Hello' },
    { kalenjin: 'Amunee nee?', english: 'How are you?' },
    { kalenjin: 'Amunee kogeny', english: 'I am fine' },
    { kalenjin: 'Kainet ap nee?', english: 'What is your name?' },
    { kalenjin: 'Kainet ap….. ', english: 'My name is…..' },
    { kalenjin: 'Achamin angen', english: 'I love you' },
    { kalenjin: 'Mutyo', english: 'Thank you' },
    { kalenjin: 'Sai we', english: 'Goodbye' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Title style={styles.title}>Learn Kalenjin Sentences</Title>
        {sentences.map((sentence, index) => (
          <Card key={index} style={styles.card}>
            <View style={styles.cardContent}>
              <Text style={styles.kalenjinText}>{sentence.kalenjin}</Text>
              <Text style={styles.englishText}>{sentence.english}</Text>
            </View>
            <TouchableOpacity style={styles.audioButton}>
              <FontAwesome name="volume-up" size={24} color="black" />
            </TouchableOpacity>
          </Card>
        ))}
      </ScrollView>
    </SafeAreaView>
  )
}

export default Sentences

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  card: {
    marginHorizontal: 10,
    marginVertical: 5,
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'white',
    elevation: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardContent: {
    flex: 1,
  },
  kalenjinText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  englishText: {
    fontSize: 16,
    color: 'gray',
  },
  audioButton: {
    padding: 10,
  },
});
