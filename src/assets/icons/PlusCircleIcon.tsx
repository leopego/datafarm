import React from 'react';
import {Svg, Circle, Line} from 'react-native-svg';
import {useTheme} from 'styled-components/native';

export function PlusCircleIcon() {
  const theme = useTheme();

  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke={theme.colors.orange200}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <Circle cx="12" cy="12" r="10"></Circle>
      <Line x1="12" y1="8" x2="12" y2="16"></Line>
      <Line x1="8" y1="12" x2="16" y2="12"></Line>
    </Svg>
  );
}
