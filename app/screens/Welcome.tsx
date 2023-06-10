import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import colors from '../colors'
import BlueButton from '../components/BlueButton'

const Welcome = () => {
  return (
    <View style={styles.container}>
        <View style={styles.main}>
            <BlueButton buttonText={'hi'} />
        </View>
    </View>
  )
}

export default Welcome

const styles = StyleSheet.create({
    container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
      },
    main: {
        width: '90%',
        height: '100%',
        // backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
    },

})