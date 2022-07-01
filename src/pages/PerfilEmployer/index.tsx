import React, { useEffect } from "react";
import { ImageBackground, SafeAreaView, Text, View } from "react-native";
import { Container, PerfilArea, ServicesContainer, ServiceContainer, Title } from "./PerfilEmployerStyles";
import { Feather } from '@expo/vector-icons'
import { useNavigation } from "@react-navigation/native";
import { Button } from "../../components/Button";
import { theme } from "../../globals/style/theme";
import { api } from "../../service/api";
import { useAuth } from "../../context/authContext";
import { ScrollView } from "react-native-gesture-handler";
export function PerfilEmployer() {
    const { user, logOut } = useAuth()
    const navigation = useNavigation()
    return (
        <ImageBackground source={require('../../assets/images/backgroundStreet.png')} resizeMode="cover" style={{ flex: 1 }}>
            <Feather name="arrow-left" size={32} color="#fff" style={{ marginLeft: 12, marginTop: 28 }} onPress={() => navigation.goBack()} />
            <View style={{ flex: 1, flexDirection: 'row' }}>
                <Container>
                    <ScrollView style={{ flex: 1}}>
                        <Title style={{ marginBottom: 52 }}>Dados pessoais</Title>
                        <ServiceContainer>
                            <View>
                                <Text style={{ fontSize: 20, color: theme.colors.b11, marginBottom: 8 }}>Nome</Text>
                                <Text style={{ color: theme.colors.b08, fontSize: 16 }}>{user?.name}</Text>
                            </View>
                        </ServiceContainer>
                        <ServiceContainer>
                            <View>
                                <Text style={{ fontSize: 20, color: theme.colors.b11, marginBottom: 8 }}>Telefone</Text>
                                <Text style={{ color: theme.colors.b08, fontSize: 16 }}>86 988776655</Text>
                            </View>
                        </ServiceContainer>
                        <ServiceContainer>
                            <View>
                                <Text style={{ fontSize: 20, color: theme.colors.b11, marginBottom: 8 }}>Email</Text>
                                <Text style={{ color: theme.colors.b08, fontSize: 16 }}>{user?.email}</Text>
                            </View>
                        </ServiceContainer>
                        <ServiceContainer>
                            <View>
                                <Text style={{ fontSize: 20, color: theme.colors.b11, marginBottom: 8 }}>Senha</Text>
                                <Text style={{ color: theme.colors.b08, fontSize: 16 }}>*********</Text>
                            </View>
                            <Button title="VER SENHA" size="medium" />
                        </ServiceContainer>
                        <ServicesContainer>
                            <Title style={{ marginBottom: 52 }}>Serviços ofertados</Title>
                            <ServiceContainer>
                                <View>
                                    <Text style={{ fontSize: 20, color: theme.colors.b11, marginBottom: 8 }}>Tranças</Text>
                                    <Text style={{ color: theme.colors.b08, fontSize: 16 }}>R$ 20,00</Text>
                                </View>
                                <Button title="AGENDAR" size="medium" />
                            </ServiceContainer>
                            <ServiceContainer>
                                <View>
                                    <Text style={{ fontSize: 20, color: theme.colors.b11, marginBottom: 8 }}>Luzes</Text>
                                    <Text style={{ color: theme.colors.b08, fontSize: 16 }}>R$ 20,00</Text>
                                </View>
                                <Button title="AGENDAR" size="medium" />
                            </ServiceContainer>
                        </ServicesContainer>
                        <Button title="SAIR" fill color={"red"} textColor="#fff" style={{ marginTop: 10 }} onPress={logOut} />
                    </ScrollView>

                </Container>
                <PerfilArea></PerfilArea>

            </View>
        </ImageBackground>
    )
}