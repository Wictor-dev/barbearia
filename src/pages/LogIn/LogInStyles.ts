import styled from "styled-components/native";
import { theme } from "../../globals/style/theme";

export const FormContainer = styled.View`
    width: 100%;
    background-color: ${theme.colors.b12};
    height: 500px;
    border-radius: 8px;
    align-items: center
    ;
`

export const Title = styled.Text`
    font-size: 32px;
    color: #fff;
    margin-bottom: 48px;
`