import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Routes from './src/routes';

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
        <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </GestureHandlerRootView>

  );
}

