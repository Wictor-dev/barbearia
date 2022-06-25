import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        
    },
    menu: {

        backgroundColor: '#6ec6ff',
        position: 'absolute',
        top: 300,
        bottom: 300,
        
    },
    block1:{
        flex: 3,
        backgroundColor: 'black'
    },
    block2:{
        flex: 1,
        backgroundColor: 'white'
    }
});

export default styles;