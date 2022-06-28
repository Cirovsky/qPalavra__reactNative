import React from "react";
import {
    Text,
    View
} from "react-native";
import styles from "../styles";
import Line from "./Line";

export default (props) => {
    const actualLine = props.selLine
    return (
        <View style = {styles.container}>
            <Line word ={actualLine == 0? props.word : ''}/>
            <Line word ={actualLine == 1? props.word : ''}/>
            <Line word ={actualLine == 2? props.word : ''}/>
            <Line word ={actualLine == 3? props.word : ''}/>
            <Line word ={actualLine == 4? props.word : ''}/>
            <Line word ={actualLine == 5? props.word : ''}/>
        </View>
    )
    
    }