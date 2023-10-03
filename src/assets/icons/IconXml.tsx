import React from 'react';

import {Path, Svg} from 'react-native-svg';

interface Props {
  iconPath?: string;
  width?: number;
  height?: number;
}

export function IconXml({iconPath, width = 24, height = 24}: Props) {
  return (
    <Svg width={width} height={height} viewBox="0 0 1000 1000">
      <Path d={iconPath} fill="#3a3a3a" />
    </Svg>
  );
}
