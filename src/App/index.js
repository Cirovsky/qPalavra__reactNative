import React, {useState} from "react";
import{
    SafeAreaView,
    View,
    Text,
    TouchableOpacity,
}
from "react-native";
import Board from "../components/Board";
import KeyPad from "../components/KeyPad";
import styles from "../styles";

export default () => {
    const [arrayHint, SetArrayHint] = useState(['TEST1'])
    const [nextLine, SetNextLine] = useState(0)

    return (
        <SafeAreaView style = {styles.main}>
            <View style = {styles.header}>
                <Text style = {styles.headerText}>
                    Qpalavra
                </Text>
            </View>
            <View style = {styles.container}>
                <Board word ={arrayHint[nextLine]} selLine={nextLine}/>
            </View>
            <View style = {[styles.container, {flex: 0.5}]}>
                <KeyPad/>
            </View>
        </SafeAreaView>
    )
}

