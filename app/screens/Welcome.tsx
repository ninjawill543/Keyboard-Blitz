import {Regular, Medium, Bold, useFonts, StyleSheet,Text,View,Button, TouchableOpacity,Image, React, useState, useEffect, colors, BlueButton, WhiteButton, useTranslation, useNavigation, StackNavigationProp, RootStackParamList, AppLoading} from '../imports';
import EStyleSheet from 'react-native-extended-stylesheet';
type WelcomeScreenProp = StackNavigationProp<RootStackParamList, 'Welcome'>;
import Pro from '../media.json'


const Welcome = () => {
  const navigation = useNavigation<WelcomeScreenProp>();

  const { t, i18n } = useTranslation(); // destructure i18n here

  const [isButton1Visible, setButton1Visible] = useState(true);
  const [isButton2Visible, setButton2Visible] = useState(false);

  const toggleButtons = () => {
    setButton1Visible(!isButton1Visible) ;
    if (isButton1Visible){
      i18n.changeLanguage('fr');
    }else{
      i18n.changeLanguage('en');
    }
    setButton2Visible(!isButton2Visible);
  };
  let [fontsLoaded] = useFonts({
    Regular,
    Medium,
    Bold,
  });


  if (fontsLoaded) {
      return (
    (
      <View style={styles.container}>
        <View style={styles.main}>
          <View>
            {isButton1Visible && (
              <TouchableOpacity style={styles.language} onPress={toggleButtons}>
                <Image
                  source={require("../assets/language.png")}
                  style={styles.languageSign}
                />
                <Text style={styles.languageText}>English</Text>
              </TouchableOpacity>
            )}
            {isButton2Visible && (
              <TouchableOpacity style={styles.language} onPress={toggleButtons}>
                <Image
                  source={require("../assets/language.png")}
                  style={styles.languageSign}
                />
                <Text style={styles.languageText}>Français</Text>
              </TouchableOpacity>
            )}
          </View>
          <Image source={require("../assets/home.png")} style={styles.image} />
          <Text style={styles.title}>{t("Welcome.title")}</Text>
          <Text style={styles.littleText}>
          {t("Welcome.desc")}
          </Text>
          <BlueButton buttonText={t("Welcome.log")} bottomPadding={"6.67%"} onPress={() => navigation.navigate('LogPhone')}/>
          <WhiteButton
            buttonText={t("Welcome.sign")}
            bottomPadding={"26%"}
            onPress={() => navigation.navigate('Phone')}
          />
        </View>
      </View>
    )
  );
  }else {
    return <AppLoading />;
  }

};

export default Welcome;

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  main: {
    width: "90%",
    height: "100%",
    // backgroundColor: 'red',
    alignItems: "center",
    justifyContent: "flex-end",
    // paddingBottom: '26%',
  },
  littleText: {
    fontSize: 18,
    fontFamily: "Regular",
    textAlign: "center",
    marginBottom: "7.36%",
  },
  title: {
    fontSize: 32,
    fontFamily: "Bold",
    textAlign: "center",
    marginBottom: "7.8%",
  },
  image: {
    // width: 362,
    width: '22rem',
    '@media ios and (width: 375) and (height: 812)': {
      width: '20rem',
      height: '16.5rem'
    },
    // aspectRatio: 10/8,
    // height: 291.77,
    height: '18rem',
    alignSelf: "flex-start",
    marginBottom: "17.48%",
  },
  language: {
    backgroundColor: colors.four,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: colors.two,
    marginBottom: "20%",
    '@media ios and (width: 393) and (height: 852)': {
      marginBottom: '10%',
    },
    '@media ios and (width: 375) and (height: 812)': {
      marginBottom: '10%',
    },
    marginLeft: "66%",
    width: 131,
    height: 41,
    flexDirection: "row",
  },
  languageText: {
    fontSize: 18,
    fontFamily: "Regular",
    textAlign: "center",
  },
  languageSign: {
    width: 22.25,
    height: 21,
    marginRight: 10,
  },
});
