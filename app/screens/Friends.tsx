import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Friends = () => {
  return (
    <View style={styles.container}>
        <View style={styles.main}></View>
    </View>
  )
}

export default Friends

const styles = StyleSheet.create({
    container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
      },
    main: {
        width: '90%',
        height: '100%',
        backgroundColor: 'red'
    }
})