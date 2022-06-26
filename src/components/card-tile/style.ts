import { StyleSheet } from "react-native";
import {theme} from '../../globals/style/theme';

const style = StyleSheet.create({

    containerMaster:{
        //margin: 10,
        //borderRadius: 40,
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        width: 350,
        height: 50,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
    },
    iconPrimary:{
        padding: 5
    },
    containerIconPrimary:{
        // width: 40,
        // height: 40,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: theme.colors.b07,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,

    },
    containerIconSecondary:{
        flexDirection: 'column',
        justifyContent: 'center',
    },
    iconSecondary:{
        //padding: 5,
        paddingRight: 20,
    },
    containerContent: {
        flex: 4,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
            
    },
    contentText:{
        fontSize: 24,
        marginLeft: 10,
        //fontFamily: ''
    }
});

export default style;