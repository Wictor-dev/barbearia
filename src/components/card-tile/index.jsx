import React from "react";
import { View, Text } from "react-native";
import style from './style'
import { MaterialIcons } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons'; 




const CardTile = () => {
    return <View style={style.containerMaster}>
        <View style={style.container}>
            <View style={style.containerIconPrimary}>
                <Feather style={style.iconPrimary} name="scissors" size={30} color="black" />
            </View>
            <View style={style.containerContent}>
                <Text style={style.contentText}>Serviços</Text>
            </View>
            <View style={style.containerIconSecondary}>
                <MaterialIcons style={style.iconSecondary} name="arrow-forward-ios" size={20} color="black" />
            </View>

        </View>
    </View>
}

export default CardTile;