import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import colors from '../colors'
import {
  useFonts,
  Roboto_400Regular as Regular,
  Roboto_500Medium as Medium,
  Roboto_700Bold as Bold,
} from '@expo-google-fonts/roboto';

const BlueButton = ({ buttonText, bottomPadding, onPress, disabled }) => {
  const buttonStyle = {
    ...styles.mainButton,
    marginBottom: bottomPadding,
  };

  return (
    useFonts({
      Regular,
      Medium,
      Bold
    }),
    <TouchableOpacity style={buttonStyle} onPress={onPress} disabled={disabled}>
      <Text style={styles.buttonText}>{buttonText}</Text>
    </TouchableOpacity>
  );
};
export default BlueButton;

const styles = StyleSheet.create({
    mainButton:{
        width: '100%',
        // height: '5.8%',
        height: 54,
        backgroundColor: colors.one,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText:{
        color: colors.four,
        fontFamily: 'Bold',
        fontSize: 17
    
    }
})