import styled from "styled-components/native";
import { PerfilContainer } from "../../components/CardEmployer/CardEmployerStyles";
import { theme } from "../../globals/style/theme";

export const Container = styled.View`
    background-color: ${theme.colors.g01};
    border-top-left-radius: 28px;
    border-top-right-radius: 28px;
    height: 80%;
    width: 100%;
    align-self: flex-end;
    padding: 16px 20px;
    z-index: 1;
`

export const Title = styled.Text`
    font-size: 28px;
    align-self: flex-end;
`

export const PerfilArea = styled(PerfilContainer)`
    height: 100px;  
    width: 100px;
    position: absolute;
    top: 15%;
    margin-left: 24px;
    z-index: 5;
`