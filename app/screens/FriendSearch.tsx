import { StyleSheet, Text, View, SafeAreaView, Image, TextInput, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import {
  useFonts,
  Roboto_400Regular as Regular,
  Roboto_500Medium as Medium,
  Roboto_700Bold as Bold,
} from '@expo-google-fonts/roboto';

const Email = () => {

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
      <TouchableOpacity>
        <View style={styles.card}>
          {/* <Image source={item.image} style={styles.cardImage} />
          <Text style={styles.cardText}>{item.name}</Text>
          <Text style={styles.cardText}>{item.points}</Text> */}
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
              <TextInput placeholder='Search' placeholderTextColor='#8E8E92' style={styles.textInput}></TextInput> 
            </View>
            <Text style={styles.cancel}>Cancel</Text>
          </View>
          <View style={styles.underline} />
          {/* <View style={styles.cardContainer}>

          </View> */}
          <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          numColumns={1}
          renderItem={renderCard}
          contentContainerStyle={styles.scrollMenu}
        />
        </View>
    </SafeAreaView>
  )
}

export default Email

const styles = StyleSheet.create({
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
      fontSize: 18,
      fontFamily: 'Regular',
    },
    underline: {
      height: 1,
      backgroundColor: '#DBDBDB',
      width: '100%',
      marginBottom: 5
      
    },
    // cardContainer:{
    //   width: '90%',
    //   height: '7%',
    //   backgroundColor: 'green'
    // },
    scrollMenu:{
      marginTop: 20,
      // justifyContent: 'center',
      alignItems: 'center',
      // backgroundColor: 'red',
  
    },
    card:{
      width: 400,
      backgroundColor: 'green',
      // marginHorizontal: 30,
      marginBottom: 10,
      height: 50,
      // // backgroundColor: 'yellow',
      // justifyContent: 'flex-start',
      // alignItems: 'center',
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