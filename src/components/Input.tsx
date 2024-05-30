import React, { ChangeEvent } from 'react';

type InputPropsType = {
    title: string
    setTitle: (title: string)=>void
}

export const Input = ({title, setTitle}:InputPropsType) => {
    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)
    }

    return (
        <input value={title} onChange={onChangeHandler} />
    );
};
