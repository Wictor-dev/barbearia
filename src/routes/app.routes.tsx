import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SchedulingScreen } from "../pages/Scheduling";
import { PerfilScreen } from "../pages/Perfil/Perfil";
import { SearchEmployee } from "../pages/SearchEmployee";
import { Text, TextInput, View } from "react-native";
import { theme } from "../globals/style/theme";

type AppTabParamList = {
    Home: undefined;
    Settings: undefined;
    SearchEmployee: undefined;
}

const Tab = createBottomTabNavigator<AppTabParamList>();

export default function Tabs(){
    return (
        <Tab.Navigator screenOptions={{ tabBarStyle: {backgroundColor: theme.colors.b12, borderWidth: 0}}}>
            <Tab.Screen name="SearchEmployee" component={SearchEmployee} options={{
               headerShown: false
            }}/>
            <Tab.Screen name="Home" component={SchedulingScreen} />
            <Tab.Screen name="Settings" component={PerfilScreen} />
        </Tab.Navigator>
    )
}