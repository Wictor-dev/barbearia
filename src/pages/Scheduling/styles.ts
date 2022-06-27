import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop:24
        //Index: 0
    },
    menu: {

       
        
    },
    block1:{
        flex: 3,
        backgroundColor: 'black',
        //zIndex: 2
    },
    block2:{
        flex: 1,
        backgroundColor: '#dbdbdb',//'#8d5a21',
        //zIndex: 2
    },
    containerFloat:{
        flexDirection: 'column',
        justifyContent: 'space-around',
        //backgroundColor: '#6ec6ff',
        position: 'absolute',
        width: '90%',
        // height: 200,
        height: 'auto',
        //zIndex: 5,
        alignSelf: 'center',
        bottom: '3%'
    },
    image:{
        flex: 1,
        flexDirection: 'column',
        //justifyContent: 'center',
        alignItems: 'center'

    },
    subtitle:{
        fontSize: 20,
        color: 'white',
        textAlign: 'center',
        marginTop: 24
    },
    title:{
        fontSize: 20,
        color: '#ffbc4e',
        textAlign: 'center',
        marginTop: 20
    }
});

export default styles;