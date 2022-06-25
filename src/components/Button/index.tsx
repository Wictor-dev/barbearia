import React from "react";
import { View, Text } from "react-native";
import { theme } from "../../globals/style/theme";

export function Button(){
    return (
        <View style={{height: 40, width: 160, backgroundColor: theme.colors.b01, borderRadius: 8, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{fontSize: 24}}>Entrar</Text>
        </View>
    )
}