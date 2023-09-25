import React from 'react';
import {InformationText, LoginText, Logo, TempContainer} from './styles';

export function AuthScreen() {
  return (
    <TempContainer>
      <Logo
        source={require('../../assets/images/logodatafarm.png')}
        resizeMode="contain"
      />
      <LoginText>Login</LoginText>
      <InformationText>Acesse o aplicativo</InformationText>
    </TempContainer>
  );
}
