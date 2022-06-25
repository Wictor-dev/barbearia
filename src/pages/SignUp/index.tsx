import { StackNavigationProp } from "@react-navigation/stack"
import React from "react"
import { ImageBackground, Text, View } from "react-native"
import { Button } from "../../components/Button"
import { Input } from "../../components/Input"
import { FormContainer, Title } from "../LogIn/LogInStyles"
import { AuthStackParamList } from '../../routes/auth.routes'
import { useNavigation } from "@react-navigation/native"

type LoginScreenProps = StackNavigationProp<AuthStackParamList, 'logIn'>

export default function SignUp() {
    const navigation = useNavigation<LoginScreenProps>()

    function handleBackLogin() {
        navigation.navigate('logIn')
    }
    return (
        <ImageBackground source={require('../../assets/images/backgroundAuth.png')} resizeMode='cover' style={{ flex: 1, justifyContent: 'center', paddingRight: 16, paddingLeft: 16 }}>
            <FormContainer>
                <Title>Cadastrar</Title>
                <Input label="Nome" />
                <View style={{ height: 20 }} />
                <Input label="Email" />
                <View style={{ height: 20 }} />
                <Input label="Senha" />
                <View style={{ height: 80 }} />
                <Button />
                <View style={{ width: '100%', alignItems: 'flex-end', paddingRight: 8, marginTop: 20 }}>

                    <Text style={{ fontSize: 16, color: '#fff', }} onPress={handleBackLogin}>Fazer Login</Text>
                </View>
            </FormContainer>


        </ImageBackground>
    )
}