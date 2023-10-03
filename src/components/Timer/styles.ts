import styled from 'styled-components/native';

export const TimerContainer = styled.View`
  flex: 1;

  flex-direction: row;

  justify-content: center;
  align-items: center;
`;

export const TimerButtonContainer = styled.TouchableOpacity`
  padding: 6px;
`;

export const TimerCounterContainer = styled.View`
  flex: 1;
  height: 48px;

  border-radius: 12px;

  justify-content: center;
  align-items: center;

  background-color: ${props => props.theme.colors.orange100};
`;

export const TimerCounterText = styled.Text`
  font-size: 18px;
  font-weight: 500;

  color: ${props => props.theme.colors.white};
`;
