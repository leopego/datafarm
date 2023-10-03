import React from 'react';
import {Svg, Path, Polyline, Line} from 'react-native-svg';
import {useTheme} from 'styled-components';

export function UploadCloudIcon() {
  const theme = useTheme();

  return (
    <Svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke={theme.colors.gray300}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <Polyline points="16 16 12 12 8 16"></Polyline>
      <Line x1="12" y1="12" x2="12" y2="21"></Line>
      <Path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"></Path>
      <Polyline points="16 16 12 12 8 16"></Polyline>
    </Svg>
  );
}
