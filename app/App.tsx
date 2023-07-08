import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from './testfiles/Login'
import List from './testfiles/List'
import { User, onAuthStateChanged } from 'firebase/auth'
import { FIREBASE_AUTH } from './config/firebase'

const Stack = createNativeStackNavigator();


const LoggedStack = createNativeStackNavigator();

function LoggedLayout(){
  return(
    <LoggedStack.Navigator>
      <LoggedStack.Screen name='List' component={List} options={{headerShown:false}}/>
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
      {user ? (      <Stack.Screen name='LoggedLayout' component={LoggedLayout} options={{headerShown:false}}/>
) : (      <Stack.Screen name='Login' component={Login} options={{headerShown:false}}/>
)}
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})