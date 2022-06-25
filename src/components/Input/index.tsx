import React from "react";
import { Text, TextInput, TextInputProps, View } from "react-native";
import { InputContainer, InputText } from "./InputStyles";

type InputProps = TextInputProps & {
    label: string;
}
export function Input({ label }: InputProps){
    return (
        <InputContainer>
            <Text style={{marginBottom: 4, fontSize: 16, color: '#fff'}}>{label}</Text>
            <InputText />
        </InputContainer>
    )
}