import React from "react";
import {
    Text,
    View
} from "react-native";
import styles from "../../styles";

export default (props) => (
    <View style = {[styles.key, 
    props.keyLetter ==='ENTER'? {width: 70}: '',
    props.keyLetter ==='<'? {width: 25, marginLeft: 5}: '',
    props.keyLetter ==='A'? {marginLeft: 10}: '']}>
        <Text style = {[styles.keyLetter,
        props.keyLetter === 'ENTER'? {fontSize: 15}: '']}>
            {props.keyLetter}
        </Text>
    </View>
)