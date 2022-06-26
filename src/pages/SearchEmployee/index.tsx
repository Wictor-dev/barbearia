import React from 'react';
import { ImageBackground, View } from 'react-native';
import { CardEmployer } from '../../components/CardEmployer';
import { Input } from '../../components/Input';
import { Container } from './SearchEmployee';

export function SearchEmployee(){
    return (
        <ImageBackground source={require('../../assets/images/backgroundStreet.png')} resizeMode='cover' style={{flex: 1}}>
            <Container>
                <Input placeholder='Pesquisar barbeiro' style={{ marginBottom: 60 }} />
                <CardEmployer />
                <View style={{height: 20}} />
                <CardEmployer />
            </Container>
        </ImageBackground>
    )
}