import React from 'react';
import {AuthScreen} from './src/screens/AuthScreen/AuthScreen';
import {ThemeProvider} from 'styled-components/native';
import {Theme} from './src/theme/theme';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={Theme}>
      <AuthScreen />
    </ThemeProvider>
  );
}

export default App;
