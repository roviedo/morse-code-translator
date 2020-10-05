import React, { Component } from 'react';

const morseCodeDict = {
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
    '--..': 'z'
}

class MorseCode extends Component {
    constructor (props) {
        super(props);
        this.state = {
            userMorseCodeInput: ''
        }
    }

    handleChange = (e) => {
        if (morseCodeDict[e.target.value]) {
            this.setState({
                showMorseCode: true,
                morseCode: morseCodeDict[e.target.value]
            });
        }
        this.setState({
            userMorseCodeInput: e.target.value
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