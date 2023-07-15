import { ColoredPlaceholderTextInput, ImageBackground, Keyboard, SafeAreaView, FlatList, TextInput, Platform, useRef,KeyboardAvoidingView, Regular, Medium, Bold, useFonts, StyleSheet,Text,View,Button, TouchableOpacity,Image, React, useState, useEffect, colors, BlueButton, WhiteButton, useTranslation, useNavigation, StackNavigationProp, RootStackParamList, AppLoading} from '../imports';
import { ActivityIndicator} from 'react-native'
import { FIREBASE_APP, FIREBASE_AUTH } from '../config/firebase';
import {getAuth,PhoneAuthProvider,signInWithCredential} from 'firebase/auth';
import {FirebaseRecaptchaVerifierModal,FirebaseRecaptchaBanner} from 'expo-firebase-recaptcha';
import { RouteProp } from '@react-navigation/native';
import { Alert } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

type LogPhoneScreenProp = StackNavigationProp<RootStackParamList, 'LogPhone'>;


const SignInScreen = () => {
  const { t, i18n } = useTranslation(); // destructure i18n here
  const navigation = useNavigation<LogPhoneScreenProp>();
  const textInputRef = useRef(null);


  const app = FIREBASE_APP;
  const auth = FIREBASE_AUTH;
  const recaptchaVerifier = useRef(null);

  const [phoneNumber,setPhoneNumber] = useState('');
  const [verificationId,setVerificationID] = useState('');
  const [verificationCode,setVerificationCode] = useState('');

  const firebaseConfig = app ? app.options : undefined;
  const [info,setInfo] = useState("");
  const attemptInvisibleVerification = false;
  const handleSendVerificationCode = async () => {
    try{
        const phoneProvider = new PhoneAuthProvider(auth); // initialize the phone provider.
        const verificationId = await phoneProvider.verifyPhoneNumber(
            phoneNumber,
            recaptchaVerifier.current
        ); // get the verification id
        setVerificationID(verificationId); // set the verification id
        Alert.alert('Success', 'Verification code has been sent to your phone',)
    }catch(error){
      Alert.alert('Error', error.message.slice(22).slice(0, -2))
    }
};

const handleVerifyVerificationCode = async () => {
  try{
      const credential = PhoneAuthProvider.credential(verificationId,verificationCode); // get the credential
      await signInWithCredential(auth,credential); // verify the credential
      setInfo('Success: Phone authentication successful'); // if OK, set the message
      navigation.navigate("Friends"); // navigate to the welcome screen
  }catch(error){
    Alert.alert('Error', error.message.slice(22).slice(0, -2))
  }
}

  return (
    useFonts({
      Regular,
      Medium,
      Bold
    }), 
  

  <View style={styles.container}>

        <FirebaseRecaptchaVerifierModal 
            ref={recaptchaVerifier}
            firebaseConfig={firebaseConfig}
        />

        {/* {
            info && <Text style={styles.text}>{info}</Text>
        } */}

        { // show the phone number input field when verification id is not set.
            !verificationId && (
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
                onChangeText={ (phoneNumber) => setPhoneNumber(phoneNumber)}
                autoFocus
              />
              <View style={styles.underline} />
            </View>
          </View>
        </View>
        <View style={styles.bottom}>
          <BlueButton disabled={!phoneNumber} buttonText={t("Continue")} bottomPadding={36} onPress={ () => handleSendVerificationCode()}/>
        </View>
      </View>
    </KeyboardAvoidingView>
                
            )
            
        }

        { // if verification id exists show the confirm code input field.
            verificationId && (
              <KeyboardAvoidingView
              behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
              style={styles.container1}
            >
              <View style={styles.main1}>
                <View style={styles.top1}>
                  <Text style={styles.title1}>{t("Code.title")}</Text>
                  <Text style={styles.littleText1}>{t("Code.desc")} {phoneNumber}</Text>
                  <Text style={styles.phoneText1}>Code *</Text>
                  <View style={styles.inputContainer1}>
                    <View style={styles.lineContainer1}>
                      <TextInput
                        editable={!!verificationId}
                        ref={textInputRef}
                        style={styles.textInput1}
                        keyboardType="phone-pad"
                        placeholder='Code'
                        placeholderTextColor='#C2D4F2'
                        onChangeText={setVerificationCode}
                      />
                      <View style={styles.underline1} />
                    </View>
                  </View>
                </View>
                <View style={styles.bottom1}>
                  <BlueButton buttonText={t("Continue")} bottomPadding={36} disabled={!verificationCode}
                        onPress = {() => handleVerifyVerificationCode()}/>
                </View>
              </View>
            </KeyboardAvoidingView>
            )
        }

        {attemptInvisibleVerification && <FirebaseRecaptchaBanner/>}
    </View>
)
}

export default SignInScreen;

const styles = EStyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    main: {
      width: '90%',
      '@media ios and (width: 393) and (height: 852)': {
        width: '88%'
      },
      '@media ios and (width: 375) and (height: 812)': {
        width: '85%'
      },
      "@media ios and (width: 390) and (height: 844)": {
        width: '86%'
      },
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
    },
    container1: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    main1: {
      width: "90%",
      '@media ios and (width: 393) and (height: 852)': {
        width: '88%'
      },
      '@media ios and (width: 375) and (height: 812)': {
        width: '92%'
      },
      "@media ios and (width: 390) and (height: 844)": {
        width: '92%'
      },
      height: "100%",
      flexDirection: "column",
      justifyContent: "space-between",
      // backgroundColor: 'red',
    },
    top1: {
      marginTop: "25%",
      width: "100%",
    },
    bottom1: {},
    textInput1: {
      height: 37,
      fontSize: 18,
      fontFamily: "Regular",
    },
    littleText1: {
      fontSize: 16,
      fontFamily: "Regular",
      textAlign: "left",
      marginBottom: "7.36%",
    },
    phoneText1: {
      fontSize: 14,
      fontFamily: "Medium",
      fontWeight: "500",
      textAlign: "left",
      marginBottom: "7.36%",
    },
    title1: {
      fontSize: 30,
      fontFamily: "Bold",
      textAlign: "left",
      marginBottom: "6%",
    },
    country1: {
      backgroundColor: "rgba(00, 00, 00, 0.05)",
      borderRadius: 25,
      alignItems: "center",
      justifyContent: "center",
      borderWidth: 1,
      borderColor: colors.two,
      marginBottom: "20%",
      // marginLeft: '66%',
      width: 101,
      height: 46,
      flexDirection: "row",
    },
    countryText1: {
      fontSize: 22,
      fontFamily: "Regular",
      textAlign: "center",
      marginTop: 4,
    },
    flag1: {
      width: 22.25,
      height: 21,
      marginRight: 10,
    },
    inputContainer1: {
      flexDirection: "row",
      width: "100%",
    },
    underline1: {
      height: 1,
      backgroundColor: "black",
      width: "100%",
    },
    lineContainer1: {
      flexDirection: "column",
      width: "100%",
      // marginLeft:
    },
  });