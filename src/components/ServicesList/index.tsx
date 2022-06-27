import React, { useRef, useMemo, useCallback, useEffect, useState } from "react";
import { FlatList, View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import { ItemList } from "../ItemList";
import { Button } from "../Button";
import { styles } from "./style";
import { Feather } from '@expo/vector-icons'
import { api } from "../../service/api";
import { theme } from "../../globals/style/theme";

const ServicesList = function () {

    const data2 = [
        { id: '1', name: 'Corte simples', price: '20.00' },
    ];

    const [data, setData] = useState(data2);
    const [loading, setLoading] = useState(true);
    const URL_REMOTE = "https://barber-scheduling.herokuapp.com/api"
    const URL_LOCAL = "http://192.168.0.5/barber_scheduling/public/api"
    const TOKEN_REMOTE = '6|ij8of7GiHQyaUb6tQGVh0MpT3DbCQUHwHyc4hnp6'
    const TOKEN_LOCAL = "1aN1oG1GvQXDWfn5Ho02q6P8IA3TmMsFqkq3RAxJ"

    const fetchData = async () => {
        try {
            const { data } = await api.get('/service', {
                "headers": {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${TOKEN_REMOTE}`
                }
            })
            await new Promise(resolve => setTimeout(resolve, 2000))
            setData(data);
            setLoading(false);
        } catch (e) {
            console.log(e)
        }

    };

    useEffect(() => {
        fetchData();
    }, []);
    const [serviceChoose, setServiceChoose] = useState('');

    const getServiceChoose = () => serviceChoose;



    return loading ? <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color={theme.colors.g10} />
    </View> : <View>
        <FlatList
            data={data}
            renderItem={
                ({ item, index }) => <ItemList name={item.name} price={item.price} id={item.id} key={`${item.id}${index}`} setServiceChoose={setServiceChoose} getServiceChoose={getServiceChoose} />}
            ItemSeparatorComponent={() => <View style={{ height: 5 }} />}

        />

    </View>
}

type ParamsBottomSheet = {
    bottomSheetRef: any,
    snapPoints: any,
    getIsClose: () => boolean,
    setIsClose: any
}

const BottomSheetServicesList = function ({ bottomSheetRef, snapPoints, getIsClose, setIsClose }: ParamsBottomSheet) {

    // callbacks
    const handleSnapPress = useCallback((index) => {
        setIsClose(false)
        bottomSheetRef.current?.snapToIndex(index)
    }, []);

    const handleCloseBottomSheet = useCallback((index) => {
        setIsClose(true)
        bottomSheetRef.current.close()
    }, []);

    const handleConfirmBottomSheet = useCallback((index) => {
        setIsClose(true)
        bottomSheetRef.current.close()
    }, []);


    return (

        <BottomSheet ref={bottomSheetRef} snapPoints={snapPoints} enablePanDownToClose={true}>
            <ServicesList />
            {/* <View style={styles.container}>
                <View style={styles.buttonWraper}>
                    <View style={styles.textContainer}>
                        <TouchableOpacity onPress={handleConfirmBottomSheet}>
                            <Text style={styles.text} >CONFIRMAR</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View> */}
            <View style={{flex: 1, alignItems: 'center', paddingTop: 40}}>
                <Button title="CONFIRMAR" color={theme.colors.b10} textColor={theme.colors.b01} size="large" onPress={handleConfirmBottomSheet}/>
            </View>

        </BottomSheet>

    );




}

export { BottomSheetServicesList }