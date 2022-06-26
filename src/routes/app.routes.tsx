import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SchedulingScreen } from "../pages/Scheduling";
import { PerfilEmployer } from "../pages/PerfilEmployer";
import { SearchEmployee } from "../pages/SearchEmployee";
import { theme } from "../globals/style/theme";
import { createStackNavigator } from "@react-navigation/stack";
import { PerfilUser } from "../pages/PerfilUser";
 
export type AppTabParamList = {
    Home: undefined;
    Perfil: undefined;
    SearchEmployee: undefined;
}

export type AppStackParamList = {
    Agendar: undefined;
    HomeTabs: undefined;
    PerfilEmployer: undefined;
}

const Tab = createBottomTabNavigator<AppTabParamList>();
const Stack = createStackNavigator<AppStackParamList>();

export function Tabs(){
    return (

        <Tab.Navigator screenOptions={{ tabBarStyle: {backgroundColor: theme.colors.b12, borderWidth: 0}}}>
            <Tab.Screen name="Perfil" component={PerfilUser} options={{ headerShown:false}}/>
            <Tab.Screen name="Home" component={SchedulingScreen} />
            <Tab.Screen name="SearchEmployee" component={SearchEmployee} options={{
               headerShown: false
            }}/>
        </Tab.Navigator>
    )
}

export default function AppRoutes(){
    return (
        <Stack.Navigator screenOptions={{ headerShown:false}} initialRouteName="Agendar">
            <Stack.Screen name="Agendar" component={Tabs}  />
            <Stack.Screen name="HomeTabs" component={Tabs} />
            <Stack.Screen name="PerfilEmployer" component={PerfilEmployer} />
        </Stack.Navigator>
    )
}