import styled from 'styled-components/native';
import { theme } from '../../globals/style/theme';

export const Container = styled.View`
    width: 100%;
    height: 116px;
    background-color: ${theme.colors.g02};
    border-radius: 8px;
    justify-content: center;
    padding: 12px;
    flex-direction: row;
`

export const PerfilContainer = styled.View`
    border-radius: 8px;
    height: 100%;
    width: 92px;
    background-color: gray;
`

export const DataContainer = styled.View`
    flex: 1;
    justify-content: space-between;
    padding-left: 40px;
`