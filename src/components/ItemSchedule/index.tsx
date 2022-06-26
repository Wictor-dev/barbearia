import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './style';

type Props = {
    title:string
}

export function ItemSchedule({title} : Props){
    return (
        <View style={styles.container}>
            <View >
                <Text>{title}</Text>
            </View>
        </View>
    )
}