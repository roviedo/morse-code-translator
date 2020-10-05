import React, { Component } from 'react';

const morseCodeDict = {
    '': '',
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '.....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-.': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '.--': 'x',
    '-.--': 'y',
    '--..': 'z',
    '-----': '0',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9'
}

class MorseCode extends Component {
    constructor (props) {
        super(props);
        this.state = {
            userMorseCodeInput: ''
        }
    }

    handleChange = (e) => {
        const morseCodeArr = e.target.value.split(' ');
        let morseCode = '';
        for (let i = 0; i<morseCodeArr.length; i++) {
            if (morseCodeDict[morseCodeArr[i]]) {
                morseCode += `${morseCodeDict[morseCodeArr[i]]}`
            }
        }
        if (morseCode.length > 0) {
            this.setState({
                showMorseCode: true
            });
        }
        this.setState({
            userMorseCodeInput: e.target.value,
            morseCode
        });
    }

    render () {
        return (
            <div>
                <input type="text" value={this.state.userMorseCodeInput} onChange={this.handleChange} />
                { this.state.showMorseCode ? <div>{this.state.morseCode}</div> : null }
            </div>
        );
    }
}

export default MorseCode;