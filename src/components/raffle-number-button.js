import React from 'react';

export const RaffleNumberButton = ({dismissRaffleNumber, raffleNumber}) => (
    <button
        className='raffle-number-button'
        onClick={dismissRaffleNumber}
    >
        {raffleNumber}
    </button>
);
