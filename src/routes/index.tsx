import React from "react"
import { useAuth } from "../context/authContext"
import { AppRoutes, EmployeeAppRoutes } from "./app.routes"
import AuthRoutes from "./auth.routes"
import { View, ActivityIndicator } from "react-native"

export default function Routes() {
    const { user, signed, loading } = useAuth()
    if (loading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" color="#666" />
            </View>
        )
    }
    
    if (signed){
        if (user?.employee === "1") {
            return <EmployeeAppRoutes />
        } else {
            return <AppRoutes />
        }
    } else {
        return <AuthRoutes />
    }
}