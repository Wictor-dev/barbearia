import React, {useRef, useMemo, useCallback} from "react";
import {FlatList, View, Text, TouchableOpacity} from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import { ItemList } from "../ItemList";
import { Button } from "../Button";
import { styles } from "./style";
import {Feather} from '@expo/vector-icons' 

const data = [
    {key: '1', 'name':'Corte simples', 'price': '20.00'},
    {key: '2','name': 'Manicure', 'price': '40.00'},
    {key: '3', 'name':'Platinar', 'price': '45.00'},
    {key: '4', 'name':'Escovar', 'price': '30.00'},
  ];
  
const ServicesList =  function (){
    

    const [serviceChoose, setServiceChoose] = React.useState(null);

    const getServiceChoose = () => serviceChoose;

    

    return <View>
        <FlatList 
            data={data} 
            renderItem = {
            ({ item }) => <ItemList name = {item.name} price = {item.price} id= {item.key} setServiceChoose = {setServiceChoose} getServiceChoose={getServiceChoose} />}
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