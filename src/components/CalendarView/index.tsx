import React, {useRef, useMemo, useCallback, useState, useEffect} from "react";
import {View, Text} from 'react-native';
import {Calendar,} from 'react-native-calendars';
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

    const data2 = [
      { "id" : 1,  "hour": "08:00"},
  ]

  const [data, setData] = useState(data2);
  const [loading, setLoading] = useState(true);
  const URL_REMOTE = "https://barber-scheduling.herokuapp.com/api"
  const URL_LOCAL = "http://192.168.0.5/barber_scheduling/public/api"
  const TOKEN_REMOTE = '1|1ktTUwbSkCgQAl55TKbkng87iZC3p3XxduSLiCt5'
  const TOKEN_LOCAL = "1aN1oG1GvQXDWfn5Ho02q6P8IA3TmMsFqkq3RAxJ"
  
  const employeeId = 4;
  
  const fetchData = async () => {

      let body : any = {
        date: '2022-06-30'
      }
      const resp = await fetch(`${URL_REMOTE}/user/employees/${employeeId}/schedule-available`,{
          headers : {
              "Content-Type" : "application/json",
              "Authorization": `Bearer ${TOKEN_REMOTE}`,
          },
          body: body,
          method: 'POST',
          
      });
      const data = await resp.json();
      setData(data);
      setLoading(false);
    };

    // useEffect(() => {
    //   fetchData();
    // }, []);

    

  return  (
    
     <BottomSheet ref={bottomSheetRef} snapPoints={snapPoints} enablePanDownToClose={true}>
            <CalendarView/>
            <View >
                <FlatList
                    key={'id'}
                    horizontal={true}
                    data={data}
                    ListFooterComponent={()=> <View style={{width: 10}}></View>}
                    ListHeaderComponent={()=> <View style={{width: 10}}></View>}
                    ItemSeparatorComponent={() => <View style={{width: 10}}></View>}
                    renderItem = { ({ item }) => <ItemSchedule title = {item.hour} ></ItemSchedule>}
                />
            </View>
            
    </BottomSheet>
    
  );

        
  

}


export {CalendarView, BottomSheetSCalendar}