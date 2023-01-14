import { TelegramCSS } from '@common/telegram.styles';
import * as React from 'react';

interface IWelcomeProps {
  text: string;
}

const Welcome: React.FunctionComponent<IWelcomeProps> = ({ text }) => {
  return (
    <div>
      <h1 style={{ color: TelegramCSS.TEXT_COLOR }}>{text}</h1>
    </div>
  );
};

export default Welcome;
