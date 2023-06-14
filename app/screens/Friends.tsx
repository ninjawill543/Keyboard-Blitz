import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import {
  useFonts,
  Roboto_400Regular as Regular,
  Roboto_500Medium as Medium,
  Roboto_700Bold as Bold,
} from '@expo-google-fonts/roboto';

const Friends = () => {
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
          <TouchableOpacity>
            <Image source={require('../assets/lh.png')} style={{width: 64, height: 64}} /> 
          </TouchableOpacity>
          <Text style={styles.title}>Friends</Text>
          <TouchableOpacity>
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

const styles = StyleSheet.create({
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
