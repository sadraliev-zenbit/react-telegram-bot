import React from 'react';
import './App.css';
import Alert from '@components/Welcome';
import { TelegramProvider } from '@common/telegram.context';

function App() {
  return (
    <TelegramProvider>
      <div className="App">
        <Alert text={'Welcome!'} />
      </div>
    </TelegramProvider>
  );
}

export default App;
