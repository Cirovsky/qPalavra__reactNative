import React from "react";
import {
    StyleSheet
} from "react-native";

const styles = StyleSheet.create({
        header:{
            flex: 0.2,
            justifyContent: 'center',
            alignItems: 'center'
        },
        headerText:{
            fontSize: 30
        },
        main:{
            flex: 1
        },
        container:{
            flex: 1
        },
        cell:{
            justifyContent: 'center',
            alignItems: 'center',
            height: 60,
            width: 50,
            borderStyle: 'solid',
            borderSize: 10,
            borderColor: '#000',
            backgroundColor: '#CCC',
            margin: 2
        },
        line:{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center'

        },
        innerLetter:{
            fontSize: 40,
            fontWeight: 'bold'
        },
        keyPad:{
            flex: 1,
            //flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        },
        keyLine:{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center'
        },
        key:{
            height: 55,
            width: 35,
            marginTop: 5,
            margin: 1,
            backgroundColor: '#666',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 4
        },
        keyLetter:{
            fontSize: 20,
            color: '#FFF'
        }
    })

export default styles