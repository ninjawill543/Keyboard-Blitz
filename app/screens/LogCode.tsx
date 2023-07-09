import {
  ColoredPlaceholderTextInput,
  ImageBackground,
  Keyboard,
  SafeAreaView,
  FlatList,
  TextInput,
  Platform,
  useRef,
  KeyboardAvoidingView,
  Regular,
  Medium,
  Bold,
  useFonts,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Image,
  React,
  useState,
  useEffect,
  colors,
  BlueButton,
  WhiteButton,
  useTranslation,
  useNavigation,
  StackNavigationProp,
  RootStackParamList,
  AppLoading,
} from "../imports";
import { ActivityIndicator } from "react-native";
import { FIREBASE_APP, FIREBASE_AUTH } from "../config/firebase";
import {
  getAuth,
  PhoneAuthProvider,
  signInWithCredential,
} from "firebase/auth";
import {
  FirebaseRecaptchaVerifierModal,
  FirebaseRecaptchaBanner,
} from "expo-firebase-recaptcha";
import { RouteProp } from '@react-navigation/native';


type LogCodeScreenProp = StackNavigationProp<RootStackParamList, 'LogCode'>;

const LogCode = ({ route }: { route: RouteProp<RootStackParamList, 'LogCode'> }) => {  
  const { verificationId } = route.params;
  const app = FIREBASE_APP;
  const auth = FIREBASE_AUTH;
  const recaptchaVerifier = useRef(null);

  // const [verificationId, setVerificationID] = useState("");
  const [verificationCode, setVerificationCode] = useState("");

  const firebaseConfig = app ? app.options : undefined;
  const [info, setInfo] = useState("");
  const attemptInvisibleVerification = false;

  const { t, i18n } = useTranslation();
  const navigation = useNavigation<LogCodeScreenProp>();
  const textInputRef = useRef(null);

  const handleVerifyVerificationCode = async () => {
    try {
      const credential = PhoneAuthProvider.credential(
        verificationId,
        verificationCode
      ); // get the credential
      await signInWithCredential(auth, credential); // verify the credential
      setInfo("Success: Phone authentication successful"); // if OK, set the message
      navigation.navigate("Friends"); // navigate to the welcome screen
    } catch (error) {
      alert(error.message);
    }
  };

  // useEffect(() => {
  //   textInputRef.current.focus();
  // }, []);

  return (
    useFonts({
      Regular,
      Medium,
      Bold,
    }),
    (
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <FirebaseRecaptchaVerifierModal
          ref={recaptchaVerifier}
          firebaseConfig={firebaseConfig}
        />

        

        {
          <View>
            <View style={styles.main}>
              <View style={styles.top}>
                <Text style={styles.title}>{t("Code.title")}</Text>
                <Text style={styles.littleText}>{t("Code.desc")}</Text>
                <Text style={styles.phoneText}>Code *</Text>
                <View style={styles.inputContainer}>
                  <View style={styles.lineContainer}>
                    <TextInput
                      ref={textInputRef}
                      style={styles.textInput}
                      keyboardType="phone-pad"
                      placeholder="Code"
                      placeholderTextColor="#C2D4F2"
                      // editable={!!verificationId}
                      onChangeText={setVerificationCode}
                    />
                    <View style={styles.underline} />
                  </View>
                </View>
              </View>
              <View style={styles.bottom}>
                <BlueButton
                  buttonText={t("Continue")}
                  bottomPadding={36}
                  disabled={!verificationCode}
                  onPress={() => handleVerifyVerificationCode()}
                />
              </View>
            </View>
          </View>
        }

        {attemptInvisibleVerification && <FirebaseRecaptchaBanner />}
      </KeyboardAvoidingView>
    )
  );
};

export default LogCode;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  main: {
    width: "90%",
    height: "100%",
    flexDirection: "column",
    justifyContent: "space-between",
    // backgroundColor: 'red',
  },
  top: {
    marginTop: "25%",
    width: "100%",
  },
  bottom: {},
  textInput: {
    height: 37,
    fontSize: 18,
    fontFamily: "Regular",
  },
  littleText: {
    fontSize: 16,
    fontFamily: "Regular",
    textAlign: "left",
    marginBottom: "7.36%",
  },
  phoneText: {
    fontSize: 14,
    fontFamily: "Medium",
    fontWeight: "500",
    textAlign: "left",
    marginBottom: "7.36%",
  },
  title: {
    fontSize: 30,
    fontFamily: "Bold",
    textAlign: "left",
    marginBottom: "6%",
  },
  country: {
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
  countryText: {
    fontSize: 22,
    fontFamily: "Regular",
    textAlign: "center",
    marginTop: 4,
  },
  flag: {
    width: 22.25,
    height: 21,
    marginRight: 10,
  },
  inputContainer: {
    flexDirection: "row",
    width: "100%",
  },
  underline: {
    height: 1,
    backgroundColor: "black",
    width: "100%",
  },
  lineContainer: {
    flexDirection: "column",
    width: "100%",
    // marginLeft:
  },
});
