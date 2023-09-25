import styled from 'styled-components/native';

export const TempContainer = styled.View`
  flex: 1;

  padding-top: 24px;
  padding-left: 24px;
  padding-right: 24px;
`;

export const Logo = styled.Image`
  width: 100%;
  height: 80px;
`;

export const LoginText = styled.Text`
  color: ${props => props.theme.colors.gray};
  font-size: 24px;
  font-weight: 500;

  margin-top: 36px;
`;

export const InformationText = styled.Text`
  color: ${props => props.theme.colors.lightgray};
  font-size: 16px;
  font-weight: 500;

  margin-top: 8px;
`;