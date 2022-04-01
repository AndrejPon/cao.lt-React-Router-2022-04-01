import { useState } from 'react';
import Button from '../components/Button';
const baseUrl = 'https://believed-shore-vanadium.glitch.me';

function Add() {
  const [id, setId] = useState('');
  const [people, setPeople] = useState('');
  const [price, setPrice] = useState('');
  async function sendFetch() {
    const newObj = {
      id,
      people,
      price,
    };
    console.log(newObj);

    const resp = await fetch(baseUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newObj),
    });
    const atsInJs = await resp.json();
    console.log(atsInJs);
  }

  return (
    <form onSubmit={sendFetch}>
      <fieldset>
        <input
          onChange={(e) => setId(e.target.value)}
          type='text'
          placeholder='Id'
        />
        <input
          onChange={(e) => setPeople(e.target.value)}
          type='text'
          placeholder='People'
        />
        <input
          onChange={(e) => setPrice(e.target.value)}
          type='text'
          placeholder='Price'
        />
        <Button />
      </fieldset>
    </form>
  );
}

export default Add;
