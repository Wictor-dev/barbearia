import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SchedulingScreen } from "../pages/Scheduling";
import { PerfilEmployer } from "../pages/PerfilEmployer";
import { SearchEmployee } from "../pages/SearchEmployee";
import { theme } from "../globals/style/theme";
import { createStackNavigator } from "@react-navigation/stack";
import { PerfilUser } from "../pages/PerfilUser";
import { Feather } from '@expo/vector-icons';
import { Schedule } from "../pages/Shedule";

export type AppTabParamList = {
    Home: undefined;
    Perfil: undefined;
    Search: undefined;
}

export type AppStackParamList = {
    Agendar: undefined;
    PerfilEmployer: undefined;
    Schedule: undefined;
}

const Tab = createBottomTabNavigator<AppTabParamList>();
const Stack = createStackNavigator<AppStackParamList>();

export function Tabs() {
    return (
        <Tab.Navigator screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName: React.ComponentProps<typeof Feather>['name'];

                if (route.name === 'Home') {
                    iconName = 'home'
                } else if (route.name === 'Perfil') {
                    iconName = 'user'
                } else {
                    iconName = 'search'
                }

                return <Feather name={iconName} size={size} color={color} />
            },
            tabBarStyle: { backgroundColor: theme.colors.b12, borderWidth: 0 }
        })}>
            <Tab.Screen name="Home" component={SchedulingScreen} />
            <Tab.Screen name="Perfil" component={PerfilUser} options={{ headerShown: false }} />
            <Tab.Screen name="Search" component={SearchEmployee} options={{
                headerShown: false
            }} />
        </Tab.Navigator>
    )
}

export default function AppRoutes() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Agendar" component={Tabs} />
            <Stack.Screen name="PerfilEmployer" component={PerfilEmployer} />
            <Stack.Screen name='Schedule' component={Schedule} options={{headerShown: true, headerStyle: { backgroundColor: 'transparent' }}} />
        </Stack.Navigator>
    )
}