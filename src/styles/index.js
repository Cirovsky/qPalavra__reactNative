import React from "react";
import {
    Dimensions,
    StyleSheet
} from "react-native";

const totalHeight = Dimensions.get('window').height
const totalWidht = Dimensions.get('window').width

const styles = StyleSheet.create({
        header:{
            flex: 0.2,
            justifyContent: 'center',
            alignItems: 'center'
        },
        headerText:{
            fontSize: totalHeight/16
        },
        main:{
            flex: 1
        },
        container:{
            flex: 1,
            marginBottom: totalHeight/250
        },
        cell:{
            justifyContent: 'center',
            alignItems: 'center',
            height: totalHeight/11,
            width: totalWidht/7,
            borderColor: '#000',
            backgroundColor: '#888',
            margin: totalHeight/300
        },
        line:{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center'

        },
        innerLetter:{
            fontSize: totalHeight/20,
            fontWeight: 'bold'
        },
        keyPad:{
            flex: 1,
            //flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        },
        keyLine:{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center'
        },
        key:{
            height: totalHeight/11,
            width: totalWidht/11,
            marginTop: totalHeight/400,
            margin: totalWidht/300,
            backgroundColor: '#666',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 4
        },
        keyLetter:{
            fontSize: totalHeight/40,
            color: '#FFF'
        }
    })

export default styles