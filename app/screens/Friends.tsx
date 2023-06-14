import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import {
  useFonts,
  Roboto_400Regular as Regular,
  Roboto_500Medium as Medium,
  Roboto_700Bold as Bold,
} from '@expo-google-fonts/roboto';

const Friends = () => {
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
          <View style={styles.scrollMenu}>
            <View style={styles.card}>

            </View>
          </View>
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
        backgroundColor: 'red'
    },
    topMenu:{
      width: '100%',
      height: 64,
      backgroundColor: 'blue',
      marginTop: 80,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    title:{
      fontSize: 30,
      fontFamily: 'Medium',
      // marginRight: 15
    },
    scrollMenu:{
      width: '100%',
      height: '100%',
      backgroundColor: 'green',
      marginTop: 20,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    card:{
      
    }
})