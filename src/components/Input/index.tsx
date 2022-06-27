import React from "react";
import { Text, TextInput, TextInputProps, View } from "react-native";
import { InputContainer, InputText } from "./InputStyles";

export type InputProps = TextInputProps & {
    label?: string;
    placeholder?: string;
}
export function Input({ label, placeholder, ...rest }: InputProps){
    return (
        <InputContainer>
            {label && <Text style={{marginBottom: 4, fontSize: 16, color: '#fff'}}>{label}</Text>}
            <InputText 
                placeholder={placeholder} 
                {...rest}
            />
        </InputContainer>
    )
}