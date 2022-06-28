import React from "react";
import {
    Text,
    View
} from "react-native";
import styles from "../../styles";
import Key from "./Key";

export default (props) => (
    <View style = {styles.keyLine}>
        <Key keyLetter = 'Q'/>
        <Key keyLetter = 'W'/>
        <Key keyLetter = 'E'/>
        <Key keyLetter = 'R'/>
        <Key keyLetter = 'T'/>
        <Key keyLetter = 'Y'/>
        <Key keyLetter = 'U'/>
        <Key keyLetter = 'I'/>
        <Key keyLetter = 'O'/>
        <Key keyLetter = 'P'/>
    </View>
)