import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Phone from './screens/Phone';
import Welcome from './screens/Welcome';
import Code from './screens/Code';
import Name from './screens/Name';
import Friends from './screens/Friends';

export default function App() {
  return (
    <Friends />
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
