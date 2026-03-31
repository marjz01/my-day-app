import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { getSuggestion } from '../../suggestions';
//import { useLocalSearchParams } from 'expo-router';
import * as SecureStore from 'expo-secure-store';
import WeatherCard from '../../components/weatherCard';

export default function HomeScreen() {
  // const suggestion = getSuggestion(5); // Example temperature
  const [temp, setTemp] = useState<number | null>(null);
  //const { personality } = useLocalSearchParams();
  const [personalityState, setPersonalityState] = useState<string | null>(null);


  useEffect(() => {
    const loadPersonality = async () => {
      const saved = await SecureStore.getItemAsync('personality');
      setPersonalityState(saved);
    };
    loadPersonality();

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=Copenhagen&units=metric&appid=673601c6345f06e70c68906e84c32223`)
      .then((res) => res.json())
      .then((data) => {
        setTemp(data.main.temp);
      })
      .catch((err) => console.log(err));
  }, []);

  const suggestion =
    temp !== null && personalityState
      ? getSuggestion(temp, personalityState)
      : "Henter data..";

  return (
    <View style={styles.container}>
     
      <Text style={styles.header}>Welcome!</Text>
      <WeatherCard temp={temp} />

      <Text style={styles.section}> Perfect for today
        
      </Text>

      <View style={styles.card}>
         <Text style={styles.suggestion}>{suggestion}</Text>
      </View>

     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    //alignItems: 'center',
    backgroundColor: '#F5F7FB', // ← vigtig
    padding: 15,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 40,
    color: 'white', // ← vigtig
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 40,
    marginBottom: 20,
    color: '#0F172A'
  },
  section: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 20,
    marginBottom: 10,
    color: '#1E293B'
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 3,
  },
    suggestion: {
    fontSize: 16,
    color: '#334155',
    },

  text: {
    color: 'white', // ← vigtig
    marginTop: 10,
  },
});