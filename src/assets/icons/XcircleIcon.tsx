import React from 'react';
import {Svg, Circle, Line} from 'react-native-svg';
import {useTheme} from 'styled-components/native';

export function XcircleIcon() {
  const theme = useTheme();

  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke={theme.colors.black}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <Circle cx="12" cy="12" r="10"></Circle>
      <Line x1="15" y1="9" x2="9" y2="15"></Line>
      <Line x1="9" y1="9" x2="15" y2="15"></Line>
    </Svg>
  );
}
