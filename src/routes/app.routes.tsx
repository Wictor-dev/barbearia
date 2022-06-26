import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SchedulingScreen } from "../pages/Scheduling";
import { PerfilScreen } from "../pages/Perfil";
import { MaterialIcons } from '@expo/vector-icons'; 

type AppTabParamList = {
    Agendar: undefined;
    Configurações: undefined;
}

const Tab = createBottomTabNavigator<AppTabParamList>();

export default function Tabs(){
    return (
        <Tab.Navigator>
            <Tab.Screen options={{
                    tabBarIcon: () =>  <MaterialIcons name="schedule" size={30}></MaterialIcons>
                }}
                name="Agendar" component={SchedulingScreen}
             />
            <Tab.Screen options={{
                    tabBarIcon: () =>  <MaterialIcons name="settings" size={30}></MaterialIcons>
                }}
            name="Configurações" component={PerfilScreen}
             />
        </Tab.Navigator>
    )
}