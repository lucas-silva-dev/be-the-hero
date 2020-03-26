import React from 'react';

import Header from './Header'

function App() {
  let counter = 0;

  function increment() {
    counter += 1;
  }
  return (
    <div>
      <Header>Contador: {counter}</Header>
      <button>Incrementar</button>
    </div>
  );
}

export default App;
