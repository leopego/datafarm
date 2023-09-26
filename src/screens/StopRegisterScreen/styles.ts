import styled from 'styled-components/native';

export const TempContainer = styled.ScrollView`
  flex: 1;

  padding-top: 24px;
  padding-left: 24px;
  padding-right: 24px;

  background-color: ${props => props.theme.colors.white};
`;

export const RowView = styled.View`
  margin-top: 12px;

  flex-direction: row;
`;
