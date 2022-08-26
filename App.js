import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, Alert} from 'react-native';
import React, {useState, useEffect} from 'react'

export default function App() {

  const [guess, setGuess] = useState('');
  const [title, setTitle] = useState('Guess a number between 1-100');
  const [random, setRandom] = useState('');
  const [tries, setTries] = useState(1);

  const randomNumber = () => {
    var number = Math.floor(Math.random() * 100) + 1;
    setRandom(number)
    console.log("number generated: " + number);
  }

  useEffect(() => {
    randomNumber()
  }, [])

  const buttonPressed = () => {
    setTries(tries+1)
    if (guess < random) {
      setTitle("Your guess " + guess + " is too low")
    } else if (guess > random) {
      setTitle("Your guess " + guess + " is too high")
    } else {
      Alert.alert("You guessed the number in " + tries + " guesses");
      setTitle("Correct!")
    }
  }

  return (
    <View style={styles.container}>
      <Text>{title}</Text>
      <TextInput style={styles.input} onChangeText={guess => setGuess(guess)} value={guess} keyboardType='numeric'/>
      <Button title="MAKE GUESS" onPress={buttonPressed}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: 50,
    borderColor: 'gray',
    borderWidth: 1
  },
});
