import React from 'react';
import {Svg, Polyline, Circle} from 'react-native-svg';
import {useTheme} from 'styled-components';

export function ClockIcon() {
  const theme = useTheme();

  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke={theme.colors.green}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <Circle cx="12" cy="12" r="10"></Circle>
      <Polyline points="12 6 12 12 16 14"></Polyline>
    </Svg>
  );
}
