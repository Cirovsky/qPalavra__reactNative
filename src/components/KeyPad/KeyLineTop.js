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
            <Key keyLetter = 'Q' onClick ={eventClick}/>
            <Key keyLetter = 'W' onClick ={eventClick}/>
            <Key keyLetter = 'E' onClick ={eventClick}/>
            <Key keyLetter = 'R' onClick ={eventClick}/>
            <Key keyLetter = 'T' onClick ={eventClick}/>
            <Key keyLetter = 'Y' onClick ={eventClick}/>
            <Key keyLetter = 'U' onClick ={eventClick}/>
            <Key keyLetter = 'I' onClick ={eventClick}/>
            <Key keyLetter = 'O' onClick ={eventClick}/>
            <Key keyLetter = 'P' onClick ={eventClick}/>
        </View>
    )
}