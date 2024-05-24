import React, { useState } from 'react';
import './App.css';

const givenMoney = [
  { banknots: 'Dollars', value: 100, number: ' a1234567890' },
  { banknots: 'Dollars', value: 50, number: ' z1234567890' },
  { banknots: 'RUBLS', value: 100, number: ' w1234567890' },
  { banknots: 'Dollars', value: 100, number: ' e1234567890' },
  { banknots: 'Dollars', value: 50, number: ' c1234567890' },
  { banknots: 'RUBLS', value: 100, number: ' r1234567890' },
  { banknots: 'Dollars', value: 50, number: ' x1234567890' },
  { banknots: 'RUBLS', value: 50, number: ' v1234567890' },
]

type CurrencyType = 'all' | 'rubls' | 'dollars'

function App() {
  const [money, setMoney] = useState(givenMoney);

  const filterHandler = (currency: CurrencyType) => {
    if (currency === 'all') {
      setMoney(givenMoney);
    }

    if (currency === 'rubls') {
      setMoney(givenMoney.filter((element) => element.banknots === 'RUBLS'));
    }


    if (currency === 'dollars') {
      setMoney(givenMoney.filter((element) => element.banknots === 'Dollars'));
    }

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
}

export default App;
