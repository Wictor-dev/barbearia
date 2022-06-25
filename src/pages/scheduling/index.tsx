import React from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CardTile from "../../components/card-tile";
import styles from "./styles";


export function SchedulingScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.block1}></View>
            <View style={styles.menu}>
                <CardTile/>
            </View>
            <View style={styles.block2}></View>
        </View>
    )
}