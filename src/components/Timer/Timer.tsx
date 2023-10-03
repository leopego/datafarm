import React, {Dispatch, SetStateAction} from 'react';
import {
  TimerButtonContainer,
  TimerContainer,
  TimerCounterContainer,
  TimerCounterText,
} from './styles';
import {MinusCircleIcon} from '../../assets/icons/MinusCircleIcon';
import {PlusCircleIcon} from '../../assets/icons/PlusCircleIcon';

type Props = {
  minutes: number;
  setMinutes: Dispatch<SetStateAction<number>>;
};

export function Timer({minutes, setMinutes}: Props) {
  function handleIncrease() {
    setMinutes(prevMin => prevMin + 1);
  }

  function handleDecrease() {
    if (minutes <= 1) {
      return;
    }

    setMinutes(prevMin => prevMin - 1);
  }

  return (
    <TimerContainer>
      <TimerButtonContainer onPress={handleDecrease}>
        <MinusCircleIcon />
      </TimerButtonContainer>
      <TimerCounterContainer>
        <TimerCounterText>{minutes} min</TimerCounterText>
      </TimerCounterContainer>
      <TimerButtonContainer onPress={handleIncrease}>
        <PlusCircleIcon />
      </TimerButtonContainer>
    </TimerContainer>
  );
}
