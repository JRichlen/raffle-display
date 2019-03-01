import React from 'react';

export const UnlockRaffleInputButton = ({unlockRaffleInput}) => (
    <button
        className='raffle-number-input unlock-button'
        onClick={unlockRaffleInput}
    >
        Unlock
    </button>
);
