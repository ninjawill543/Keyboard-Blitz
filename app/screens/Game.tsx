import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, Platform, TextInput, TouchableOpacity, Image, ImageBackground } from 'react-native';
import BlueButton from '../components/BlueButton';
import colors from '../colors'
import AppLoading from 'expo-app-loading'
import {
  useFonts,
  Roboto_400Regular as Regular,
  Roboto_500Medium as Medium,
  Roboto_700Bold as Bold,
} from '@expo-google-fonts/roboto';

const Game = () => {
  const left = 250;
  const right = -70;
  const textInputRef = useRef(null);

  useEffect(() => {
    if (textInputRef.current) {
      textInputRef.current.focus();
    }
  }, []);
  
  const [text, setText] = useState('');

  let [fontsLoaded] = useFonts({
    Regular,
    Medium,
    Bold
  });
  if(fontsLoaded){
    return(
      <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <View style={styles.main}>
          <View style={styles.scoreContainer}>
            <View style={{marginHorizontal: 60,flexDirection: 'column', alignItems: 'center'}}>
              {/* <Text style={styles.name}>b23</Text> */}
              <ImageBackground source={require('../assets/track.png')} style={{width: 46, height: 330, alignItems: 'center', justifyContent: 'flex-start'}} >
                <Image source={require('../assets/car.png')} style={{width: 150, height: 150, marginTop: left}} />           
              </ImageBackground>        
            </View>
            <View style={{marginHorizontal: 60,flexDirection: 'column', alignItems: 'center'}}>
              {/* <Text style={styles.name}>Me</Text> */}
              <ImageBackground source={require('../assets/track.png')} style={{width: 46, height: 330, alignItems: 'center', justifyContent: 'flex-start'}} >
                <Image source={require('../assets/car.png')} style={{width: 150, height: 150, marginTop: right}} />           
              </ImageBackground>        
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
                autoCapitalize="none" 
                returnKeyType="next" 
                value={text}
                onChangeText={setText}
                autoCorrect={false}
                
              />
          </View>
      </View>
    </KeyboardAvoidingView>
    )
  } else

  return (
    <AppLoading />  //AppLoading will only be dispalyed while fonts loaded is false

    
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
    // backgroundColor: 'red',
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
    // backgroundColor: 'yellow',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
  },
  name:{
    fontSize: 32,
    fontFamily: 'Bold',
  }
});