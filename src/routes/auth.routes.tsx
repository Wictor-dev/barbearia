import { createStackNavigator } from '@react-navigation/stack'
import { LogIn } from '../pages/LogIn'
import SignUp from '../pages/SignUp'

export type AuthStackParamList = {
    logIn: undefined,
    signUp: undefined,
}

const Stack = createStackNavigator<AuthStackParamList>()

export default function AuthRoutes(){
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="logIn" component={LogIn} />
            <Stack.Screen name="signUp" component={SignUp} />
        </Stack.Navigator>
    )
}