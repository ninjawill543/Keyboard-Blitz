import { StyleSheet, Text, View, Button, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import colors from '../colors'
import BlueButton from '../components/BlueButton'
import WhiteButton from '../components/WhiteButton'

const Welcome = () => {
  return (
    <View style={styles.container}>
        <View style={styles.main}>
            <View>
              <TouchableOpacity style={styles.language}>
                <Image source={require('../assets/language.png')} style={styles.languageSign}/>  
                <Text style={styles.languageText}>English</Text>
              </TouchableOpacity>
            </View>
            <Image source={require('../assets/home.png')} style={styles.image}/>           
            <Text style={styles.title}>Welcome to Racer </Text>
            <Text style={styles.littleText}>The competitive typing game where you compete against your friends</Text>
            <BlueButton buttonText={'Log In'} bottomPadding={'6.67%'}/>
            <WhiteButton buttonText={"I'm new, sign me up"} bottomPadding={'26%'}/>
        </View>
    </View>
  )
}

export default Welcome

const styles = StyleSheet.create({
    container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
      },
    main: {
        width: '90%',
        height: '100%',
        // backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'flex-end',
        // paddingBottom: '26%',

    },
    littleText:{
      fontSize: 18,
      fontFamily: 'Al Nile',
      textAlign: 'center',
      marginBottom: '7.36%'
      
    },
    title:{
      fontSize: 30,
      fontFamily: 'AlNile-Bold',
      textAlign: 'center',
      marginBottom: '7.8%'
    },
    image:{
      width: 362, 
      height: 291.77, 
      alignSelf: 'flex-start', 
      marginBottom: '17.48%'
    },
    language:{
      backgroundColor: colors.four,
      borderRadius: 25,
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 1,
      borderColor: colors.two,
      marginBottom: '20%',
      marginLeft: '66%',
      width: 131,
      height: 41,
      flexDirection: 'row'
    },
    languageText:{
      fontSize: 18,
      fontFamily: 'Al Nile',
      textAlign: 'center',
    },
    languageSign:{
      width: 22.25,
      height: 21,
      marginRight: 10
    }

})