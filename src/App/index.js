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

export default class App extends Component {
    constructor(props){
        super(props)
        this.state = this.creatState()
    }

    creatState = () => {
        return {
            arrayHint: [
                ['','','','',''],
                ['','','','',''],
                ['','','','',''], 
                ['','','','',''], 
                ['','','','',''],
                ['','','','','']],
            index: 0,
            line: 0
        }

    }
    
    showLetter = (letter) => {
        let index = this.state.index
        let line = this.state.line
        let arrayHint = this.state.arrayHint
        arrayHint[line].splice(index,1,letter)
        console.log(arrayHint[line])
        line = index == 5? line + 1 : line
        index = index == 5? 0 : index + 1
        console.log('index',index,'line', line)
        this.setState({arrayHint, index, line})
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
                <Board word ={this.state.arrayHint[this.state.line]} selLine={this.state.line}/>
            </View>
            <View style = {[styles.container, {flex: 0.5}]}>
                <KeyPad onClick = {this.showLetter}/>
            </View>
        </SafeAreaView>
    )
      
    }
        
}

