import React from 'react';
import EvilDeedsCounter from './EvilDeedsCounter';

export default function Greeting(props) {
  //props = {name: 'Ursula'}
  return (
    <div>
      Hello {props.name}
      <EvilDeedsCounter />
    </div>
    )
}