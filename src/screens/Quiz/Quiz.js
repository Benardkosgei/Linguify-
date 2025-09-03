import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Card, Title, RadioButton } from 'react-native-paper'

const Quiz = () => {
  const [questions, setQuestions] = useState([
    {
      question: 'What is the Kalenjin word for "Hello"?',
      options: ['Chamgei', 'Amunee nee?', 'Mutyo', 'Sai we'],
      answer: 'Chamgei',
      selectedOption: null,
    },
    {
      question: 'What is the Kalenjin word for "How are you?"?',
      options: ['Amunee kogeny', 'Kainet ap nee?', 'Amunee nee?', 'Achamin angen'],
      answer: 'Amunee nee?',
      selectedOption: null,
    },
    {
      question: 'What is the Kalenjin word for "I am fine"?',
      options: ['Achamin angen', 'Amunee kogeny', 'Kainet ap nee?', 'Mutyo'],
      answer: 'Amunee kogeny',
      selectedOption: null,
    },
    {
      question: 'What is the Kalenjin word for "What is your name?"?',
      options: ['Kainet ap nee?', 'Kainet ap….. ', 'Amunee nee?', 'Chamgei'],
      answer: 'Kainet ap nee?',
      selectedOption: null,
    },
    {
      question: 'What is the Kalenjin word for "My name is….."?',
      options: ['Kainet ap….. ', 'Kainet ap nee?', 'Amunee kogeny', 'Achamin angen'],
      answer: 'Kainet ap….. ',
      selectedOption: null,
    },
    {
      question: 'What is the Kalenjin word for "I love you"?',
      options: ['Achamin angen', 'Mutyo', 'Sai we', 'Chamgei'],
      answer: 'Achamin angen',
      selectedOption: null,
    },
    {
      question: 'What is the Kalenjin word for "Thank you"?',
      options: ['Mutyo', 'Achamin angen', 'Sai we', 'Amunee nee?'],
      answer: 'Mutyo',
      selectedOption: null,
    },
    {
      question: 'What is the Kalenjin word for "Goodbye"?',
      options: ['Sai we', 'Mutyo', 'Chamgei', 'Amunee kogeny'],
      answer: 'Sai we',
      selectedOption: null,
    },
  ]);

  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleOptionSelect = (questionIndex, option) => {
    const newQuestions = [...questions];
    newQuestions[questionIndex].selectedOption = option;
    setQuestions(newQuestions);
  };

  const handleSubmit = () => {
    let newScore = 0;
    questions.forEach((question) => {
      if (question.selectedOption === question.answer) {
        newScore++;
      }
    });
    setScore(newScore);
    setShowScore(true);
  };

  return (
    <SafeAreaView style={styles.container}>
      {showScore ? (
        <View style={styles.scoreContainer}>
          <Text style={styles.scoreText}>Your score: {score}/{questions.length}</Text>
        </View>
      ) : (
        <View>
          {questions.map((question, index) => (
            <Card key={index} style={styles.card}>
              <Title style={styles.question}>{question.question}</Title>
              {question.options.map((option, optionIndex) => (
                <View key={optionIndex} style={styles.optionContainer}>
                  <RadioButton
                    value={option}
                    status={question.selectedOption === option ? 'checked' : 'unchecked'}
                    onPress={() => handleOptionSelect(index, option)}
                  />
                  <Text style={styles.optionText}>{option}</Text>
                </View>
              ))}
            </Card>
          ))}
          <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
            <Text style={styles.submitButtonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  )
}

export default Quiz

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scoreContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scoreText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  card: {
    marginHorizontal: 10,
    marginVertical: 5,
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'white',
    elevation: 2,
  },
  question: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  optionText: {
    fontSize: 16,
    marginLeft: 10,
  },
  submitButton: {
    backgroundColor: 'blue',
    padding: 15,
    borderRadius: 10,
    margin: 10,
    alignItems: 'center',
  },
  submitButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
