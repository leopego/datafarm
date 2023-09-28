import React from 'react';
import {Svg, Path} from 'react-native-svg';
import {useTheme} from 'styled-components/native';

export function EditIcon() {
  const theme = useTheme();

  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke={theme.colors.gray300}
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round">
      <Path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
      <Path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
    </Svg>
  );
}
