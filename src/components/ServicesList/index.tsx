import React, {useRef, useMemo, useCallback, useEffect, useState} from "react";
import {FlatList, View, Text, TouchableOpacity} from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import { ItemList } from "../ItemList";
import { Button } from "../Button";
import { styles } from "./style";
import {Feather} from '@expo/vector-icons' 


const ServicesList =  function (){


    const data2 = [
        {id: '1', name:'Corte simples', price: '20.00'},
    ];

    const [data, setData] = useState(data2);
    const [loading, setLoading] = useState(true);
    const URL_REMOTE = "https://barber-scheduling.herokuapp.com/api"
    const URL_LOCAL = "http://192.168.0.5/barber_scheduling/public/api"
    const TOKEN_REMOTE = '1|1ktTUwbSkCgQAl55TKbkng87iZC3p3XxduSLiCt5'
    const TOKEN_LOCAL = "1aN1oG1GvQXDWfn5Ho02q6P8IA3TmMsFqkq3RAxJ"
    
    const fetchData = async () => {
        const resp = await fetch(`${URL_REMOTE}/service`,{
            "headers": {
                "Content-Type" : "application/json",
                "Authorization": `Bearer ${TOKEN_REMOTE}`,
            }
        });
        const data = await resp.json();
        setData(data);
        setLoading(false);
      };
    
      useEffect(() => {
        fetchData();
      }, []);
    const [serviceChoose, setServiceChoose] = React.useState(null);

    const getServiceChoose = () => serviceChoose;

    

    return <View>
        <FlatList data={data} renderItem = {
            ({ item }) => <ItemList name = {item.name} price = {item.price} key="id" id= {item.id} setServiceChoose = {setServiceChoose} getServiceChoose={getServiceChoose} />}
            ItemSeparatorComponent = {()=><View style={{height: 5}}/>}
            
             />

    </View>
}

type ParamsBottomSheet = {
    bottomSheetRef : any,
    snapPoints : any,
    getIsClose: () => boolean,
    setIsClose: any
}

const BottomSheetServicesList = function({bottomSheetRef,snapPoints, getIsClose, setIsClose}: ParamsBottomSheet){

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


  return  (
    
     <BottomSheet ref={bottomSheetRef} snapPoints={snapPoints} enablePanDownToClose={true}>
            <ServicesList/>
            <View style={styles.container}>
                <View style={styles.buttonWraper}>
                    <View style={styles.textContainer}>
                        <TouchableOpacity onPress={handleConfirmBottomSheet}>
                            <Text style={styles.text} >Confirmar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            
    </BottomSheet>
    
  );

        
  

}

export {BottomSheetServicesList}