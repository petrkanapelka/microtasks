import React from 'react';

type ButtonPropsType = {
    name: string
    callback: () => void
}

export const Button = ({ name, callback }: ButtonPropsType) => {

    const onClickHandler = () => {
        callback();
    }

    return (
        <button onClick={onClickHandler}>{name}</button>
    );
};
