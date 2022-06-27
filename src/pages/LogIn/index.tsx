import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { useForm } from 'react-hook-form'
import { ImageBackground, Text, View } from 'react-native'
import { Button } from '../../components/Button'
import { ControlledInput } from '../../components/ControlledInput'
import { AuthStackParamList } from '../../routes/auth.routes'
import { FormContainer, Title } from './LogInStyles'
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useAuth } from '../../context/authContext'

type FormData = {
    email: string;
    password: string;
}

const schema = yup.object({
    email: yup.string().email("Formato inválido").required("O email é obrigatório"),
    password: yup.string().min(6, "No mínimo 6 dígitos").required("A senha é obrigatória"),
})

type SignUpScreenProps = StackNavigationProp<AuthStackParamList, 'signUp'>

export function LogIn() {
    const navigation = useNavigation<SignUpScreenProps>()
    const { login} = useAuth()

    const {control, handleSubmit, formState: {errors}} = useForm<FormData>({
        resolver: yupResolver(schema)
    })

    function handleLogin({email, password}: FormData){
        login(email, password)
    }
    function handleGoSignUp() {
        navigation.navigate('signUp')
    }
    return (
        <ImageBackground source={require('../../assets/images/backgroundAuth.png')} resizeMode='cover' style={{flex: 1, justifyContent: 'center', paddingRight: 16, paddingLeft: 16}}>
            <FormContainer>
                <Title>Entrar</Title>
                <ControlledInput label="Email" name="email" control={control} error={errors.email} autoCapitalize="none" />
                <View style={{height: 20}} />
                <ControlledInput label="Senha" name="password" control={control} error={errors.password} autoCapitalize="none" />
                <View style={{height: 80}} />
                <Button size="large" title="ENTRAR" onPress={handleSubmit(handleLogin)} />
                <View style={{width: '100%', alignItems: 'flex-end', paddingRight: 8, marginTop: 20}}>
                    <Text style={{fontSize: 20, color: '#fff',}} onPress={handleGoSignUp}>Fazer cadastro</Text>
                </View>
            </FormContainer>
            

        </ImageBackground>
    )
}