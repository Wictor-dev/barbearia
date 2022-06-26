import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SchedulingScreen } from "../pages/Scheduling";

import { PerfilScreen } from "../pages/Perfil";
import { SearchEmployee } from "../pages/SearchEmployee";
import { Text, TextInput, View } from "react-native";
import { theme } from "../globals/style/theme";

type AppTabParamList = {
    Agendar: undefined;
    Configurações: undefined;
    BuscarBarbeiro: undefined;
}

const Tab = createBottomTabNavigator<AppTabParamList>();

export default function Tabs(){
    return (

        <Tab.Navigator screenOptions={{ tabBarStyle: {backgroundColor: theme.colors.b12, borderWidth: 0}}}>
            <Tab.Screen name="BuscarBarbeiro" component={SearchEmployee} options={{
               headerShown: false
            }}/>
            <Tab.Screen name="Agendar" component={SchedulingScreen} />
            <Tab.Screen name="Configurações" component={PerfilScreen} />
        </Tab.Navigator>
    )
}