import { ActivityIndicator, Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState, useRef } from 'react'
import { FIREBASE_APP, FIREBASE_AUTH } from '../config/firebase';
import {getAuth,PhoneAuthProvider,signInWithCredential} from 'firebase/auth';
import {FirebaseRecaptchaVerifierModal,FirebaseRecaptchaBanner} from 'expo-firebase-recaptcha';


const SignInScreen = () => {
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
        setInfo('Success : Verification code has been sent to your phone'); // If Ok, show message.
    }catch(error){
        setInfo(`Error : ${error.message}`); // show the error
    }
};

const handleVerifyVerificationCode = async () => {
  try{
      const credential = PhoneAuthProvider.credential(verificationId,verificationCode); // get the credential
      await signInWithCredential(auth,credential); // verify the credential
      setInfo('Success: Phone authentication successful'); // if OK, set the message
      navigation.navigate("Welcome"); // navigate to the welcome screen
  }catch(error){
      setInfo(`Error : ${error.message}`); // show the error.
  }
}
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [loading, setLoading] = useState(false);
  // const auth = FIREBASE_AUTH;


  // const signIn = async () => {
  //   setLoading(true);
  //   try{
  //     const response = await signInWithEmailAndPassword(auth, email, password);
  //     console.log(response);
  //   }catch(error: any){
  //     console.log(error);
  //     alert('Sign in failed: ' + error.message);
  //   }finally{
  //     setLoading(false);
  //   }
  // }

  // const signUp = async () => {
  //   setLoading(true);
  //   try{
  //     const response = await createUserWithEmailAndPassword(auth, email, password);
  //     alert('Check your email!');
  //     console.log(response);
  //   }catch(error: any){
  //     console.log(error);
  //     alert('Sign up failed: ' + error.message);

  //   }finally{
  //     setLoading(false);
  //   }
  // }
  return (
  //   <View style={styles.container}>
  //     <TextInput style={styles.input} value={email} placeholder='Email' autoCapitalize='none' onChangeText={(text) => setEmail(text)}></TextInput>
  //     <TextInput style={styles.input} value={password} placeholder='Password' autoCapitalize='none' onChangeText={(text) => setPassword(text)} secureTextEntry={true}></TextInput>
  //     { loading ? ( <ActivityIndicator size="large" color="0000ff" /> ) : ( 
  //     <>
  //       <Button title='Login' onPress={() => signIn()} />
  //       <Button title='Sign Up' onPress={() => signUp()} />

  //     </>
  // )}
  //   </View>
  
  <View style={styles.container}>

        <FirebaseRecaptchaVerifierModal 
            ref={recaptchaVerifier}
            firebaseConfig={firebaseConfig}
        />

        {
            info && <Text style={styles.text}>{info}</Text>
        }

        { // show the phone number input field when verification id is not set.
            !verificationId && (
                <View>
                    <Text style={styles.text}>Enter the phone number</Text>

                        <TextInput
                            placeholder='+2547000000'
                            autoFocus
                            autoCompleteType='tel'
                            keyboardType='phone-pad'
                            textContentType='telephoneNumber'
                            onChangeText={ (phoneNumber) => setPhoneNumber(phoneNumber)}
                        />

                        <Button 
                            onPress={ () => handleSendVerificationCode()}
                            title= "Send Verification Code"
                            disabled={!phoneNumber}
                        />
                </View>
                
            )
            
        }

        {/* { // if verification id exists show the confirm code input field.
            verificationId && (
                <View>
                    <Text style={styles.text}>Enter the verification code</Text>

                    <TextInput
                        editable={!!verificationId}
                        placeholder= "123456"
                        onChangeText={setVerificationCode}
                    />

                    <Button
                        title= "Confirm Verification Code"
                        disabled={!verificationCode}
                        onPress = {() => handleVerifyVerificationCode()}
                    />
                </View>
            )
        } */}

        {attemptInvisibleVerification && <FirebaseRecaptchaBanner/>}
    </View>
)
}

export default SignInScreen;
// const styles = StyleSheet.create({
//   container:{
//     marginHorizontal: 20,
//     flex: 1,
//     justifyContent: 'center',
//   },
//   input:{
//     marginVertical: 4,
//     height: 50,
//     borderWidth: 1,
//     borderRadius: 4,
//     padding: 10,
//     backgroundColor: 'white'
//   }
// })
const styles = StyleSheet.create({
  text:{
      color: "#aaa"
  },
  container:{
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
  }
  })