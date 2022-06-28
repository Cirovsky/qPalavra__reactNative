import React from "react";
import {
    Text,
    View
} from "react-native";
import styles from "../../styles";
import Key from "./Key";

export default (props) =>{
    const eventClick = props.onClick
    return (
        <View style = {styles.keyLine}>
            <Key keyLetter = 'A' onClick ={eventClick}/>
            <Key keyLetter = 'S' onClick ={eventClick}/>
            <Key keyLetter = 'D' onClick ={eventClick}/>
            <Key keyLetter = 'F' onClick ={eventClick}/>
            <Key keyLetter = 'G' onClick ={eventClick}/>
            <Key keyLetter = 'H' onClick ={eventClick}/>
            <Key keyLetter = 'J' onClick ={eventClick}/>
            <Key keyLetter = 'K' onClick ={eventClick}/>
            <Key keyLetter = 'L' onClick ={eventClick}/>
            <Key keyLetter = '<' onClick ={eventClick}/>
        </View>
    )
}