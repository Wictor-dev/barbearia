import styled from "styled-components/native";
import { PerfilContainer } from "../../components/CardEmployer/CardEmployerStyles";
import { theme } from "../../globals/style/theme";

export const Container = styled.View`
    background-color: ${theme.colors.g01};
    border-top-left-radius: 28px;
    border-top-right-radius: 28px;
    height: 80%;
    border-width: 1px;
    width: 100%;
    align-self: flex-end;
    padding: 16px 20px;
    z-index: 1;
    align-items: flex-end;
    padding-top: 72px;
`

export const Title = styled.Text`
    font-size: 28px;
    /* align-self: flex-end; */
    margin-bottom: 92px;
    color: ${theme.colors.b11};
    font-weight: bold;
`

export const PerfilArea = styled(PerfilContainer)`
    height: 100px;  
    width: 100px;
    position: absolute;
    top: 15%;
    margin-left: 24px;
    z-index: 5;
`

export const ServicesContainer = styled.View`
    /* flex: 1; */
    width: 100%;
    align-items: flex-start;
`

export const ServiceContainer = styled.View`
    width: 100%;
    height: 52px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
`