import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import colors from '../colors'
import {
  useFonts,
  Roboto_400Regular as Regular,
  Roboto_500Medium as Medium,
  Roboto_700Bold as Bold,
} from '@expo-google-fonts/roboto';

const WhiteButton = ({ buttonText, bottomPadding, onPress }) => {
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
    <TouchableOpacity style={buttonStyle} onPress={onPress}>
      <Text style={styles.buttonText}>{buttonText}</Text>
    </TouchableOpacity>
  );
};
export default WhiteButton;

const styles = StyleSheet.create({
    mainButton:{
        width: '100%',
        height: 54,
        backgroundColor: colors.four,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: colors.one
    },
    buttonText:{
        color: colors.one,
        fontFamily: 'Bold',
        fontSize: 17
    
    }
})