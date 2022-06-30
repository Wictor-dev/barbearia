import React from "react"
import { useAuth } from "../context/authContext"
import AppRoutes from "./app.routes"
import AuthRoutes from "./auth.routes"
import { View, ActivityIndicator } from "react-native"

export default function Routes(){
    const { signed, loading } = useAuth()
    
    if ( loading ){
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <ActivityIndicator size="large" color="#666" />
            </View> 
        )
    }
    return signed ? <AppRoutes /> : <AuthRoutes />
}