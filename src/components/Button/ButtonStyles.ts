import { TouchableOpacity } from "react-native";
import styled, {css} from "styled-components/native";
import { theme } from "../../globals/style/theme";

type ButtonContainerProps = {
    size: string;
    border?: boolean;
    color: string;
}
export const ButtonContainer = styled(TouchableOpacity)<ButtonContainerProps>`  
    padding: 8px;
    ${({size}) => size === 'large' && css`
        width: 200px;
        /* height: 50px; */
    `}
    ${({size}) => size === 'small' && css`
        width: 80px;
    `}

    /* ${({size}) => size === 'medium' && css`
        width: 92px;
    `} */

    
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