import React, { useEffect, useRef } from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, Platform, TextInput, TouchableOpacity, Image } from 'react-native';
import BlueButton from '../components/BlueButton';
import colors from '../colors'


const Phone = () => {
  const textInputRef = useRef(null);

  useEffect(() => {
    textInputRef.current.focus();
  }, []);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <View style={styles.main}>
        <View style={styles.top}>
          <Text style={styles.title}>Enter your phone number </Text>
          <Text style={styles.littleText}>You can login or make an account if you are new to Racer</Text>
          <Text style={styles.phoneText}>Phone Number *</Text>
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
                placeholder='Phone Number'
              />
              <View style={styles.underline} />
            </View>
          </View>
        </View>
        <View style={styles.bottom}>
          <BlueButton buttonText={'Continue'} bottomPadding={36}/>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Phone;

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
  },
  littleText:{
    fontSize: 16,
    fontFamily: 'Al Nile',
    textAlign: 'left',
    marginBottom: '7.36%'
    
  },
  phoneText:{
    fontSize: 12,
    fontFamily: 'AlNile',
    fontWeight: '500',
    textAlign: 'left',
    marginBottom: '7.36%'
    
  },
  title:{
    fontSize: 28,
    fontFamily: 'AlNile-Bold',
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
    fontSize: 28,
    fontFamily: 'Al Nile',
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
