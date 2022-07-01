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
import HomeEmployee from "../pages/HomeEmployee";

export type AppTabParamList = {
    Home: undefined;
    Perfil: undefined;
}

export type AppStackParamList = {
    Agendar: undefined;
    PerfilEmployer: undefined;
    Schedule: undefined;
}

export type EmployeeTabStackParamList = {
    Home: undefined;
    Perfil: undefined;
}
export type EmployeeAppStackParamList = {
    HomeEmployee: undefined;
    PerfilEmployee: undefined;
}
const Tab = createBottomTabNavigator<AppTabParamList>();
const TabEmployee = createBottomTabNavigator<EmployeeTabStackParamList>();

const Stack = createStackNavigator<AppStackParamList>();
const EmployeeStack = createStackNavigator<EmployeeAppStackParamList>();
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
            <Tab.Screen name="Home" component={SchedulingScreen} options={{ headerShown: false}} />
            <Tab.Screen name="Perfil" component={PerfilUser} options={{ headerShown: false }} />
        </Tab.Navigator>
    )
}

export function AppRoutes() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Agendar" component={Tabs} />
            <Stack.Screen name="PerfilEmployer" component={PerfilEmployer} />
            <Stack.Screen name='Schedule' component={Schedule} options={{headerShown: true, headerStyle: { backgroundColor: 'transparent' }}} />
        </Stack.Navigator>
    )
}

export function TabsEmployee() {
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
            <Tab.Screen name="Home" component={HomeEmployee} options={{ headerShown: false}} />
            <Tab.Screen name="Perfil" component={PerfilEmployer} options={{ headerShown: false }} />
        </Tab.Navigator>
    )
}
export function EmployeeAppRoutes(){
    return (
        <EmployeeStack.Navigator screenOptions={{ headerShown: false }}>
            <EmployeeStack.Screen name="HomeEmployee" component={TabsEmployee} />
            <EmployeeStack.Screen name="PerfilEmployee" component={PerfilEmployer} />

        </EmployeeStack.Navigator>
    )
}