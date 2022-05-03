import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Button } from 'react-native';
import { useState } from 'react';
import AnimatedTyping from './AnimatedTyping';

export default function App() {
  let [greetingCompleted, setGreetingCompleted] = useState(false);
  let [nextPressed, setNextPressed] = useState(false);
  return (
    <View style={styles.container}>
      <AnimatedTyping text={["Hi! Welcome to the animated typing tutorial...", "We are here to help"]} onComplete={() => setGreetingCompleted(true)}/>
      { greetingCompleted ? <Button title="Next" onPress={() => setNextPressed(true)} /> : undefined}
      { nextPressed ? <AnimatedTyping text={["Hope you've enjoyed today's video!"]} /> : undefined}
      { nextPressed ? <AnimatedTyping text={["Like and subscribe!"]} /> : undefined}
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2C2B3C',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16
  },
});
