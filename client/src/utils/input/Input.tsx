import React from 'react';
import './input.css';

interface InputProps {
    value: string;
    setValue: (value: string) => void;
    type: string;
    placeholder: string;
}

const Input: React.FC<InputProps> = ({ value, setValue, type, placeholder }) => {
    return (
        <input 
            onChange={(event) => setValue(event.target.value)}
            value={value}
            type={type}
            placeholder={placeholder}
        />
    );
};

export default Input;