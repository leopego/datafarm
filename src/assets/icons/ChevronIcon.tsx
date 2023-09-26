import React from 'react';
import {Svg, Polyline} from 'react-native-svg';

export function ChevronIcon() {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#bababa"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round">
      <Polyline points="6 9 12 15 18 9" />
    </Svg>
  );
}
