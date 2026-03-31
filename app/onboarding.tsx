import { View, Text, Button, StyleSheet } from 'react-native';
// import { useState } from 'react';
import { router } from 'expo-router';
//import  from '@react-native-async-storage/async-storage';
import * as SecureStore from 'expo-secure-store'

export default function Onboarding() {
//   const [personality, setPersonality] = useState<string | null>(null);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hvem er du? 👀</Text>

      <Button 
      title="Introvert"
      onPress={async () => {
        // setPersonality('introvert');
        await SecureStore.setItemAsync('personality', 'introvert');
        router.replace('/(tabs)');
      }} 
      />

      <Button title="Ekstrovert" 
      onPress={async () => {
       // setPersonality('ekstrovert');
        await SecureStore.setItemAsync('personality', 'ekstrovert');
        router.replace('/(tabs)');
      }}
      />

      {/* {personality && (
        <Text style={styles.text}>Du valgte: {personality}</Text>
      )} */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontSize: 24,
    marginBottom: 20,
  },
  text: {
    color: 'white',
    marginTop: 20,
  },
});