import { StyleSheet, Text, View, FlatList, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import User from './User';
import React from 'react'
import { useFetch } from '../hooks/useFetch';
import { useState, useEffect } from 'react';

const Home = () => {
  const navigation = useNavigation()
  const [endpoint, setEndpoint] = useState('?results=20')
  const [data, loading, error] = useFetch(endpoint);
  const [dataQuery, setDataQuery] = useState([])

  const handleQuery = (str) => {
    const query = data.results.filter(e => e.name.first.toLowerCase().includes(str.toLowerCase()) || e.name.last.toLowerCase().includes(str.toLowerCase()))
    setDataQuery(query)
  }

  useEffect(() => {
    navigation.setOptions({
      headerTitleAlign: 'center',
      headerTitleStyle: {
        fontSize: 25,
        color: 'tomato'
      },
      headerSearchBarOptions: {
        placeholder: 'Buscar',
        onChangeText: (e) => handleQuery(e.nativeEvent.text)
      }
    })
    setDataQuery(data.results)
  }, [data])
  if (loading) return (<ActivityIndicator />)
  if (error) return (<Text>Crash, Boom, Bang!</Text>)

  return dataQuery && (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        showsVerticalScrollIndicator={false}
        data={dataQuery}
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
  },
  list: {
    flex: 1,
    width: '100%',
  }
})

export default Home