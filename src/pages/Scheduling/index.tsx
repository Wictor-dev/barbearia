import React, { useCallback, useRef, useMemo, useState, useEffect} from "react";
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import CardTile from "../../components/CardTile";
import styles from "./styles";
import { Feather,Fontisto, MaterialCommunityIcons } from '@expo/vector-icons'; 
import { BottomSheetServicesList } from "../../components/ServicesList";
import BottomSheet from '@gorhom/bottom-sheet';
import { BottomSheetSCalendar } from "../../components/CalendarView";
import { BottomSheetEmployeeList } from "../../components/EmployeeList";
import { useItem } from "../../context/ItemContext";
import { Button } from "../../components/Button";
import { theme } from "../../globals/style/theme";
import { api } from "../../service/api";



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

    const bottomSheetRefEmployee = useRef<BottomSheet>(null);
    const snapPointsEmployee = useMemo(() => ['60%'], []);
    const [isCloseBottomSheetEmployee, setIsCloseBottomSheetEmployee] = useState(true);
    const getIsCloseBottomSheetEmployee = () => isCloseBottomSheetEmployee;
    const [confirmBottomSheetEmployee, setConfirmBottomSheetEmployee] = useState(false);
    const getConfirmBottomSheetEmployee = () => confirmBottomSheetEmployee;

    // const handleSnapPressService = useCallback(() => {
    //     bottomSheetRefServices.current?.snapToIndex(0)
    //     }, []);

    const {idService, idEmployee} = useItem()
    const handleSnapPressService = () => {
            bottomSheetRefServices.current?.snapToIndex(0)
    };

    const handleSnapPressCalendar = useCallback(() => {
            bottomSheetRefCalendar.current?.snapToIndex(0)
            }, []);
    
    const handleSnapPressEmployee = useCallback(() => {
        bottomSheetRefEmployee.current?.snapToIndex(0)
    }, []);
    
    const handleSchedule = async() => {
        const params = {
            date: '2022-05-20',
            employee_id: idEmployee,
            customer_id: 9,
            services: [
                {
                    id: idService,
                    time: '11:00'
                }
            ]
        }
        try{
            await api.post('/scheduling', JSON.stringify(params), {
                "headers": {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer 6|ij8of7GiHQyaUb6tQGVh0MpT3DbCQUHwHyc4hnp6`
                }
            })


        } catch (e) {
            console.log(e)
        }
    }

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
                    <Text style={styles.subtitle}>{
                        !idService ? 'Escolha o serviço desejado' 
                        : !idEmployee ? 'Escolha o barbeiro desejado' : 'Agora escolha a data e hora de sua preferência'
                    }</Text>
                </View>
                
                
            </View>
            <View style={styles.block2}></View>
            <View style={styles.containerFloat}>
                <CardTile title="Serviços" icon={Feather} iconName="scissors" openBottomSheetFunction={handleSnapPressService} disabled={false} />
                <CardTile title="Barbeiro" icon={MaterialCommunityIcons} iconName="bow-tie" disabled={false} openBottomSheetFunction={handleSnapPressEmployee} />
                <CardTile title="Data e Horário " icon={Fontisto} iconName="date" openBottomSheetFunction={handleSnapPressCalendar}  disabled={false}/>
                <Button title="AGENDAR" size="large" style={idEmployee && idService ? { display: 'flex', alignSelf: 'flex-end'}: {display: 'none'}} color={theme.colors.b06} onPress={handleSchedule} />
            </View>
            
            <BottomSheetServicesList
                bottomSheetRef={bottomSheetRefServices}
                snapPoints={snapPointsServices}
                getIsClose={getIsCloseBottomSheetService}
                setIsClose={setIsCloseBottomSheetService}
                
            />

            <BottomSheetEmployeeList
                bottomSheetRef={bottomSheetRefEmployee}
                snapPoints={snapPointsEmployee}
                getIsClose={getIsCloseBottomSheetEmployee}
                setIsClose={setIsCloseBottomSheetEmployee}
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

