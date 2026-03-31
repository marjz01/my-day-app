import {View, Text, StyleSheet} from 'react-native';

type Props = {
    temp: number | null;
};

export default function weatherCard({ temp }: Props) {
    return (
        <View style={styles.card}>
            <Text style={styles.title}> Todays Weather </Text>

            <Text style={styles.temp}>
                {temp !== null ? `${temp} °C` : "Loading..."}
            </Text>

            <Text style={styles.city}> Copenhagen </Text>
        </View>
    );
}
     
const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 20,
        marginBottom: 15,
        elevation: 3,
    },
    title: {
        fontSize: 18,
        fontWeight: '600',
    },
    temp: {
        fontSize: 32,
        fontWeight: 'bold',
        marginTop: 10,
    },
    city: {
        marginTop: 5,
        color: '#64748B'
    },
    });