import React from "react";
import {
    Text,
    View
} from "react-native";
import styles from "../../styles";
import Key from "./Key";

export default (props) => (
    <View style = {styles.keyLine}>
        <Key keyLetter = 'Z'/>
        <Key keyLetter = 'X'/>
        <Key keyLetter = 'C'/>
        <Key keyLetter = 'V'/>
        <Key keyLetter = 'B'/>
        <Key keyLetter = 'N'/>
        <Key keyLetter = 'M'/>
        <Key keyLetter = 'ENTER'/>
    </View>
)