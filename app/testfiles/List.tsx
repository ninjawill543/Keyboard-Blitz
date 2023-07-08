import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FIREBASE_AUTH } from '../config/firebase'

const List = ({navigation}: any) => {
  return (
    <View style={{marginTop: 100}}>
      <Button onPress={() => FIREBASE_AUTH.signOut()} title='Logout'/>
    </View>
  )
}

export default List

const styles = StyleSheet.create({})