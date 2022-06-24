import { useState } from 'react';
import PropTypes from 'prop-types';

export const CounterApp = ({value}) => {

    const [counter, setCounter] = useState(value);

    const handleAdd = () => {
        setCounter(counter + 1)
    }

    const handleSubstract = () => {
        setCounter(counter - 1)
    }

    const handleReset = () => {
        setCounter(value);
    }

  return (
    <div className="container">
        <div className="counter">
            <h1>Counter:</h1>
            <h2>{counter}</h2>
        </div>

        <div className="button-container">
            <button onClick={handleAdd}>+1</button>
            <button onClick={handleReset}>Reset</button>
            <button onClick={handleSubstract}>-1</button>
        </div>
    </div>
  )
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired,
}