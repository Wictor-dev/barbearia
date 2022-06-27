import React, { createContext, useContext, useState } from 'react';  
import { api } from '../service/api';

type AuthContextData = {
    signed: boolean;
    user: object;
    login(email: string, password: string): Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({children}) => {
    const [user, setUser] = useState({})
    
    async function login(email: string, password: string){
        const params = {email,  password, device_name: "dev"}
        console.log(JSON.stringify(params))

        try {
            const {data} = await api.post('/login', params)
            
            console.log(data)

        } catch(e) {
            console.log(e)
            if (e.response.status === 401){
                console.log('Não autorizado')
            }
        }

    }
    return (
        <AuthContext.Provider value={{signed: false, user:{}, login}}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth(){
    const context = useContext(AuthContext)

    return context
}