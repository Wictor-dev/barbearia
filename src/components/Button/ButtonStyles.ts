import styled, {css} from "styled-components/native";
import { theme } from "../../globals/style/theme";

type ButtonContainerProps = {
    size: string;
}
export const ButtonContainer = styled.TouchableOpacity<ButtonContainerProps>`
    ${({size}) => size === 'large' && css`
        width: 160px;
        height: 40px;
    `}
    ${({size}) => size === 'small' && css`
        width: 80px;
        height: 24px;
    `}

    background-color: ${theme.colors.b01};
    border-radius: 8px;
    align-items: center;
    justify-content: center;
`