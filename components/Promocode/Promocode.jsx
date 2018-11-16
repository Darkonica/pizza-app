import React, { Component } from 'react';

class Promocode extends Component {

    state = {
        value: ''
    };

    onChange = (e) => {
        const value = e.target.value;
        console.log(value);
        this.setState({
            ...this.state,
            value
        });
    }

    onSubmit = () => {

    }

    render() {
        const { value } = this.state;

        return (
            <div>
                <input
                    type="text"
                    placeholder="Введите промокод"
                    value={value}
                    onChange={this.onChange}
                />
                <button>Применить</button>
            </div>
        );
    }
}

export default Promocode;