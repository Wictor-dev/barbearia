import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SchedulingScreen } from "../pages/Scheduling";
import { PerfilScreen } from "../pages/Perfil/Perfil";

type AppTabParamList = {
    Home: undefined;
    Settings: undefined;
}

const Tab = createBottomTabNavigator<AppTabParamList>();

export default function Tabs(){
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={SchedulingScreen} />
            <Tab.Screen name="Settings" component={PerfilScreen} />
        </Tab.Navigator>
    )
}