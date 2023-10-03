import React, {useState} from 'react';
import {
  ButtonWrapper,
  InformationText,
  LoginText,
  Logo,
  TempContainer,
} from './styles';
import {Input} from '../../components/Input/Input';
import {Button} from '../../components/Button/Button';
import {useUserStore} from '../../store/userStore';
import {api} from '../../domain/api';

export function AuthScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const updateToken = useUserStore(state => state.updateToken);

  function handleAuth() {
    setIsLoading(true);

    const request = {
      email: email,
      senha: password,
      idPartner: 372,
    };

    api
      .post('api/auth/v2', request)
      .then(response => {
        updateToken(response.data.data.token);
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  return (
    <TempContainer>
      <Logo
        source={require('../../assets/images/logodatafarm.png')}
        resizeMode="contain"
      />
      <LoginText>Login</LoginText>
      <InformationText>Acesse o aplicativo</InformationText>

      <Input
        onChangeText={setEmail}
        label="Email"
        containerProps={{style: {marginTop: 24}}}
      />

      <Input
        onChangeText={setPassword}
        label="Senha"
        secureTextEntry
        containerProps={{style: {marginTop: 24, marginBottom: 24}}}
      />

      <ButtonWrapper>
        <Button title="ENTRAR" loading={isLoading} onPress={handleAuth} />
      </ButtonWrapper>
    </TempContainer>
  );
}
