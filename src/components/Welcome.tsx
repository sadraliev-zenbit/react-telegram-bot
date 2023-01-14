import { TelegramCSS } from '@common/telegram.styles';
import * as React from 'react';

interface IWelcomeProps {
  text: string;
}

const Welcome: React.FunctionComponent<IWelcomeProps> = ({ text }) => {
  return <h1 style={{ color: TelegramCSS.TEXT_COLOR }}>{text}</h1>;
};

export default Welcome;
