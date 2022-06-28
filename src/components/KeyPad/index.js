import React from "react";
import {
    Text,
    View
} from "react-native";
import styles from "../../styles";
import KeyLineBottom from "./KeyLineBottom";
import KeyLineMidle from "./KeyLineMidle";
import KeyLineTop from "./KeyLineTop";

export default (props) => {
    const eventClick = props.onClick
    console.log(eventClick)
    return (
    
        <View style = {styles.keyPad}>
            <View style = {styles.keyLine}>
                <KeyLineTop onClick = {eventClick} />
            </View>
            <View style = {styles.keyLine}>
                <KeyLineMidle onClick = {eventClick} />
            </View>
            <View style = {styles.keyLine}>
                <KeyLineBottom onClick = {eventClick} />
            </View>
        </View>
    )
}

