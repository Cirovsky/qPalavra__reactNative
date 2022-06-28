import React from "react";
import {
    Text,
    View
} from "react-native";
import styles from "../../styles";
export default (props) => (
    <View style = {styles.cell}>
        <Text style = {styles.innerLetter}>{props.Letter}</Text>
    </View>
)