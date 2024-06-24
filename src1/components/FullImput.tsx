import React, { ChangeEvent, useState } from 'react';
import { MessageType } from '../App';

export type FullImputPropsType = {
    addNewMessage: (message: MessageType) => void
}

export const FullImput = ({ addNewMessage }: FullImputPropsType) => {
    let [title, setTitle] = useState('')

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)
        console.log(title);
    }

    const onClickHandler = () => {
        const message = { message: title };
        setTitle('');
        message.message && addNewMessage(message);
    };

    return (
        <div>
            <input value={title} onChange={onChangeHandler} />
            <button onClick={onClickHandler}>+</button>
        </div>
    );
};
