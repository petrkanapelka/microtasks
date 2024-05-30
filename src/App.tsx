import React, { ChangeEvent, useState } from 'react';
import './App.css';
import { FilteredList } from './components/FilteredList';
import { FullImput } from './components/FullImput';
import { Input } from './components/Input';
import { Button } from './components/Button';

export type MessageType = {
  message: string
}


function App() {
  let [messages, setMessage] = useState<Array<MessageType>>([
    { message: 'message1' },
    { message: 'message2' },
    { message: 'message3' },
    { message: 'message4' },
    { message: 'message5' }
  ]
  )

  let [title, setTitle] = useState('')


  const addNewMessage = (newMessage: MessageType) => {
    newMessage.message && setMessage([newMessage, ...messages]);
    setTitle('');
  }

  return (
    <div className="App">
      <FullImput addNewMessage={addNewMessage} />
      <Input setTitle={setTitle} title={title} />
      <Button name='+' callback={() => addNewMessage({ message: title })} />
      {messages.map((el, index) => {
        return (
          <div key={index}>{el.message}</div>
        )
      })}
      <FilteredList></FilteredList>
    </div>
  );
}

export default App;
