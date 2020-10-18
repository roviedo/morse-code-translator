import React, { Component } from 'react';
import dot from './dot.wav';
import dash from './dash.wav';

const morseCodeDict = {
    '': '',
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
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
    '-..-': 'x',
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

    handlePlay = () => {
        const morseCodeArr = this.state.userMorseCodeInput.split('');

        let audioArrayList = [];
        for (let i = 0; i<morseCodeArr.length; i++) {
            if (morseCodeArr[i] === '.') {
                audioArrayList.push(dot);
            } else if (morseCodeArr[i] === '-') {
                audioArrayList.push(dash);
            }
        }

        const audio = new Audio(audioArrayList[0]);
        audio.src=audioArrayList[0];
        audio.play();
        let index = 0;
        audio.onended = function() {
            if(index < audioArrayList.length){
                audio.src=audioArrayList[index+1];
                audio.play();
                index++;
            }
        };
    }

    render () {
        return (
            <div>
                <h1>Morse code translator</h1>
                <input type="text" value={this.state.userMorseCodeInput} onChange={this.handleChange} />
                { this.state.showMorseCode ? <div>{this.state.morseCode}</div> : null }
                <input type="button" onClick={this.handlePlay} value="Play" disabled={!this.state.showMorseCode}/>
                <audio className="dash" src="./dash.wav" type="audio/wav" preload="true" />
                <audio className="dot" src="./dot.wav" type="audio/wav" preload="true" />
            </div>
        );
    }
}

export default MorseCode;