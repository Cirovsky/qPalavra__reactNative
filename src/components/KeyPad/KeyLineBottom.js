import React from "react";
import {
    Text,
    View
} from "react-native";
import styles from "../../styles";
import Key from "./Key";

export default (props) => {
    const eventClick = props.onClick
    return (
        <View style = {styles.keyLine}>
            <Key keyLetter = 'Z' onClick ={eventClick}/>
            <Key keyLetter = 'X' onClick ={eventClick}/>
            <Key keyLetter = 'C' onClick ={eventClick}/>
            <Key keyLetter = 'V' onClick ={eventClick}/>
            <Key keyLetter = 'B' onClick ={eventClick}/>
            <Key keyLetter = 'N' onClick ={eventClick}/>
            <Key keyLetter = 'M' onClick ={eventClick}/>
            <Key keyLetter = 'ENTER' onClick ={eventClick}/>
        </View>
    )
}