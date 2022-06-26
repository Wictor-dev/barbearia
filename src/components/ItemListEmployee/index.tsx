import React, { useState } from "react";
import { ColorValue, Text, View } from 'react-native';
import { style } from "./style";
import { RadioButton } from 'react-native-paper';
import { TouchableOpacity } from "@gorhom/bottom-sheet";
import {Ionicons} from '@expo/vector-icons';

type DataItem = {
    name : string,
    id: string,
    setServiceChoose : any,//(value:string) => void,
    getServiceChoose : any,//() => string,
}

type radioButtonProps = {
    setServiceChoose : (value:string) => void,
    getServiceChoose : () => string,

}
export function ItemListEmployee( {name, id, setServiceChoose, getServiceChoose} : DataItem){
    

    return (
        // <TouchableOpacity onPress={selectService}>
        <View style={style.container}>

            <View style = {style.card}>
                <View style = {style.avatarIcon} >
                    {/* Add photo porfile */}
                    <Ionicons name="person-circle-outline" size={50}  color="black" />
                </View>
                <Text style={style.textPrimary} >{name}</Text>
            </View>
            <View style={style.check} >
                <RadioButton
                    value={id}
                    onPress = { () => setServiceChoose(id) }
                    status = { id == getServiceChoose() ? 'checked' : 'unchecked' }
                />
            </View>
            
        </View>
        // </TouchableOpacity>
    )
}