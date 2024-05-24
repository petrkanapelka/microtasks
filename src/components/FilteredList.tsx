import React, { useState } from 'react';
import { MoneyData } from '../data/MoneyData';
import { CurrencyType } from '../types/Types';

export const FilteredList = () => {
    const [money, setMoney] = useState(MoneyData);

    const filterHandler = (currency: CurrencyType) => {
        currency === 'all'
            ? setMoney(MoneyData)
            : currency === 'rubls'
                ? setMoney(MoneyData.filter((element) => element.banknots === 'RUBLS'))
                : setMoney(MoneyData.filter((element) => element.banknots === 'Dollars'))
    }

    return (
        <>
            <div style={{ margin: '30px auto', width: '50%' }}>
                {money.map((currency, index) => {
                    return (
                        <li key={index}>
                            <span>{currency.banknots}:</span>
                            <span>{currency.value}</span>
                            <span>№{currency.number}</span>
                        </li>
                    )
                })}
            </div>
            <div style={{ margin: '30px auto', width: '50%' }}>
                <button onClick={() => filterHandler('all')}>All</button>
                <button onClick={() => filterHandler('rubls')}>Rubls</button>
                <button onClick={() => filterHandler('dollars')}>Dollars</button>
            </div>
        </>
    );
};
