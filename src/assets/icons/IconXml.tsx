import React from 'react';

import {Path, Svg} from 'react-native-svg';

interface Props {
  iconPath?: string;
}

export function IconXml({iconPath}: Props) {
  return (
    <Svg width={20} height={20} viewBox="0 0 1000 1000">
      <Path d={iconPath} fill="#3a3a3a" />
    </Svg>
  );
}
