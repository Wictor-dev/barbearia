import axios, { AxiosError } from 'axios';
import React, { createContext, useContext, useEffect, useState } from 'react';  
import { Alert } from 'react-native';
import { api } from '../service/api';
import AsyncStorage from '@react-native-async-storage/async-storage'

type User = {
    email: string;
    id: number;
    name: string;
}

type AuthContextData = {
    signed: boolean;
    user: User | null;
    login(email: string, password: string): Promise<void>;
    signUp(nome: string,email: string, password: string, confirm_password: string, handleGoToScreen: () => void): Promise<void>;
    loading: boolean;
    logOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

type ServerError = {
    message: string;
}

export const AuthProvider: React.FC = ({children}) => {
    const [user, setUser] = useState<User | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(()=> {
        async function loadStoragedData(){
            const storagedUser = await AsyncStorage.getItem('@RNAuth:user')
            const storagedToken = await AsyncStorage.getItem('@RNAuth:token')
            
            await new Promise(resolve => setTimeout(resolve, 2000))

            if (storagedToken && storagedUser){
                api.defaults.headers.common['Authorization'] = `Bearer ${storagedToken}`
                setUser(JSON.parse(storagedUser));
                setLoading(false)
            } else {
                setUser(null)
                setLoading(false)
            }
        }

        loadStoragedData()        
    },[])

    const SucessAlert = (title: string, message: string, handleGoToScreen: () => void) => {
        Alert.alert(
            title,
            message,
            [
                {
                    text: "Cancel",
                    onPress: () => console.log('Cancel pressed'),
                    style: "cancel"
                },
                { text: "OK", onPress: handleGoToScreen}
            ]
        )
    }
    const ErrorAlert = (title: string, message: string) => {
        Alert.alert(
            title,
            message,
            [
                {
                    text: "Cancel",
                    onPress: () => console.log('Cancel pressed'),
                    style: "cancel"
                },
                { text: "OK", onPress: () => console.log('OK pressed')}
            ]
        )
    }

    async function login(email: string, password: string){
        const params = {email,  password, device_name: "dev"}
        // console.log(JSON.stringify(params))

        setLoading(true)
        try {
            const {data}= await api.post('/login', params)
            setLoading(false)

            setUser(data.user)

            api.defaults.headers.common['Authorization'] = `Bearer ${data.access_token}`

            await AsyncStorage.setItem('@RNAuth:user', JSON.stringify(data.user))
            await AsyncStorage.setItem('@RNAuth:token', JSON.stringify(data.access_token))

            
        } catch(error) {
            setLoading(false)
            if (axios.isAxiosError(error)) {
                const serverError = error as AxiosError<ServerError>
                if (serverError && serverError.response) {
                    if (serverError.response.status === 404){
                        ErrorAlert(`${serverError.response.status}`,"A rota não foi encontrada")
                    } else if (serverError.response.status === 401) {
                        ErrorAlert(`${serverError.response.status}`,serverError.response.data.message)
                    }
                    console.log(serverError.response.data, serverError.response.status)
                }
            } 

            
            
        }

    }

    async function signUp(name: string, email: string, password: string, confirm_password: string, handleGoToScreen: () => void){
        setLoading(true);
        try {
            const params = {
                name,
                email,
                password,
                password_confirmation: confirm_password,
                customer: "1",
                device_name: "dev"
            }

            const {data} = await api.post('/register', params)
            setLoading(false)
            SucessAlert("Sucesso", "Cadastro concluído com sucesso!", handleGoToScreen)
        } catch (error) {
            setLoading(false)
            if (axios.isAxiosError(error)) {
                const serverError = error as AxiosError<ServerError>
                if (serverError && serverError.response) {
                    if (serverError.response.status === 404){
                        ErrorAlert(`${serverError.response.status}`,"A rota não foi encontrada")
                    } else if (serverError.response.status === 401) {
                        ErrorAlert(`${serverError.response.status}`,serverError.response.data.message)
                    }
                    console.log(serverError.response.data, serverError.response.status)
                }
            } 
        }

        
    }
    async function logOut(){
        AsyncStorage.clear().then(() => {
            setUser(null);
        })
        await new Promise(resolve => setTimeout(resolve, 2000))

    }
    return (
        <AuthContext.Provider value={{signed: !!user, user, login, loading, logOut, signUp}}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth(){
    const context = useContext(AuthContext)

    return context
}