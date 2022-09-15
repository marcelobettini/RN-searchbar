import { StyleSheet, View, Text, Image, TouchableHighlight, Linking } from 'react-native'
import React, { useState } from 'react'


const User = ({ user }) => {
  const [less, setLess] = useState(true)
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <View style={{ flex: 1 }}>
          <Text style={styles.name}>{user.name.first}</Text>
          <Text style={styles.name}>{user.name.last}</Text>
        </View>
        <Image style={styles.thumb} source={{ uri: user.picture.thumbnail }} />
      </View>
      <View style={styles.textBlock}>

        <Text onPress={() => { Linking.openURL(`tel:${user.cell}`); }} style={[styles.info, styles.phone]}>{user.cell}</Text>
        <Text onPress={() => { Linking.openURL(`mailto:${user.cell}`); }} style={styles.info}>{user.email}</Text>
        <TouchableHighlight onPress={() => setLess(!less)}>
          <Text numberOfLines={less ? 1 : 3} ellipsizeMode='tail' style={styles.info}>{user.location.street.name} {user.location.street.number} {user.location.street.name}  {user.location.street.number}</Text>
        </TouchableHighlight>
        <Text style={styles.info}>{user.location.city} / {user.location.country}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'rgb(220, 190, 239)',
    padding: 20,
    marginVertical: 5,
    marginHorizontal: 5,
    borderRadius: 10
  },
  thumb: {
    width: 80,
    height: 80,
    borderRadius: 50,
    marginRight: 20
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    borderBottomColor: 'grey',
    paddingBottom: 10,
    borderBottomWidth: 1
  },
  textBlock: {
    flexGrow: 2,
    paddingHorizontal: 10,
  },
  name: {
    fontSize: 24,
    textAlign: 'center'
  },
  info: {
    fontSize: 18,
    textAlign: 'left'
  },
  phone: {
    fontWeight: '800',
    marginVertical: 5,

  }
})
export default User