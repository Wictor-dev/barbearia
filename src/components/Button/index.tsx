import React from "react";
import { View, Text } from "react-native";
import { theme } from "../../globals/style/theme";
import { ButtonContainer } from "./ButtonStyles";

type ButtonProps = {
    title: string,
    border?: boolean,
    size: string,
    color?: string,
}

export function Button({ title, border, size = 'large', color = theme.colors.b01}: ButtonProps){
    const fontBtn = size === 'large' ? 24 : 12;
    return (
        <ButtonContainer size={size} border={border} color={color}>
            <Text style={{fontSize: fontBtn, fontWeight: '600', color: theme.colors.g12}}>{title}</Text>
            
        </ButtonContainer>
        
    )
}