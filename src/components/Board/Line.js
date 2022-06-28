import React from "react";
import {
    Text,
    View
} from "react-native";
import styles from "../../styles";
import Cell from "./Cell";

export default (props) => {
    const word = props.word
    return (
        <View style = {styles.line}>
        <Cell Letter = {word? word[0]: ''}/>
        <Cell Letter = {word? word[1]: ''}/>
        <Cell Letter = {word? word[2]: ''}/>
        <Cell Letter = {word? word[3]: ''}/>
        <Cell Letter = {word? word[4]: ''}/>
    </View>
    )
    
}