import React from "react"
import { ImageBackground, View } from "react-native"
import { Button } from "../../components/Button"
import { Input } from "../../components/Input"
import { FormContainer, Title } from "../LogIn/LogInStyles"

export default function SignUp(){
    return (
        <ImageBackground source={require('../../assets/images/backgroundAuth.png')} resizeMode='cover' style={{flex: 1, justifyContent: 'center', paddingRight: 16, paddingLeft: 16}}>
            <FormContainer>
                <Title>Cadastrar</Title>
                <Input label="Nome" />
                <View style={{height: 20}} />
                <Input label="Email" />
                <View style={{height: 20}} />
                <Input label="Senha" />
                <View style={{height: 80}} />
                <Button />
            </FormContainer>
            

        </ImageBackground>
    )
}