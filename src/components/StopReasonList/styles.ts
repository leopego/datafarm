import styled from 'styled-components/native';

export const ListLabel = styled.Text`
  color: ${props => props.theme.colors.green100};

  font-size: 14px;
  font-weight: bold;

  margin-bottom: 8px;
`;

export const ListContainer = styled.View`
  flex: 1;

  border-width: 1px;
  border-color: ${props => props.theme.colors.gray200};
  border-radius: 4px;
`;

export const ReasonContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;

  padding: 12px;
`;

export const ReasonTitle = styled.Text`
  color: ${props => props.theme.colors.gray};

  font-size: 16px;
  font-weight: 500;

  margin-left: 16px;
`;
