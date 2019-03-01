import React from 'react';
import {maxRaffleNumbersAllowed} from "../constants";
import {RaffleNumberInput} from "./raffle-number-input";
import {RaffleNumberButton} from "./raffle-number-button";
import {UnlockRaffleInputButton} from "./raffle-number-input-unlock-button";
import throttle from 'lodash.throttle';

import './raffle-number-display.scss';

export class RaffleNumberDisplay extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            raffleNumbers: [],
            lockRaffleInput: false
        };

        this.lockRaffleInput = this.lockRaffleInput.bind(this);
        this.unlockRaffleInput = this.unlockRaffleInput.bind(this);
        this.addRaffleNumber = this.addRaffleNumber.bind(this);
        this.removeRaffleNumber = this.removeRaffleNumber.bind(this);
        this.forceUnlockRaffleInput = this.forceUnlockRaffleInput.bind(this);
    }

    lockRaffleInput() {
        const {raffleNumbers} = this.state;

        if (raffleNumbers.length + 1 === maxRaffleNumbersAllowed) {
            this.setState({lockRaffleInput: true});
        }
    }

    unlockRaffleInput() {
        const {raffleNumbers, lockRaffleInput} = this.state;

        if (lockRaffleInput && raffleNumbers.length === 1) {
            this.setState({lockRaffleInput: false});
        }
    }

    addRaffleNumber(raffleNumber) {
        this.setState({
            raffleNumbers: [
                ...this.state.raffleNumbers,
                raffleNumber
            ]
        });

        this.lockRaffleInput();
    }

    removeRaffleNumber(raffleNumberIndex) {
        const raffleNumbers = [
            ...this.state.raffleNumbers
        ];

        raffleNumbers.splice(raffleNumberIndex, 1);

        this.setState({
            raffleNumbers
        });

        this.unlockRaffleInput();
    }

    forceUnlockRaffleInput() {
        this.setState({
            lockRaffleInput: false
        });
    }

    render() {
        const {raffleNumbers, lockRaffleInput} = this.state;
        const {addRaffleNumber, removeRaffleNumber, forceUnlockRaffleInput} = this;
        const raffleNumberComponents = raffleNumbers.map((raffleNumber, raffleNumberIndex) => (
            <RaffleNumberButton
                key={raffleNumberIndex}
                raffleNumber={raffleNumber}
                dismissRaffleNumber={() => removeRaffleNumber(raffleNumberIndex)}
            />
        ));

        return (
            <div className='raffle-number-display'>
                {raffleNumberComponents}
                {lockRaffleInput ?
                    raffleNumbers.length < maxRaffleNumbersAllowed && <UnlockRaffleInputButton unlockRaffleInput={forceUnlockRaffleInput}/> :
                    <RaffleNumberInput submitHandler={throttle(addRaffleNumber)}/>}
            </div>
        );
    }
}