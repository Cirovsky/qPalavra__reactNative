import React from "react";
import {
    Text,
    View
} from "react-native";
import styles from "../../styles";
import Cell from "./Cell";

export default (props) => {
    const word = props.word
    const cellEffect = props.showStyle
    return (
        <View style = {styles.line}>
        <Cell Letter = {word? word[0]: ''} showStyle = {cellEffect[0]}/>
        <Cell Letter = {word? word[1]: ''} showStyle = {cellEffect[1]}/>
        <Cell Letter = {word? word[2]: ''} showStyle = {cellEffect[2]}/>
        <Cell Letter = {word? word[3]: ''} showStyle = {cellEffect[3]}/>
        <Cell Letter = {word? word[4]: ''} showStyle = {cellEffect[4]}/>
    </View>
    )
    
}