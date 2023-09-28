import React from 'react';
import {Line, Svg} from 'react-native-svg';

export function CloseIcon() {
  return (
    <Svg
      width="16"
      height="16"
      viewBox="0 0 20 20"
      fill="none"
      stroke="#000000"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round">
      <Line x1="18" y1="6" x2="6" y2="18" />
      <Line x1="6" y1="6" x2="18" y2="18" />
    </Svg>
  );
}
