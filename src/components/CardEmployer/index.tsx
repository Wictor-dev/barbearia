import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { Text, View } from 'react-native';
import { AppStackParamList } from '../../routes/app.routes';
import { Button } from '../Button';
import { Container, DataContainer, PerfilContainer } from './CardEmployerStyles';

type PerfilScreenPageProps = StackNavigationProp<AppStackParamList, 'PerfilEmployer'>
type ScheduleScreenPageProps = StackNavigationProp<AppStackParamList, 'Schedule'>
export function CardEmployer() {
    const navigation = useNavigation<PerfilScreenPageProps>()

    function handleViewPerfil(){
        navigation.navigate('PerfilEmployer')
    }

    function handleMakeShedule(){
        navigation.navigate('Schedule')
    }

    return (
        <Container>
            <PerfilContainer></PerfilContainer>
            <DataContainer>
                <Text style={{ fontSize: 20 }}>Bessie Cooper</Text>
                <View style={{flexDirection: 'row'}}>
                    <Button title='VER PERFIL' size='small' border onPress={handleViewPerfil} />
                    <View style={{ width: 28 }} />
                    <Button title='AGENDAR' size='small' onPress={handleMakeShedule} />
                </View>
            </DataContainer>
        </Container>
    )
}