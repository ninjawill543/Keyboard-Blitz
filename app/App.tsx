import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from './testfiles/Login'
import List from './testfiles/List'
import { User, onAuthStateChanged } from 'firebase/auth'
import { FIREBASE_AUTH } from './config/firebase'
import Welcome from './screens/Welcome'
import LogPhone from './screens/LogPhone'
import LogCode from './screens/LogCode'
import Phone from './screens/Phone'
import Code from './screens/Code'
import Name from './screens/Name'
import Friends from './screens/Friends'
import FriendSearch from './screens/FriendSearch'
import Game from './screens/Game'

const Stack = createNativeStackNavigator();


const LoggedStack = createNativeStackNavigator();

function LoggedIn(){
  return(
    <LoggedStack.Navigator>
      <LoggedStack.Screen name='Friends' component={Friends} options={{headerShown:false}}/>
      <LoggedStack.Screen name='FriendSearch' component={FriendSearch} options={{headerShown:false}}/>
      <LoggedStack.Screen name='Game' component={Game} options={{headerShown:false}}/>
    </LoggedStack.Navigator>
  )
}
function LoggedOut(){
  return(
    <LoggedStack.Navigator>
      <LoggedStack.Screen name='Welcome' component={Welcome} options={{headerShown:false}}/>
      <LoggedStack.Screen name='LogPhone' component={LogPhone} options={{headerShown:false}}/>
      <LoggedStack.Screen name='LogCode' component={LogCode} options={{headerShown:false}}/>
      <LoggedStack.Screen name='Phone' component={Phone} options={{headerShown:false}}/>
      <LoggedStack.Screen name='Code' component={Code} options={{headerShown:false}}/>
      <LoggedStack.Screen name='Name' component={Name} options={{headerShown:false}}/>
    </LoggedStack.Navigator>
  )
}
const App = () => {
  const [user, setUser] = useState< User | null >(null);
  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, (user) => {
      console.log(user);
      setUser(user);
    });
  }, []);


  return (
  <NavigationContainer>
    <Stack.Navigator initialRouteName='Login'>
      {user ? (      <Stack.Screen name='LoggedLayout' component={LoggedIn} options={{headerShown:false}}/>
) : (      <Stack.Screen name='LoggedOut' component={LoggedOut} options={{headerShown:false}}/>
)}
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})