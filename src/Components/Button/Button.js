import React from 'react';
import './Button.css';

// При одинарном нажатии на кнопку увеличьте счетчик 
// в метке на 1 (при открытии страницы пусть счетчик будет равен 0). 
// При двойном нажатии на кнопку выведите в консоль (или через модальное окно на экран), 
// является ли значение счетчика палиндромичным 
// в десятичной записи (примеры палиндромичных чисел: 101, 4224, 123321 и т.д.)

class Button extends React.Component {
    constructor() {
        super();

        this.state = {
            count: 0
        }

        this.count = 0;

        this.counter = e => {
            this.timeout = setTimeout(() => this.setState({count: ++this.count}), 300);
        };

        this.palindrome = e => {
            clearTimeout(this.timeout)
            clearTimeout(this.timeout - 1)
    
            const {count} = this.state;
            const reverse = count.toString().split(``).reverse().join(``);

            console.log(count == reverse ? `Палиндром` : `Не палиндром`);
        }
    }

    render() {
        const {count} = this.state;

        return(
            <div className="button-and-text">

                <button id = "fork"
                onDoubleClick = {this.palindrome}
                onClick = {this.counter}
                >fork</button>
                
                <p className="text">{count}</p>
            </div>
        );
    }
}

export default Button;