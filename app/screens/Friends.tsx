import {ColoredPlaceholderTextInput, ImageBackground, Keyboard, SafeAreaView, FlatList, TextInput, Platform, useRef,KeyboardAvoidingView, Regular, Medium, Bold, useFonts, StyleSheet,Text,View,Button, TouchableOpacity,Image, React, useState, useEffect, colors, BlueButton, WhiteButton, useTranslation, useNavigation, StackNavigationProp, RootStackParamList, AppLoading} from '../imports';
import { FIREBASE_AUTH } from '../config/firebase'
import EStyleSheet from 'react-native-extended-stylesheet';


type FriendsScreenProp = StackNavigationProp<RootStackParamList, 'Friends'>;


const Friends = () => {
  const { t, i18n } = useTranslation();
  const navigation = useNavigation<FriendsScreenProp>();
  const data = [
    { id: '1', name: 'Helen', points: '1058 pts', image: require('../assets/person1.png') },
    { id: '2', name: 'Helen', points: '1058 pts', image: require('../assets/person2.png') },
    { id: '3', name: 'Helen', points: '1058 pts', image: require('../assets/person3.png') },
    { id: '4', name: 'Helen', points: '1058 pts', image: require('../assets/person4.png') },
    { id: '5', name: 'Helen', points: '1058 pts', image: require('../assets/person5.png') },
    { id: '6', name: 'Helen', points: '1058 pts', image: require('../assets/person6.png') },
    { id: '7', name: 'Helen', points: '1058 pts', image: require('../assets/person7.png') },
    { id: '8', name: 'Helen', points: '1058 pts', image: require('../assets/person8.png') },
    { id: '9', name: 'Helen', points: '1058 pts', image: require('../assets/person1.png') },
    { id: '10', name: 'Helen', points: '1058 pts', image: require('../assets/person2.png') },
    { id: '11', name: 'Helen', points: '1058 pts', image: require('../assets/person3.png') },
    { id: '12', name: 'Helen', points: '1058 pts', image: require('../assets/person4.png') },
    { id: '13', name: 'Helen', points: '1058 pts', image: require('../assets/person5.png') },
    { id: '14', name: 'Helen', points: '1058 pts', image: require('../assets/person6.png') },
    { id: '15', name: 'Helen', points: '1058 pts', image: require('../assets/person7.png') },
    { id: '16', name: 'Helen', points: '1058 pts', image: require('../assets/person8.png') },
    { id: '17', name: 'Helen', points: '1058 pts', image: require('../assets/person1.png') },
    { id: '18', name: 'Helen', points: '1058 pts', image: require('../assets/person2.png') },
    { id: '19', name: 'Helen', points: '1058 pts', image: require('../assets/person3.png') },
    // Add more card items as needed
  ];

  const renderCard = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate('Game')}>
        <View style={styles.card}>
          <Image source={item.image} style={styles.cardImage} />
          <Text style={styles.cardText}>{item.name}</Text>
          <Text style={styles.cardText}>{item.points}</Text>
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
    <View style={styles.container}>
      <View style={styles.main}>
        <View style={styles.topMenu}>
          <TouchableOpacity onPress={() => FIREBASE_AUTH.signOut()}>
            <Image source={require('../assets/lh.png')} style={{width: 64, height: 64}} /> 
          </TouchableOpacity>
          <Text style={styles.title}>{t("Friends.friends")}</Text>
          <TouchableOpacity onPress={() => navigation.navigate('FriendSearch')}>
            <Image source={require('../assets/plus.png')} style={{width: 28, height: 28, marginLeft: 36}} /> 
          </TouchableOpacity>
        </View>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          numColumns={2}
          renderItem={renderCard}
          contentContainerStyle={styles.scrollMenu}
        />
      </View>
    </View>
  )
}

export default Friends

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  main: {
    width: '90%',
    height: '100%',
    // backgroundColor: 'red'
  },
  topMenu:{
    width: '100%',
    height: 100,
    // backgroundColor: 'blue',
    marginTop: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  title:{
    fontSize: 30,
    fontFamily: 'Medium',
  },
  scrollMenu:{
    marginTop: 20,
    // justifyContent: 'center',
    alignItems: 'center',

  },
  card:{
    // flex: 1,
    marginHorizontal: 30,
    '@media ios and (width: 393) and (height: 852)': {
      marginHorizontal: 20,
    },
    '@media ios and (width: 375) and (height: 812)': {
      marginHorizontal: 15,
      marginBottom: 30,
    },
    "@media ios and (width: 390) and (height: 844)": {
      marginHorizontal: 18,
      marginBottom: 30

    },
    marginBottom: 50,
    height: 188,
    // backgroundColor: 'yellow',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  cardImage:{
    width: 150,
    height: 150,
    borderRadius: 25,
  },
  cardText:{
    fontFamily: 'Bold',
    fontSize: 16
  }
})
