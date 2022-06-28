import React, { Component } from "react";
import{
    SafeAreaView,
    View,
    Text,
}
from "react-native";
import Board from "../components/Board";
import KeyPad from "../components/KeyPad";
import styles from "../styles";


let word = ['TEST0','TEST1','TEST2', 'TEST3', 'TEST4','TEST5']

export default class App extends Component {
    constructor(props){
        super(props)
        this.state = this.creatState()
    }

    creatState = () => {
        return {
            arrayHint: word,
            nextLine: 0
        }

    }
    
    showLetter = (letter) => {
        const word = this.state.arrayHint
        word.splice(0,1,letter)
    }

    render(){

    return (
        <SafeAreaView style = {styles.main}>
            <View style = {styles.header}>
                <Text style = {styles.headerText}>
                    Qpalavra
                </Text>
            </View>
            <View style = {styles.container}>
                <Board word ={this.state.arrayHint[this.state.nextLine]} selLine={this.state.nextLine}/>
            </View>
            <View style = {[styles.container, {flex: 0.5}]}>
                <KeyPad/>
            </View>
        </SafeAreaView>
    )
      
    }
        
}

