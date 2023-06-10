import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import colors from '../colors'

const BlueButton = ({ buttonText }) => {
  return (
    <TouchableOpacity style={styles.mainButton} >
        <Text style={styles.buttonText}>{ buttonText }</Text>
    </TouchableOpacity>
  )
}

export default BlueButton

const styles = StyleSheet.create({
    mainButton:{
        width: '100%',
        height: '5%',
        backgroundColor: colors.one,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText:{
        color: colors.four,
        fontFamily: 'AlNile-Bold',
        fontSize: 15
    
    }
})