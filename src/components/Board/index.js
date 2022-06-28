import React from "react";
import {
    Text,
    View
} from "react-native";
import styles from "../../styles";
import Line from "./Line";

export default (props) => {
    const onWord = props.board.arrayHint
    const onStyle = props.board.arrayHits
    const actualLine = props.selLine
    return (
        <View style = {styles.container}>
            <Line word ={onWord[0]} showStyle = {onStyle[0]}/>
            <Line word ={onWord[1]} showStyle = {onStyle[1]}/>
            <Line word ={onWord[2]} showStyle = {onStyle[2]}/>
            <Line word ={onWord[3]} showStyle = {onStyle[3]}/>
            <Line word ={onWord[4]} showStyle = {onStyle[4]}/>
            <Line word ={onWord[5]} showStyle = {onStyle[5]}/>
        </View>
    )
    
    }