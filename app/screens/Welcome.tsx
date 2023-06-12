import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import colors from '../colors'
import BlueButton from '../components/BlueButton'
import WhiteButton from '../components/WhiteButton'

const Welcome = () => {
  return (
    <View style={styles.container}>
        <View style={styles.main}>
            <BlueButton buttonText={'Log In'} bottomPadding={'6.67%'}/>
            <WhiteButton buttonText={"I'm new, sign me up"} bottomPadding={'26%'}/>
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
        justifyContent: 'flex-end',
        // paddingBottom: '26%',

    },

})