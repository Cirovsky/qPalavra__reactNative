import React from "react";
import {
    Dimensions,
    StyleSheet
} from "react-native";
import { Platform } from "react-native";

const totalLayout = Platform == "web"? Dimensions.get('window').width : Dimensions.get('window').height
const containerDimensions = totalLayout/5 * 3

const styles = StyleSheet.create({
        header:{
            flex: 0.3,
            justifyContent: 'center',
            alignItems: 'center'
        },
        headerText:{
            fontSize: totalLayout/16
        },
        main:{
            flex: 1
        },
        container:{
            flex: 0.90
        },
        cell:{
            justifyContent: 'center',
            alignItems: 'center',
            height: containerDimensions/8,
            width: containerDimensions/7,
            borderColor: '#305486',
            borderWidth: 3,
            borderRadius: containerDimensions/20,
            backgroundColor: '#9FBFC5',
            margin: totalLayout/400
        },
        line:{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center'

        },
        innerLetter:{
            fontSize: totalLayout/20,
            fontWeight: 'bold'
        },
        keyPad:{
            flex: 1,
            //flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#305486'
        },
        keyLine:{
            flexDirection: 'row',
            justifyContent: 'center',
            marginBottom: totalLayout/1000
        },
        key:{
            height: totalLayout/14,
            width: totalLayout/24,
            margin: totalLayout/500,
            backgroundColor: '#A3D1DB',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 4
        },
        keyLetter:{
            fontSize: totalLayout/40,
            fontWeight: "bold",
            color: '#333'
        }
    })

export default styles