import styled from 'styled-components/native'
import { theme } from '../../globals/style/theme'

export const Container = styled.View`
    width: 100%;
    height: 400px;
    border-radius: 8px;
    align-items: center;
    padding: 12px;
`

export const Element = styled.View`
    height: 64px;
    width: 100%;
`
export const Select = styled.View`
    width: 100%;
    height: 40px;
    background-color: ${theme.colors.g02};
    border-radius: 8px;
    padding: 0 12px;
    justify-content: center;
`

export const Label = styled.Text`
    font-size: 20px;
    color: #fff;
`