import React from 'react';
import { Text, View } from 'react-native';
import { Button } from '../Button';
import { Container, DataContainer, PerfilContainer } from './CardEmployerStyles';

export function CardEmployer() {
    return (
        <Container>
            <PerfilContainer></PerfilContainer>
            <DataContainer>
                <Text style={{ fontSize: 20 }}>Bessie Cooper</Text>
                <View style={{flexDirection: 'row'}}>
                    <Button title='VER PERFIL' size='small' />
                    <View style={{ width: 28 }} />
                    <Button title='AGENDAR' size='small' />

                </View>
            </DataContainer>
        </Container>
    )
}