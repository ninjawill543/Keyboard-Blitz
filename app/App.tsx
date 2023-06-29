import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {RootStackParamList} from './screens/RootStackParams';
import Phone from './screens/Phone';
import LogPhone from './screens/LogPhone';
import Welcome from './screens/Welcome';
import Code from './screens/Code';
import LogCode from './screens/LogCode';
import Name from './screens/Name';
import Friends from './screens/Friends';
import FriendSearch from './screens/FriendSearch';
import Game from './screens/Game';
import YourComponent from './api';
import RootNavigation from './testNavigation';

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
  //   <NavigationContainer>
  //     <Stack.Navigator 
  //     screenOptions={{
  //   headerShown: false
  // }}
  // >
  //       <Stack.Screen name="Welcome" component={Welcome} />
  //       <Stack.Screen name="Phone" component={Phone} />
  //       <Stack.Screen name="LogPhone" component={LogPhone} />
  //       <Stack.Screen name="Code" component={Code} />
  //       <Stack.Screen name="LogCode" component={LogCode} />
  //       <Stack.Screen name="Name" component={Name} />
  //       <Stack.Screen name="Friends" component={Friends} />
  //       <Stack.Screen name="FriendSearch" component={FriendSearch} />
  //       <Stack.Screen name="Game" component={Game} />
  //     </Stack.Navigator>
  //   </NavigationContainer>
    // <PhoneAuth />
    <RootNavigation />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
