'use client'; // MUST be the first line

import React, { useState } from 'react';
import '../globals.css';

const Calculator = () => {
    const [result, setResult] = useState('');

    const handleClick = (value) => {
        if (value === '=') {
            try {
                setResult(String(eval(result) || ''));
            } catch (error) {
                setResult('Error');
            }
        } else if (value === 'C') {
            setResult('');
        } else if (value === 'CE') {
            setResult(result.slice(0, -1));
        } else {
            setResult(result + value);
        }
    };

    return (
        <div>
            {/* Logo and Heading */}
            <div className="header-container">
                <h1 className="title">RIDDHIMA'S FIRST WEB APP</h1>
                <img src="/logo.png" alt="Logo" className="logo" />
            </div>

            {/* Calculator */}
            <div className="calculator">
                <input type="text" className="form-control mb-3" value={result} readOnly />

                <div className="buttons">
                    {['7', '8', '9', 'CE'].map((val) => (
                        <button
                            key={val}
                            className={val === 'CE' ? 'operator' : ''}
                            onClick={() => handleClick(val)}
                        >
                            {val}
                        </button>
                    ))}

                    {['4', '5', '6', '/'].map((val) => (
                        <button
                            key={val}
                            className={['/', '*', '-', '+'].includes(val) ? 'operator' : ''}
                            onClick={() => handleClick(val)}
                        >
                            {val}
                        </button>
                    ))}

                    {['1', '2', '3', '*'].map((val) => (
                        <button
                            key={val}
                            className={['/', '*', '-', '+'].includes(val) ? 'operator' : ''}
                            onClick={() => handleClick(val)}
                        >
                            {val}
                        </button>
                    ))}

                    {['0', '.', '00', '-', 'C', '=', '+'].map((val) => (
                        <button
                            key={val}
                            className={
                                ['/', '*', '-', '+', '=', 'C'].includes(val)
                                    ? val === 'C' ? 'operator wide' : 'operator'
                                    : ''
                            }
                            onClick={() => handleClick(val)}
                        >
                            {val}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Calculator;

