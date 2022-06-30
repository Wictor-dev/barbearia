import React from "react";
import { View, Text, TouchableOpacityProps } from "react-native";
import { theme } from "../../globals/style/theme";
import { ButtonContainer } from "./ButtonStyles";

type ButtonProps = TouchableOpacityProps & {
    title: string,
    border?: boolean,
    size?: "small" | "medium" | "large",
    color?: string,
    textColor?: string,
    fill?: boolean,
}

export function Button({ title, border, size = 'large', color = theme.colors.b01, textColor = theme.colors.g12, fill, ...rest} : ButtonProps){
    const sizes = { 
        small: 12,
        medium: 16,
        large: 20
    }

    return (
        <ButtonContainer size={size} border={border} color={color} fill={fill} {...rest}> 
            <Text style={{fontSize: sizes[size], fontWeight: '600', color: textColor}}>{title}</Text>
            
        </ButtonContainer>
        
    )
}