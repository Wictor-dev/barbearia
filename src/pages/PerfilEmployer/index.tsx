import React from "react";
import { ImageBackground, SafeAreaView, Text, View } from "react-native";
import { Container, PerfilArea, ServicesContainer, ServiceContainer ,Title } from "./PerfilEmployerStyles";
import { Feather } from '@expo/vector-icons'
import { useNavigation } from "@react-navigation/native";
import { Button } from "../../components/Button";
import { theme } from "../../globals/style/theme";
export function PerfilEmployer(){
    const navigation = useNavigation()
    return (
        <ImageBackground source={require('../../assets/images/backgroundStreet.png')} resizeMode="cover" style={{ flex: 1}}>
            <Feather name="arrow-left" size={40} color="#fff" style={{marginLeft: 12, marginTop: 20}} onPress={() => navigation.goBack()} />
            <View style={{flex: 1,flexDirection: 'row'}}>
                <Container>
                    <Title>Bessie Cooper</Title>
                    <ServicesContainer>
                        <Title style={{marginBottom: 52}}>Serviços ofertados</Title>
                        <ServiceContainer>
                            <View>
                                <Text style={{fontSize: 20, color: theme.colors.b11, marginBottom: 8}}>Tranças</Text>
                                <Text style={{color: theme.colors.b08, fontSize: 16}}>R$ 20,00</Text>
                            </View>
                            <Button title="AGENDAR" size="medium" />
                        </ServiceContainer>
                        <ServiceContainer>
                            <View>
                                <Text style={{fontSize: 20, color: theme.colors.b11, marginBottom: 8}}>Luzes</Text>
                                <Text style={{color: theme.colors.b08, fontSize: 16}}>R$ 20,00</Text>
                            </View>
                            <Button title="AGENDAR" size="medium" />
                        </ServiceContainer>
                    </ServicesContainer>
                </Container>
                <PerfilArea></PerfilArea>

            </View>
        </ImageBackground>
    )
}