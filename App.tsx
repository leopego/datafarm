import React from 'react';
// import {AuthScreen} from './src/screens/AuthScreen/AuthScreen';
import {ThemeProvider} from 'styled-components/native';
import {Theme} from './src/theme/theme';
import {StopRegisterScreen} from './src/screens/StopRegisterScreen/StopRegisterScreen';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={Theme}>
      <StopRegisterScreen />
    </ThemeProvider>
  );
}

export default App;
