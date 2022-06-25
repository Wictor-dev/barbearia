import { ImageBackground, Text, View } from 'react-native'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { FormContainer, Title } from './LogInStyles'
export function LogIn() {
    return (
        <ImageBackground source={require('../../assets/images/backgroundAuth.png')} resizeMode='cover' style={{flex: 1, justifyContent: 'center', paddingRight: 16, paddingLeft: 16}}>
            <FormContainer>
                <Title>Entrar</Title>
                <Input label="Email" />
                <View style={{height: 20}} />
                <Input label="Senha" />
                <View style={{height: 80}} />
                <Button />
                <Text style={{fontSize: 16, color: '#fff',}}>Fazer cadastro</Text>
            </FormContainer>
            

        </ImageBackground>
    )
}