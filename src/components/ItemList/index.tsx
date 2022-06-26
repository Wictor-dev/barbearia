import React, { useState } from "react";
import { ColorValue, Text, View } from 'react-native';
import { style } from "./style";
import { RadioButton } from 'react-native-paper';
import { TouchableOpacity } from "@gorhom/bottom-sheet";

type DataItem = {
    name : string,
    price: string,
    id: string,
    setServiceChoose : any,//(value:string) => void,
    getServiceChoose : any,//() => string,
}

type radioButtonProps = {
    setServiceChoose : (value:string) => void,
    getServiceChoose : () => string,

}
export function ItemList( {name, price, id, setServiceChoose, getServiceChoose} : DataItem){
    

    return (
        // <TouchableOpacity onPress={selectService}>
        <View style={style.container}>

            <View style = {style.card}>
                <Text style={style.textPrimary} >{name}</Text>
                <Text style={style.textSecondary} >{"R$ " + price}</Text>
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