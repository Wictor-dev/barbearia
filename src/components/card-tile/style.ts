import { StyleSheet } from "react-native";

const style = StyleSheet.create({

    containerMaster:{
        //margin: 10,
        borderRadius: 30,
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        width: 350,
        height: 50
    },
    iconPrimary:{
        padding: 5
    },
    containerIconPrimary:{
        // width: 40,
        // height: 40,
        backgroundColor: '#2196f3'
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
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    contentText:{
        fontSize: 24,
    }
});

export default style;