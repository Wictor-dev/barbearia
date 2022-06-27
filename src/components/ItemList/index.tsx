import React, { useState } from "react";
import { ColorValue, Text, View } from 'react-native';
import { style } from "./style";
import { RadioButton } from 'react-native-paper';
import { TouchableOpacity } from "@gorhom/bottom-sheet";
import { useItem } from "../../context/ItemContext";

type DataItem = {
    name : string,
    price: string,
    id: string,
    setServiceChoose : React.Dispatch<React.SetStateAction<string>>,//(value:string) => void,
    getServiceChoose : any,//() => string,
}

type radioButtonProps = {
    setServiceChoose : (value:string) => void,
    getServiceChoose : () => string,

}
export function ItemList( {name, price, id, setServiceChoose, getServiceChoose} : DataItem){
    const { idService, setIdService} = useItem()

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
                    onPress = { () => setIdService(id) }
                    status = { id == idService ? 'checked' : 'unchecked' }
                />
            </View>
            
        </View>
        // </TouchableOpacity>
    )
}