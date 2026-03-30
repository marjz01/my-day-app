import { Text, View, StyleSheet } from 'react-native';
import { useEffect, useState } from 'react';
import {getSuggestion} from '../../suggestions';
import { useLocalSearchParams } from 'expo-router';

export default function HomeScreen() {
  // const suggestion = getSuggestion(5); // Example temperature
  const [temp, setTemp] = useState<number | null>(null);
  const { personality } = useLocalSearchParams();

  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=Copenhagen&units=metric&appid=673601c6345f06e70c68906e84c32223`)
    .then((res) => res.json())
    .then((data) => {
      setTemp(data.main.temp);
    })
    .catch((err) => console.log(err));
  }, []);

  const suggestion = 
  temp !== null && personality
    ? getSuggestion(temp, personality as string)
    : "Henter data..";

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hej 👋</Text>

      <Text style={styles.text}>
       {temp !==null ? `Temperatur: ${temp} °C` : "Loader..."}
        </Text>

      <Text style={styles.text}>{suggestion}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black', // ← vigtig
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    color: 'white', // ← vigtig
  },
  text: {
    color: 'white', // ← vigtig
    marginTop: 10,
  },
});