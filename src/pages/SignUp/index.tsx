import { StackNavigationProp } from "@react-navigation/stack"
import React, { useState } from "react"
import { ImageBackground, Text, View } from "react-native"
import { Button } from "../../components/Button"
import { FormContainer, Title } from "../LogIn/LogInStyles"
import { AuthStackParamList } from '../../routes/auth.routes'
import { useNavigation } from "@react-navigation/native"
import * as yup from 'yup'
import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import { ControlledInput } from "../../components/ControlledInput"
import { useAuth } from "../../context/authContext"
import { BlurView } from 'expo-blur'
import { Select } from "../../components/Select"


type LoginScreenProps = StackNavigationProp<AuthStackParamList, 'logIn'>

type FormData = {
    name: string;
    email: string;
    password: string;
    confirm_password: string;
}

const schema = yup.object({
    name: yup.string().required("O nome é obrigatório"),
    email: yup.string().email("Formato inválido").required("O email é obrigatório"),
    password: yup.string().min(8, "No mínimo 8 dígitos").required("A senha é obrigatória"),
    confirm_password: yup.string().oneOf([yup.ref('password'), null], "As senhas não conferem").required("A senha é obrigatória"),
})
export default function SignUp() {
    const navigation = useNavigation<LoginScreenProps>()
    const [userIndex, setUserIndex] = useState(0)

    function handleSetUserIndex(value: number){
        setUserIndex(value)
    }
    const { signUp } = useAuth()
    const {control, handleSubmit, formState: {errors}} = useForm<FormData>({
        resolver: yupResolver(schema)
    })
    function handleBackLogin() {
        navigation.navigate('logIn')
    }

    function handleRegisterUser({name, email, password, confirm_password}: FormData){

        signUp(name, email, password, confirm_password,userIndex, handleBackLogin);
    }
    return (
        <ImageBackground source={require('../../assets/images/backgroundAuth.png')} resizeMode='cover' style={{ flex: 1, justifyContent: 'center', paddingRight: 16, paddingLeft: 16 }}>
            <BlurView tint="dark" intensity={80}>
                <FormContainer>
                    <Title>Cadastrar</Title>
                    <ControlledInput name="name" control={control} error={errors.name} label="Nome" />
                    <View style={{ height: 20 }} />
                    <ControlledInput name="email" control={control} error={errors.email} label="Email" />
                    <View style={{ height: 20 }} />
                    <ControlledInput name="password" control={control} error={errors.password} label="Senha" />
                    <View style={{ height: 20 }} />
                    <ControlledInput name="confirm_password" control={control} error={errors.confirm_password} label="Confirmar senha" />
                    <View style={{ height: 20 }} />
                    <Select onChangeValue={handleSetUserIndex}/>
                    <View style={{ height: 80 }} />
                    <Button  size="large" title="CADASTRAR" onPress={handleSubmit(handleRegisterUser)} />
                    <View style={{ width: '100%', alignItems: 'flex-end', paddingRight: 8, marginTop: 20 }}>

                        <Text style={{ fontSize: 16, color: '#fff', }} onPress={handleBackLogin}>Fazer Login</Text>
                    </View>
                </FormContainer>

            </BlurView>


        </ImageBackground>
    )
}