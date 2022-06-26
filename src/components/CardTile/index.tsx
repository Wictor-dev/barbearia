import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import style from './style'
import { MaterialIcons } from '@expo/vector-icons'; 


type PropsCard = {
    title: string;
    icon: any,
    iconName?: string,
    openBottomSheetFunction?: () => void,//(index : any , bottomRef: any) => void
    disabled: boolean

}


const CardTile = ({title, icon, iconName, openBottomSheetFunction, disabled}: PropsCard) => {
    const TheIcon = icon;
    return (
    <TouchableOpacity disabled={disabled} onPress = {openBottomSheetFunction}>
     <View style={{opacity: (disabled ?  0.5: 1),...style.container}} >
            <View style={style.containerIconPrimary}>
                <TheIcon style = {style.iconPrimary} name = {iconName} size = {40} color = "white" ></TheIcon>
            </View>
            <View style={style.containerContent}>
                <Text style={style.contentText}>{title}</Text>
                <MaterialIcons style={style.iconSecondary} name="arrow-forward-ios" size={20} color="black" />
            </View>
            {/* <View style={style.containerIconSecondary}>
                <MaterialIcons style={style.iconSecondary} name="arrow-forward-ios" size={20} color="black" />
            </View> */}

        </View>
    </TouchableOpacity>)
}

export default CardTile;