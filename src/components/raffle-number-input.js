import React from 'react';

export class RaffleNumberInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit() {
        event.preventDefault();

        const {value: raffleNumber} = this.state;
        const {submitHandler} = this.props;

        if (raffleNumber) {
            submitHandler(raffleNumber);
            this.setState({value: ''});
        }
    }

    render() {
        return (
            <form className='raffle-number-input' onSubmit={this.handleSubmit}>
                <label>
                    Raffle Number:
                    <input type="text" value={this.state.value} onChange={this.handleChange}/>
                </label>
                <input type="submit" value="Submit"/>
            </form>
        );
    }

}