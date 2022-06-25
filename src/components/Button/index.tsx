import React from "react";
import { View, Text } from "react-native";
import { theme } from "../../globals/style/theme";
import { ButtonContainer } from "./ButtonStyles";

type ButtonProps = {
    title: string,
    border?: boolean,
    size: string,
}

export function Button({ title, border, size = 'large'}: ButtonProps){
    const fontBtn = size === 'large' ? 24 : 12;
    return (
        <ButtonContainer size={size}>
            <Text style={{fontSize: fontBtn, fontWeight: '600', color: theme.colors.g12}}>{title}</Text>
            
        </ButtonContainer>
        
    )
}