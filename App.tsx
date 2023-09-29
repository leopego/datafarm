import React from 'react';
// import {AuthScreen} from './src/screens/AuthScreen/AuthScreen';
import {ThemeProvider} from 'styled-components/native';
import {Theme} from './src/theme/theme';

import {Routes} from './src/routes/routes';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={Theme}>
      <Routes />
    </ThemeProvider>
  );
}

export default App;
