import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import Phone from './screens/Phone';
import Welcome from './screens/Welcome';
import Code from './screens/Code';
import Name from './screens/Name';
import Friends from './screens/Friends';
import FriendSearch from './screens/FriendSearch';
import Game from './screens/Game';
import Email from './screens/Email';

export default function App() {
  return (
    <Welcome />
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
