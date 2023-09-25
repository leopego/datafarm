import React from 'react';
import {InformationText, LoginText, Logo, TempContainer} from './styles';
import {Input} from '../../components/Input/Input';
import {Button} from '../../components/Button/Button';

export function AuthScreen() {
  return (
    <TempContainer>
      <Logo
        source={require('../../assets/images/logodatafarm.png')}
        resizeMode="contain"
      />
      <LoginText>Login</LoginText>
      <InformationText>Acesse o aplicativo</InformationText>

      <Input label="Email" containerProps={{style: {marginTop: 24}}} />

      <Input
        label="Senha"
        secureTextEntry
        containerProps={{style: {marginTop: 24, marginBottom: 24}}}
      />

      <Button title="ENTRAR" />
    </TempContainer>
  );
}
