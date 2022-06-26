import React, {useRef, useMemo, useCallback} from "react";
import {View, Text} from 'react-native';
import {Calendar, CalendarList, Agenda,} from 'react-native-calendars';
import BottomSheet from '@gorhom/bottom-sheet';
import { FlatList } from "react-native-gesture-handler";
import { ItemSchedule } from "../ItemSchedule";



const CalendarView = () => {
    return (
        <View>
            <Calendar
  // Initially visible month. Default = now
  //initialDate={'2012-03-01'}
  // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
  minDate={'2022-05-10'}
  // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
  maxDate={'2022-09-30'}
  // Handler which gets executed on day press. Default = undefined
  onDayPress={day => {
    console.log('selected day', day);
  }}
  // Handler which gets executed on day long press. Default = undefined
  onDayLongPress={day => {
    console.log('selected day', day);
  }}
  // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
  monthFormat={'dd/MM/yyyy'}
  // Handler which gets executed when visible month changes in calendar. Default = undefined
  onMonthChange={month => {
    console.log('month changed', month);
  }}
  // Hide month navigation arrows. Default = false
  hideArrows={false}
  // Replace default arrows with custom ones (direction can be 'left' or 'right')
//   renderArrow={direction => <Arrow />}
  // Do not show days of other months in month page. Default = false
  hideExtraDays={true}
  // If hideArrows = false and hideExtraDays = false do not switch month when tapping on greyed out
  // day from another month that is visible in calendar page. Default = false
  disableMonthChange={true}
  // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday
  firstDay={1}
  // Hide day names. Default = false
  hideDayNames={true}
  // Show week numbers to the left. Default = false
  showWeekNumbers={true}
  // Handler which gets executed when press arrow icon left. It receive a callback can go back month
  onPressArrowLeft={subtractMonth => subtractMonth()}
  // Handler which gets executed when press arrow icon right. It receive a callback can go next month
  onPressArrowRight={addMonth => addMonth()}
  // Disable left arrow. Default = false
  disableArrowLeft={false}
  // Disable right arrow. Default = false
  disableArrowRight={false}
  // Disable all touch events for disabled days. can be override with disableTouchEvent in markedDates
  disableAllTouchEventsForDisabledDays={true}
  // Replace default month and year title with custom one. the function receive a date as parameter
//   renderHeader={date => {
//     /*Return JSX*/
//   }}
  // Enable the option to swipe between months. Default = false
  enableSwipeMonths={true}
/>
        </View>
    )
}

type ParamsBottomSheet = {
    bottomSheetRef : any,
    snapPoints : any,
    getIsClose: () => boolean,
    setIsClose: any
}

const BottomSheetSCalendar = function({bottomSheetRef,snapPoints, getIsClose, setIsClose}: ParamsBottomSheet){

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

    const data = [
        { "key" : 1,  "shedule": "08:00"},
        { "key" : 2,  "shedule": "08:40"},
        { "key" : 3,  "shedule": "09:00"},
        { "key" : 4,  "shedule": "09:40"},
    ]
  return  (
    
     <BottomSheet ref={bottomSheetRef} snapPoints={snapPoints} enablePanDownToClose={true}>
            <CalendarView/>
            <View >
                <FlatList
                
                    horizontal={true}
                    data={data}
                    ListFooterComponent={()=> <View style={{width: 10}}></View>}
                    ListHeaderComponent={()=> <View style={{width: 10}}></View>}
                    ItemSeparatorComponent={() => <View style={{width: 10}}></View>}
                    renderItem = { ({ item }) => <ItemSchedule title = {item.shedule} ></ItemSchedule>}
                />
            </View>
            
    </BottomSheet>
    
  );

        
  

}


export {CalendarView, BottomSheetSCalendar}