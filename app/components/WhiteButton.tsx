import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import colors from '../colors'

const WhiteButton = ({ buttonText, bottomPadding }) => {
  const buttonStyle = {
    ...styles.mainButton,
    marginBottom: bottomPadding,
  };

  return (
    <TouchableOpacity style={buttonStyle}>
      <Text style={styles.buttonText}>{buttonText}</Text>
    </TouchableOpacity>
  );
};
export default WhiteButton;

const styles = StyleSheet.create({
    mainButton:{
        width: '100%',
        height: '5.8%',
        backgroundColor: colors.four,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: colors.one
    },
    buttonText:{
        color: colors.one,
        fontFamily: 'AlNile-Bold',
        fontSize: 15
    
    }
})