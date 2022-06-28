import React from "react";
import {
    Text,
    View
} from "react-native";
import styles from "../../styles";
import KeyLineBottom from "./KeyLineBottom";
import KeyLineMidle from "./KeyLineMidle";
import KeyLineTop from "./KeyLineTop";

export default (props) => (
    <View style = {styles.keyPad}>
        <View style = {styles.keyLine}>
            <KeyLineTop/>
        </View>
        <View style = {styles.keyLine}>
            <KeyLineMidle/>
        </View>
        <View style = {styles.keyLine}>
            <KeyLineBottom/>
        </View>
    </View>
)