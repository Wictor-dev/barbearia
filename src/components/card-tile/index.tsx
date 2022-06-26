import React from "react";
import { View, Text } from "react-native";
import style from './style'
import { MaterialIcons } from '@expo/vector-icons'; 


type PropsCard = {
    title: string;
    icon: any,
    iconName?: string
}


const CardTile = ({title, icon, iconName}: PropsCard) => {
    const TheIcon = icon;
    return <View style={style.containerMaster}>
        <View style={style.container}>
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
    </View>
}

export default CardTile;