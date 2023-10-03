import styled from 'styled-components/native';

export const ViewContainerScreen = styled.View`
  flex: 1;

  padding-left: 24px;
  padding-right: 24px;

  background-color: ${props => props.theme.colors.white};
`;

export const ScrollViewContainerScreen = styled.ScrollView`
  flex: 1;

  padding-left: 24px;
  padding-right: 24px;

  background-color: ${props => props.theme.colors.white};
`;
