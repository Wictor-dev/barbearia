import React from "react";
import { ImageBackground, SafeAreaView, View } from "react-native";
import { Container, PerfilArea, Title } from "./PerfilEmployerStyles";
import { Feather } from '@expo/vector-icons'
import { useNavigation } from "@react-navigation/native";
export function PerfilEmployer(){
    const navigation = useNavigation()
    return (
        <ImageBackground source={require('../../assets/images/backgroundStreet.png')} resizeMode="cover" style={{ flex: 1}}>
            <Feather name="arrow-left" size={40} color="#fff" style={{marginLeft: 12, marginTop: 20}} onPress={() => navigation.goBack()} />
            <View style={{flex: 1,flexDirection: 'row'}}>
                <Container>
                    <Title>Bessie Cooper</Title>
                </Container>
                <PerfilArea></PerfilArea>

            </View>
        </ImageBackground>
    )
}