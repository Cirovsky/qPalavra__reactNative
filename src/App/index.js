import React, { Component } from "react";
import {
    SafeAreaView,
    View,
    Text,
    Alert
}
    from "react-native";
import Board from "../components/Board";
import KeyPad from "../components/KeyPad";
import styles from "../styles";
import { checkRiddleHint } from "./logic";

export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = this.creatState()
    }

    creatState = () => {
        return {
            board:{
                arrayHint: [
                    ['', '', '', '', ''],
                    ['', '', '', '', ''],
                    ['', '', '', '', ''],
                    ['', '', '', '', ''],
                    ['', '', '', '', ''],
                    ['', '', '', '', '']],
                arrayHits: [
                    [false,false,false, false, false],
                    [false,false,false, false, false],
                    [false,false,false, false, false],
                    [false,false,false, false, false],
                    [false,false,false, false, false],
                    [false,false,false, false, false],
                ],
            },
            index: 0,
            line: 0,
            won: false,
            lost: false
        }

    }

    showLetter = (letter) => {

        const arrayHint = this.state.board.arrayHint
        const arrayHits = this.state.board.arrayHits
        let index = this.state.index
        let line = this.state.line
        let won = this.state.won
        let lost = this.state.lost

        lost = line > 5 ? true : false
        if (lost) {
            return Alert.alert('Você perdeu!')
        } else if (letter == 'ENTER') {
            if (index == 5){
                index = 0
                arrayHits[line] = checkRiddleHint(arrayHint[line])
                line = line + 1
                this.setState({ arrayHint, index, line, won, lost })
            }else{
                return
            }
        } else if (index < 5) {
            if (letter == '<'){
                if(index === 0){
                    return
                }else{
                    index = index - 1
                    arrayHint[line].splice(index, 1, '')
                    this.setState({ arrayHint, index, line, won, lost })
                }
            }else{
                arrayHint[line].splice(index, 1, letter)
                index = index + 1
                this.setState({ arrayHint, index, line, won, lost })
            }
        }

}

render(){

    return (
        <SafeAreaView style={styles.main}>
            <View style={styles.header}>
                <Text style={styles.headerText}>
                    Qpalavra
                </Text>
            </View>
            <View style={styles.container}>
                <Board board={this.state.board} selLine={this.state.line} />
            </View>
            <View style={[styles.container, { flex: 0.5 }]}>
                <KeyPad onClick={this.showLetter} />
            </View>
        </SafeAreaView>
    )

}
        
}

