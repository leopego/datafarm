import React from 'react';
import {Svg, Path, Polyline} from 'react-native-svg';
import {useTheme} from 'styled-components';

export function CheckCircleIcon() {
  const theme = useTheme();

  return (
    <Svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke={theme.colors.green100}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <Path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></Path>
      <Polyline points="22 4 12 14.01 9 11.01"></Polyline>
    </Svg>
  );
}
