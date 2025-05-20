import React from 'react';
import ReactDOM from 'react-dom/client';

function App() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Привет, React!</h1>
      <button onClick={() => alert('Работает!')}>Нажми меня</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);