import { View, Text, Button, StyleSheet } from 'react-native';
import { useState } from 'react';
import { router } from 'expo-router';

export default function Onboarding() {
  const [personality, setPersonality] = useState<string | null>(null);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hvem er du? 👀</Text>

      <Button 
      title="Introvert" onPress={() => {
      setPersonality("introvert");
      router.replace({
        pathname: '/(tabs)',
        params: { personality: "introvert" },
      });
      }} />

      <Button title="Ekstrovert" onPress={() => {
        setPersonality("ekstrovert");
        router.replace({
          pathname: '/(tabs)',
          params: { personality: "ekstrovert" },
        });
      }} />

      {personality && (
        <Text style={styles.text}>Du valgte: {personality}</Text>
      )}
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