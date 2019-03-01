import React from 'react';
import ReactDOM from 'react-dom';
import {RaffleNumberDisplay} from './components/raffle-number-display';

const appMount = document.createElement('div');

appMount.id = 'app';
document.body.appendChild(appMount);

ReactDOM.render(<RaffleNumberDisplay />, appMount);