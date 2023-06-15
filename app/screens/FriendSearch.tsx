import { StyleSheet, Text, View, SafeAreaView, Image, TextInput } from 'react-native'
import React from 'react'
import {
  useFonts,
  Roboto_400Regular as Regular,
  Roboto_500Medium as Medium,
  Roboto_700Bold as Bold,
} from '@expo-google-fonts/roboto';

const Email = () => {
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
      
    },
})