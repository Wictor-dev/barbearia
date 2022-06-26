import React, { useCallback, useRef, useMemo, useState} from "react";
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import CardTile from "../../components/CardTile";
import styles from "./styles";
import { Feather,Fontisto, MaterialCommunityIcons } from '@expo/vector-icons'; 
import { BottomSheetServicesList } from "../../components/ServicesList";
import BottomSheet from '@gorhom/bottom-sheet';
import { BottomSheetSCalendar } from "../../components/CalendarView";



export function SchedulingScreen() {

    const [disableBarberCard, setDisableBarberCard] = useState(true);
    const [disableCalendarCard, setDisableCalendarCard] = useState(true);

    const bottomSheetRefServices = useRef<BottomSheet>(null);
    const snapPointsServices = useMemo(() => ['60%'], []);
    const [isCloseBottomSheetService, setIsCloseBottomSheetService] = useState(true);
    const getIsCloseBottomSheetService = () => isCloseBottomSheetService;
    const [confirmBottomSheetService, setConfirmBottomSheetService] = useState(false);
    const getConfirmBottomSheetService = () => confirmBottomSheetService;

    const bottomSheetRefCalendar = useRef<BottomSheet>(null);
    const snapPointsCalendar= useMemo(() => ['60%'], []);
    const [isCloseBottomSheetCalendar, setIsCloseBottomSheetCalendar] = useState(true);
    const getIsCloseBottomSheetCalendar = () => isCloseBottomSheetService;
    const [confirmBottomSheetCalendar, setConfirmBottomSheetCalendar] = useState(false);
    const getConfirmBottomSheetCalendar = () => confirmBottomSheetCalendar;

    const handleSnapPressService = useCallback(() => {
        bottomSheetRefServices.current?.snapToIndex(0)
        }, []);

    const handleSnapPressCalendar = useCallback(() => {
            bottomSheetRefCalendar.current?.snapToIndex(0)
            }, []);
    
    return (
        <View style={styles.container}>
    
            <View style={styles.block1}>

                <View style={styles.image}>
                    <Text style={styles.title}>Dude's Barber Shop.</Text>
                    <Image 
                        style = {{width: 300, height: 300}}   
                        source={require('../../assets/images/barber-logo2.png')}
                        width = {300}
                        height = {300}
                        resizeMode="center"
                        //resizeMethod="resize"
                        />
                    <Text style={styles.subtitle}>Escolha agora um horário que se encaixe em sua preferência.</Text>
                </View>
                
                
            </View>
            <View style={styles.block2}></View>
            <View style={styles.containerFloat}>
                <CardTile title="Serviços" icon={Feather} iconName="scissors" openBottomSheetFunction={handleSnapPressService} disabled={false} />
                <CardTile title="Barbeiro" icon={MaterialCommunityIcons} iconName="bow-tie" disabled={false} />
                <CardTile title="Data e Horário " icon={Fontisto} iconName="date" openBottomSheetFunction={handleSnapPressCalendar}  disabled={false}/>
            </View>

            <BottomSheetServicesList
                bottomSheetRef={bottomSheetRefServices}
                snapPoints={snapPointsServices}
                getIsClose={getIsCloseBottomSheetService}
                setIsClose={setIsCloseBottomSheetService}
            />

            <BottomSheetSCalendar
                bottomSheetRef={bottomSheetRefCalendar}
                snapPoints={snapPointsCalendar}
                getIsClose={getIsCloseBottomSheetCalendar}
                setIsClose={setIsCloseBottomSheetCalendar}
            />
        </View>
    )
}

