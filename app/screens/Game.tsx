import React, { useEffect, useRef } from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, Platform, TextInput, TouchableOpacity, Image } from 'react-native';
import BlueButton from '../components/BlueButton';
import colors from '../colors'
import {
  useFonts,
  Roboto_400Regular as Regular,
  Roboto_500Medium as Medium,
  Roboto_700Bold as Bold,
} from '@expo-google-fonts/roboto';

const Game = () => {
  const textInputRef = useRef(null);

  useEffect(() => {
    textInputRef.current.focus();
  }, []);

  return (
    useFonts({
      Regular,
      Medium,
      Bold
    }), 
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <View style={styles.main}>
          <View style={styles.scoreContainer}>
            <View style={{marginHorizontal: 60}}>
              <Image source={require('../assets/track.png')} style={{width: 46, height: 330, }}></Image>          
              <Image source={require('../assets/car.png')} style={{width: 150, height: 150, }} />           
            </View>
            <View style={{marginHorizontal: 60}}>
              <Image source={require('../assets/track.png')} style={{width: 46, height: 330}} />           
              <Image source={require('../assets/car.png')} style={{width: 150, height: 150}} />           
            </View>
          </View>
          <View style={styles.inputContainer}>
              <TextInput
                ref={textInputRef}
                style={styles.textInput}
                placeholder='Hypertension'
                placeholderTextColor='#000000'
                underlineColorAndroid="transparent"
                blurOnSubmit={false} 
                autoCorrect={false} 
                autoCapitalize="none" 
                returnKeyType="next" 
                
              />
          </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Game;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  main: {
    width: '90%',
    height: '100%',
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  textInput: {
    height: 37,
    fontSize: 32,
    fontFamily: 'Bold',
  },
  inputContainer:{
    // backgroundColor: 'yellow',
    marginBottom: 36
  },
  scoreContainer:{
    marginBottom:36,
    backgroundColor: 'yellow',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
  }
});