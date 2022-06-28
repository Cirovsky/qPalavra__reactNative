import React from "react";
import {
    Text,
    View
} from "react-native";
import styles from "../../styles";
export default (props) => {
    const cellEffect = props.showStyle
    return (
        <View style = {[styles.cell,cellEffect]}>
            <Text style = {styles.innerLetter}>{props.Letter}</Text>
        </View>
    )
}