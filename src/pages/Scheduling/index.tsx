import React from "react";
import { View, Text, ScrollView, Image } from "react-native";
import CardTile from "../../components/card-tile";
import styles from "./styles";
import { Feather,Fontisto, MaterialCommunityIcons } from '@expo/vector-icons'; 
export function SchedulingScreen() {
    return (
        <View style={styles.container}>
    
            <View style={styles.block1}>

                <View style={styles.image}>
                    <Text style={styles.title}>Dude's Barber Shop.</Text>
                    <Image 
                        style = {{width: 300, height: 300}}   
                        source={require('../../assets/images/barber-logo2.png')}
                        width = {300}
                        height = {300}
                        resizeMode="center"
                        //resizeMethod="resize"
                        />
                    <Text style={styles.subtitle}>Escolha agora um horário que se encaixe em sua preferência.</Text>
                </View>
                
                
            </View>
            <View style={styles.block2}></View>
            <View style={styles.containerFloat}>
                <CardTile title="Serviços" icon={Feather} iconName="scissors"/>
                <CardTile title="Barbeiro" icon={MaterialCommunityIcons} iconName="bow-tie"/>
                <CardTile title="Data e Horário " icon={Fontisto} iconName="date"/>
            </View>
            
        </View>
    )
}