import React, { Component } from 'react';

class Promocode extends Component {
    render() {
        return (
            <div>
                <input type="text" placeholder="Введите промокод" />
                <button>Применить</button>
            </div>
        );
    }
}

export default Promocode;