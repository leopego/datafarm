import React from 'react';
import {Svg, Circle, Line} from 'react-native-svg';
import {useTheme} from 'styled-components';

export function AlertCircleIcon() {
  const theme = useTheme();

  return (
    <Svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke={theme.colors.red}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <Circle cx="12" cy="12" r="10"></Circle>
      <Line x1="12" y1="8" x2="12" y2="12"></Line>
      <Line x1="12" y1="16" x2="12.01" y2="16"></Line>
    </Svg>
  );
}
