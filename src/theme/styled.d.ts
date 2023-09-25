import 'styled-components/native';
import {themeType} from './theme';

declare module 'styled-components/native' {
  export interface DefaultTheme extends themeType {}
}
