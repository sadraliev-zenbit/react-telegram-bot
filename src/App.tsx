import React from 'react';
import logo from './logo.svg';
import './App.css';
import Alert from '@components/Welcome';

function App() {
  const tg = window?.Telegram?.WebApp;
  return (
    <div className="App">
      <Alert text={'hello world!'} />
    </div>
  );
}

export default App;
