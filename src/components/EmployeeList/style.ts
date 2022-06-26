import { StyleSheet } from "react-native";
import {theme} from '../../globals/style/theme'

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
    buttonWraper : {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '80%',
        marginBottom: 20,
        padding: 10,
        //backgroundColor: theme.colors.b08,
        borderRadius: 4
    },
    text: {
        textAlign: 'center',
    },
    iconContainer:{
        //flex: 1,
        justifyContent: 'center',
        backgroundColor: theme.colors.b08,
        padding: 10
    },
    textContainer:{
        justifyContent: 'center',
        backgroundColor: '#ffbc4e',
        width: 300,
        paddingBottom: 10,
        paddingTop: 10,
        borderRadius: 5,
    }

})