import { StackNavigationProp } from "@react-navigation/stack"
import React from "react"
import { ImageBackground, Text, View } from "react-native"
import { Button } from "../../components/Button"
import { Input } from "../../components/Input"
import { FormContainer, Title } from "../LogIn/LogInStyles"
import { AuthStackParamList } from '../../routes/auth.routes'
import { useNavigation } from "@react-navigation/native"
import * as yup from 'yup'
import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import { ControlledInput } from "../../components/ControlledInput"

type LoginScreenProps = StackNavigationProp<AuthStackParamList, 'logIn'>

type FormData = {
    name: string;
    email: string;
    password: string;
    confirm_password: string;
}

const schema = yup.object({
    nome: yup.string().required("O nome é obrigatório"),
    email: yup.string().email("Formato inválido").required("O email é obrigatório"),
    password: yup.string().min(6, "No mínimo 6 dígitos").required("A senha é obrigatória"),
    confirm_password: yup.string().oneOf([yup.ref('password'), null], "As senhas não conferem").required("A senha é obrigatória"),
})
export default function SignUp() {
    const navigation = useNavigation<LoginScreenProps>()

    const {control, handleSubmit, formState: {errors}} = useForm<FormData>({
        resolver: yupResolver(schema)
    })
    function handleBackLogin() {
        navigation.navigate('logIn')
    }
    return (
        <ImageBackground source={require('../../assets/images/backgroundAuth.png')} resizeMode='cover' style={{ flex: 1, justifyContent: 'center', paddingRight: 16, paddingLeft: 16 }}>
            <FormContainer>
                <Title>Cadastrar</Title>
                <ControlledInput name="name" control={control} error={errors.name} label="Nome" />
                <View style={{ height: 20 }} />
                <ControlledInput name="email" control={control} error={errors.email} label="Email" />
                <View style={{ height: 20 }} />
                <ControlledInput name="password" control={control} error={errors.password} label="Senha" />
                <View style={{ height: 20 }} />
                <ControlledInput name="confirm_password" control={control} error={errors.confirm_password} label="Confirmar senha" />
                <View style={{ height: 80 }} />
                <Button  size="large" title="CADASTRAR" />
                <View style={{ width: '100%', alignItems: 'flex-end', paddingRight: 8, marginTop: 20 }}>

                    <Text style={{ fontSize: 16, color: '#fff', }} onPress={handleBackLogin}>Fazer Login</Text>
                </View>
            </FormContainer>


        </ImageBackground>
    )
}