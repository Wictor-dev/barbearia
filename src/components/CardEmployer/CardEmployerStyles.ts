import styled from 'styled-components/native';
import { theme } from '../../globals/style/theme';

export const Container = styled.View`
    width: 100%;
    height: 116px;
    background-color: ${theme.colors.g02};
    border-radius: 8px;
    justify-content: center;
    padding: 12px;
    flex-wrap: wrap;
`

export const PerfilContainer = styled.View`
    border-radius: 8px;
    height: 100%;
    width: 92px;
    background-color: gray;
`

export const DataContainer = styled.View`
    border-width: 1px;
    border-color: ${theme.colors.g02};
    flex: 1;
    justify-content: space-between;
`