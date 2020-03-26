import React from 'react';

import Header from './Header'

function App() {
  const counter = 0;
  return (
    <div>
      <Header>Contador: {counter}</Header>
      <button>Incrementar</button>
    </div>
  );
}

export default App;
