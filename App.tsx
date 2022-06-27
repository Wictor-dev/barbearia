import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { AuthProvider } from './src/context/authContext';
import { ItemProvider } from './src/context/ItemContext';
import { theme } from './src/globals/style/theme';
import Routes from './src/routes';

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <AuthProvider>
        <ItemProvider>
          <NavigationContainer>
              <Routes />
          </NavigationContainer>
        </ItemProvider>
      </AuthProvider>
    </GestureHandlerRootView>

  );
}

