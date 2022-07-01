import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import Picker from "react-native-picker-select";
import { SelectView } from "./style";
import SelectDropdown from "react-native-select-dropdown";

type SelectProps = {
    data: any[];
    onChangeValue(value: number): void;
    defaultMessage?: string;
}
export function Select({data, onChangeValue, defaultMessage} : SelectProps){
    return (
        <SelectDropdown
            data={data}
            onSelect={(selectedItem, index) => {
                onChangeValue(index)
            }}

            buttonTextAfterSelection={(selectedItem, index) => {
                // text represented after item is selected
                // if data array is an array of objects then return selectedItem.property to render after item is selected
                return selectedItem.name
            }}
            rowTextForSelection={(item, index) => {
                // text represented for each item in dropdown
                // if data array is an array of objects then return item.property to represent item in dropdown
                return item.name
            }}

            buttonStyle={styles.container}
            defaultButtonText={defaultMessage ? defaultMessage : "Escolha uma opção"}
            dropdownStyle={{borderRadius: 5}}
        />

    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        width: 300,
        height: 32
    }
});

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        fontSize: 16,
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 4,
        color: 'black',
        paddingRight: 30 // to ensure the text is never behind the icon
    },
    inputAndroid: {
        fontSize: 16,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderWidth: 0.5,
        borderColor: 'purple',
        borderRadius: 8,
        color: 'black',
        paddingRight: 30 // to ensure the text is never behind the icon
    }
});