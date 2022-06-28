import React from "react";
import {
    Text,
    View
} from "react-native";
import styles from "../../styles";
import Line from "./Line";

export default (props) => {
    const actualLine = props.selLine
    //erro lógico: vincular a exbição ao actualLine, ele "some" com a palavra anterior
    return (
        <View style = {styles.container}>
            <Line word ={props.word[0]}/>
            <Line word ={props.word[1]}/>
            <Line word ={props.word[2]}/>
            <Line word ={props.word[3]}/>
            <Line word ={props.word[4]}/>
            <Line word ={props.word[5]}/>
        </View>
    )
    
    }