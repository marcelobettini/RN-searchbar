
import { StyleSheet, Text, View, FlatList, Image, ActivityIndicator } from 'react-native';
import { useFetch } from './hooks/useFetch';
import { useState } from 'react';
import User from './components/User';

export default function App() {
  const [endpoint, setEndpoint] = useState('?results=20')
  const [data, loading, error] = useFetch(endpoint);
  if (loading) return (<ActivityIndicator />)
  if (error) return (<Text>Crash, Boom, Bang!</Text>)

  return data && (
    <View style={styles.container}>


      <FlatList
        showsVerticalScrollIndicator={false}
        data={data.results}
        keyExtractor={(item, idx) => idx}
        renderItem={({ item }) => <User user={item} />}
      />


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
  thumb: {
    width: 30,
    height: 30,
    borderRadius: 50
  }
});
