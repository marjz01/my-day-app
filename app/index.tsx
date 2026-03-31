import { useEffect, useState } from 'react';
import { Redirect } from 'expo-router';
import * as SecureStore from 'expo-secure-store';
import { View, Text } from 'react-native';

export default function Index() {
  const [loading, setLoading] = useState(true);
  const [hasPersonality, setHasPersonality] = useState<boolean | null>(null);

  useEffect(() => {
    const checkPersonality = async () => {
      const saved = await SecureStore.getItemAsync('personality');

      if (saved) {
        setHasPersonality(true);
      } else {
        setHasPersonality(false);
      }

      setLoading(false);
    };

    checkPersonality();
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'black' }}>
        <Text style={{ color: 'white' }}>Loader...</Text>
      </View>
    );
  }

  if (hasPersonality) {
    return <Redirect href="/(tabs)" />;
  }

  return <Redirect href="/onboarding" />;
}