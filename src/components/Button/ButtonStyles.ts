import { TouchableOpacity } from "react-native";
import styled, {css} from "styled-components/native";
import { theme } from "../../globals/style/theme";

type ButtonContainerProps = {
    size: string;
    border?: boolean;
    color: string;
}
export const ButtonContainer = styled(TouchableOpacity)<ButtonContainerProps>`
    ${({size}) => size === 'large' && css`
        width: 160px;
        height: 40px;
    `}
    ${({size}) => size === 'small' && css`
        width: 80px;
        height: 24px;
    `}

    
    ${({border, color}) => border ? css`
        border-width: 2px;
        border-color: ${color};
    `: css`
        background-color: ${color};
    `}

    border-radius: 8px;
    align-items: center;
    justify-content: center;
`