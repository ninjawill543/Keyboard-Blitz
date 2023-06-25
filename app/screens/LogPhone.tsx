import React, { useEffect, useRef } from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, Platform, TextInput, TouchableOpacity, Image } from 'react-native';
import BlueButton from '../components/BlueButton';
import colors from '../colors'
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from './RootStackParams';
import {useNavigation} from '@react-navigation/native';
import {
  useFonts,
  Roboto_400Regular as Regular,
  Roboto_500Medium as Medium,
  Roboto_700Bold as Bold,
} from '@expo-google-fonts/roboto';
import "../locales/index";
import { useTranslation } from "react-i18next";

type LogPhoneScreenProp = StackNavigationProp<RootStackParamList, 'LogPhone'>;

const LogPhone = () => {
  const { t, i18n } = useTranslation(); // destructure i18n here
  const navigation = useNavigation<LogPhoneScreenProp>();
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
          {/* <Text style={styles.title}>Enter your phone number </Text> */}
          <Text style={styles.title}>{t("Phone.title")} </Text>
          <Text style={styles.littleText}>{t("Phone.desc")}</Text>
          <Text style={styles.phoneText}>{t("Phone.num")} *</Text>
          <View style={styles.inputContainer}>
            <TouchableOpacity style={styles.country}>
              <Image source={require('../assets/france.png')} style={styles.flag}/>  
              <Text style={styles.countryText}>+33</Text>
            </TouchableOpacity>
            <View style={styles.lineContainer}>
              <TextInput
                ref={textInputRef}
                style={styles.textInput}
                keyboardType="phone-pad"
                placeholder={t("Phone.num")}
                placeholderTextColor='#C2D4F2'
              />
              <View style={styles.underline} />
            </View>
          </View>
        </View>
        <View style={styles.bottom}>
          <BlueButton buttonText={t("Continue")} bottomPadding={36} onPress={() => navigation.navigate('LogCode')}/>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default LogPhone;

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
    width: '90%'
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
    marginBottom: '7.36%'
    
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
    width: '90%'
  },
  underline: {
    height: 1,
    backgroundColor: 'black',
    width: '90%'
  },
  lineContainer:{
    flexDirection: 'column', 
    width: '90%', 
    marginLeft: 25
  }
});