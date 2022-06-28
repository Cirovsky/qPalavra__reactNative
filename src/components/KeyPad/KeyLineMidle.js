import React from "react";
import {
    Text,
    View
} from "react-native";
import styles from "../../styles";
import Key from "./Key";

export default (props) => (
    <View style = {styles.keyLine}>
        <Key keyLetter = 'A'/>
        <Key keyLetter = 'S'/>
        <Key keyLetter = 'D'/>
        <Key keyLetter = 'F'/>
        <Key keyLetter = 'G'/>
        <Key keyLetter = 'H'/>
        <Key keyLetter = 'J'/>
        <Key keyLetter = 'K'/>
        <Key keyLetter = 'L'/>
        <Key keyLetter = '<'/>
    </View>
)