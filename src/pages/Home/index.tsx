import React from 'react';
import { StyleSheet, Text, SafeAreaView, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SchedulingScreen from '../Scheduling';
import PerfilScreen from '../Perfil/Perfil';


const Tab = createBottomTabNavigator();

function Menu() {
  return (
    <Tab.Navigator>
        <Tab.Screen name="Home" component={SchedulingScreen} />
        <Tab.Screen name="Settings" component={PerfilScreen} />
    </Tab.Navigator>
  );
}


const Home = () => {


    return (
        <NavigationContainer>
           <Menu></Menu>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 25,
    fontWeight: '500',
  },
  logo:{
    backgroundColor: 'black',
    flex: 1,
  },
  menu:{
    backgroundColor: 'gray',
    height: 300,
    width: 400,
    position: 'absolute',
    top: 400
    
  }

});

export default Home;