import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { ImageBackground, Text, View } from 'react-native'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { AuthStackParamList } from '../../routes/auth.routes'
import { FormContainer, Title } from './LogInStyles'

type SignUpScreenProps = StackNavigationProp<AuthStackParamList, 'signUp'>
export function LogIn() {
    const navigation = useNavigation<SignUpScreenProps>()

    function handleGoSignUp() {
        navigation.navigate('signUp')
    }
    return (
        <ImageBackground source={require('../../assets/images/backgroundAuth.png')} resizeMode='cover' style={{flex: 1, justifyContent: 'center', paddingRight: 16, paddingLeft: 16}}>
            <FormContainer>
                <Title>Entrar</Title>
                <Input label="Email" />
                <View style={{height: 20}} />
                <Input label="Senha" />
                <View style={{height: 80}} />
                <Button />
                <View style={{width: '100%', alignItems: 'flex-end', paddingRight: 8, marginTop: 20}}>
                    <Text style={{fontSize: 20, color: '#fff',}} onPress={handleGoSignUp}>Fazer cadastro</Text>
                </View>
            </FormContainer>
            

        </ImageBackground>
    )
}