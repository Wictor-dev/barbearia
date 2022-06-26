import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'row',
        padding: 10,
    },
    card:{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingRight: 20,
        paddingLeft: 20,
    },
    textPrimary: {
        fontSize: 20
    },
    avatarIcon: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
        backgroundColor: '#ffd',
        width: 50,
        height: 50
    },
    check:{
        
    }
})