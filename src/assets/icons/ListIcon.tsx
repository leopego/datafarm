import React from 'react';
import {Svg, Line} from 'react-native-svg';
import {useTheme} from 'styled-components';

export function ListIcon() {
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
      <Line x1="8" y1="6" x2="21" y2="6"></Line>
      <Line x1="8" y1="12" x2="21" y2="12"></Line>
      <Line x1="8" y1="18" x2="21" y2="18"></Line>
      <Line x1="3" y1="6" x2="3.01" y2="6"></Line>
      <Line x1="3" y1="12" x2="3.01" y2="12"></Line>
      <Line x1="3" y1="18" x2="3.01" y2="18"></Line>
    </Svg>
  );
}
