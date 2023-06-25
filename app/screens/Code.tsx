import React, { useEffect, useRef } from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, Platform, TextInput, TouchableOpacity, Image } from 'react-native';
import BlueButton from '../components/BlueButton';
import colors from '../colors'
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from './RootStackParams';
import {
  useFonts,
  Roboto_400Regular as Regular,
  Roboto_500Medium as Medium,
  Roboto_700Bold as Bold,
} from '@expo-google-fonts/roboto';

type CodeScreenProp = StackNavigationProp<RootStackParamList, 'Code'>;


const Code = () => {
  const navigation = useNavigation<CodeScreenProp>();
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
        <View style={styles.top}>
          <Text style={styles.title}>Enter OTP Code </Text>
          <Text style={styles.littleText}>Enter the OTP code we sent via SMS to your registered phone number +330769232441</Text>
          <Text style={styles.phoneText}>OTP *</Text>
          <View style={styles.inputContainer}>
            <View style={styles.lineContainer}>
              <TextInput
                ref={textInputRef}
                style={styles.textInput}
                keyboardType="phone-pad"
                placeholder='Code'
                placeholderTextColor='#C2D4F2'
              />
              <View style={styles.underline} />
            </View>
          </View>
        </View>
        <View style={styles.bottom}>
          <BlueButton buttonText={'Continue'} bottomPadding={36} onPress={() => navigation.navigate('Name')}/>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Code;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  main: {
    width: '90%',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'space-between',
    // backgroundColor: 'red',
  },
  top:{
    marginTop: '25%',
    width: '100%'
  },
  bottom:{
    
  },
  textInput: {
    height: 37,
    fontSize: 18,
    fontFamily: 'Regular',
  },
  littleText:{
    fontSize: 16,
    fontFamily: 'Regular',
    textAlign: 'left',
    marginBottom: '7.36%',
    
  },
  phoneText:{
    fontSize: 14,
    fontFamily: 'Medium',
    fontWeight: '500',
    textAlign: 'left',
    marginBottom: '7.36%'
    
  },
  title:{
    fontSize: 30,
    fontFamily: 'Bold',
    textAlign: 'left',
    marginBottom: '6%',
  },
  country:{
    backgroundColor: 'rgba(00, 00, 00, 0.05)',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.two,
    marginBottom: '20%',
    // marginLeft: '66%',
    width: 101,
    height: 46,
    flexDirection: 'row'
  },
  countryText:{
    fontSize: 22,
    fontFamily: 'Regular',
    textAlign: 'center',
    marginTop: 4
  },
  flag:{
    width: 22.25,
    height: 21,
    marginRight: 10
  },
  inputContainer:{
    flexDirection: 'row',
    width: '100%'
  },
  underline: {
    height: 1,
    backgroundColor: 'black',
    width: '100%'
  },
  lineContainer:{
    flexDirection: 'column', 
    width: '100%', 
    // marginLeft: 
  }
});