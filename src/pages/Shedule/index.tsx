import React from 'react';
import { ImageBackground, Text } from 'react-native';
import { Container, Element, Label, Select } from './ScheduleStyles';
import { BlurView} from 'expo-blur';
import { Input } from '../../components/Input';

export function Schedule(){
    return (
        <ImageBackground 
            source={require('../../assets/images/backgroundStreet.png')} 
            resizeMode="cover" 
            style={{ flex: 1, justifyContent: 'center', paddingRight: 12, paddingLeft: 12}}
        >
            <BlurView intensity={50} tint="dark">
                <Container>
                    <Element>
                        <Label>Serviço</Label>
                        <Select>
                            <Text>Tranças</Text>
                        </Select>
                    </Element>
                </Container>
            </BlurView>
        </ImageBackground>
    )
}