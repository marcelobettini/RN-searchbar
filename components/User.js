import { StyleSheet, View, Text, Image } from 'react-native'
import React from 'react'


const User = ({ user }) => {
  return (
    <View>
      <Image style={styles.thumb} source={{ uri: user.picture.thumbnail }} />
      <Text>{user.name.first} {user.name.last} </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  thumb: {
    width: 30,
    height: 30,
    borderRadius: 50
  }
})
export default User