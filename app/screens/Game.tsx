import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, Platform, Image, ImageBackground } from 'react-native';
import ColoredPlaceholderTextInput from '../components/ColoredText';
import AppLoading from 'expo-app-loading';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from './RootStackParams';
import {
  useFonts,
  Roboto_400Regular as Regular,
  Roboto_500Medium as Medium,
  Roboto_700Bold as Bold,
} from '@expo-google-fonts/roboto';
type GameScreenProp = StackNavigationProp<RootStackParamList, 'Game'>;


const Game = () => {
  const navigation = useNavigation<GameScreenProp>();
  const left = 250;
  const right = -60;
  const textInputRef = useRef(null);

  const [text, setText] = useState('');

  let [fontsLoaded] = useFonts({
    Regular,
    Medium,
    Bold,
  });

  useEffect(() => {
    if (textInputRef.current) {
      textInputRef.current.focus();
    }
  }, []);

  if (fontsLoaded) {
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}
      >
        <View style={styles.main}>
            {/* <View style={{flexDirection: 'row'}}>
              <Text style={styles.nameText}>bob123</Text>
              <Text style={styles.nameText}>me</Text>
            </View> */}
          <View style={styles.scoreContainer}>

            <View style={{ marginHorizontal: 60, flexDirection: 'column', alignItems: 'center'}}>
              {/* <Text style={styles.nameText}>bob12ddd3</Text> */}
              <ImageBackground
                source={require('../assets/track.png')}
                style={{ width: 46, height: 330, alignItems: 'center', justifyContent: 'flex-start' }}
              >
                <Image source={require('../assets/car.png')} style={{ width: 150, height: 150, marginTop: left }} />
              </ImageBackground>
            </View>
            <View style={{ marginHorizontal: 60, flexDirection: 'column', alignItems: 'center' }}>
              {/* <Text style={styles.nameText}>me</Text> */}
              <ImageBackground
                source={require('../assets/track.png')}
                style={{ width: 46, height: 330, alignItems: 'center', justifyContent: 'flex-start' }}
              >
                <Image source={require('../assets/car.png')} style={{ width: 150, height: 150, marginTop: right }} />
              </ImageBackground>
            </View>
          </View>
          <View style={styles.inputContainer}>
            <ColoredPlaceholderTextInput text={text} setText={setText} />
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  } else {
    return <AppLoading />;
  }
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
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  inputContainer: {
    marginBottom: 0,
  },
  scoreContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    // backgroundColor: 'green'
  },
  nameText:{
    fontSize: 30, 
    marginBottom: 5, 
    marginHorizontal: 20,
    // color: 'white'
  }
});
