import {ColoredPlaceholderTextInput, ImageBackground, Keyboard, SafeAreaView, FlatList, TextInput, Platform, useRef,KeyboardAvoidingView, Regular, Medium, Bold, useFonts, StyleSheet,Text,View,Button, TouchableOpacity,Image, React, useState, useEffect, colors, BlueButton, WhiteButton, useTranslation, useNavigation, StackNavigationProp, RootStackParamList, AppLoading} from '../imports';
import EStyleSheet from 'react-native-extended-stylesheet';


type FriendSearchScreenProp = StackNavigationProp<RootStackParamList, 'FriendSearch'>;


const Email = () => {
  const { t, i18n } = useTranslation();
  const navigation = useNavigation<FriendSearchScreenProp>();

  const data = [
    { id: '1', name: 'Alice', points: '500 pts', image: require('../assets/person1.png') },
    { id: '2', name: 'Bob', points: '750 pts', image: require('../assets/person2.png') },
    { id: '3', name: 'Charlie', points: '300 pts', image: require('../assets/person3.png') },
    { id: '4', name: 'David', points: '900 pts', image: require('../assets/person4.png') },
    { id: '5', name: 'Eva', points: '600 pts', image: require('../assets/person5.png') },
    { id: '6', name: 'Frank', points: '450 pts', image: require('../assets/person6.png') },
    { id: '7', name: 'Grace', points: '800 pts', image: require('../assets/person7.png') },
    { id: '8', name: 'Henry', points: '350 pts', image: require('../assets/person8.png') },
    { id: '9', name: 'Ivy', points: '550 pts', image: require('../assets/person1.png') },
    { id: '10', name: 'Jack', points: '700 pts', image: require('../assets/person2.png') },
    { id: '11', name: 'Kate', points: '400 pts', image: require('../assets/person3.png') },
    { id: '12', name: 'Liam', points: '850 pts', image: require('../assets/person4.png') },
    { id: '13', name: 'Mia', points: '250 pts', image: require('../assets/person5.png') },
    { id: '14', name: 'Noah', points: '950 pts', image: require('../assets/person6.png') },
    { id: '15', name: 'Olivia', points: '600 pts', image: require('../assets/person7.png') },
    { id: '16', name: 'Peter', points: '400 pts', image: require('../assets/person8.png') },
    { id: '17', name: 'Quinn', points: '550 pts', image: require('../assets/person1.png') },
    { id: '18', name: 'Ryan', points: '700 pts', image: require('../assets/person2.png') },
    { id: '19', name: 'Sophia', points: '350 pts', image: require('../assets/person3.png') },
    // Add more card items as needed
  ];
  

  const renderCard = ({ item }) => {
    return (
      <TouchableOpacity>
        <View style={styles.card}>
          <Image source={item.image} style={styles.cardImage} />
          <View>
            <Text style={styles.cardName}>{item.name}</Text>
            <Text style={styles.cardPTS}>{item.points}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };


  return (
    useFonts({
      Regular,
      Medium,
      Bold
    }), 
    <SafeAreaView style={styles.container}>
        <View style={styles.main}>
          <View style={styles.topMenu}>
            <View style={styles.input}>
              <Image source={require('../assets/search.png')} style={{width: 25, height: 25, marginLeft: 5}} />
              <TextInput placeholder={t("FriendSearch.search")} placeholderTextColor='#8E8E92' style={styles.textInput}></TextInput> 
            </View>
            <Text onPress={Keyboard.dismiss} style={styles.cancel}>{t("FriendSearch.cancel")}</Text>
          </View>
          <View style={styles.underline} />
          {/* <View style={styles.cardContainer}>

          </View> */}
          <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          numColumns={1}
          renderItem={renderCard}
          // contentContainerStyle={styles.scrollMenu}
          style={styles.scrollMenu}
        />
        </View>
    </SafeAreaView>
  )
}

export default Email

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
      },
    main: {
        width: '100%',
        height: '100%',
        // backgroundColor: 'red',
        alignItems: 'center'
    },
    topMenu:{
      width: '90%',
      height: 50,
      // backgroundColor: 'yellow',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    input:{
      flexDirection: 'row',
      width: '82%',
      height: '75%',
      backgroundColor: '#EFEFEF',
      alignItems: 'center',
      borderRadius: 10
    },
    textInput:{
      width: '70%',
      marginLeft: 10,
      fontSize: 18,
      fontFamily: 'Regular',
    },
    cancel:{
      marginRight: '2%',
      '@media ios and (width: 393) and (height: 852)': {
        marginRight: '-2%'
      },
      '@media ios and (width: 375) and (height: 812)': {
        marginRight: '-2%'
      },
      fontSize: 18,
      fontFamily: 'Regular',
    },
    underline: {
      height: 1,
      backgroundColor: '#DBDBDB',
      width: '100%',
      marginBottom: 5
      
    },
    scrollMenu:{
      marginTop: 20,
      width: '90%'
    },
    card:{
      width: '100%',
      // backgroundColor: 'green',
      marginBottom: 15,
      height: 55,
      flexDirection: 'row',
      alignItems: 'center'
    },
    cardImage:{
      width: 55,
      height: 55,
      borderRadius: 50,
    },
    cardName:{
      fontFamily: 'Bold',
      fontSize: 16,
      marginLeft: 20

    },
    cardPTS:{
      fontFamily: 'Regular',
      fontSize: 14,
      marginLeft: 20
    }
})