import styled from 'styled-components/native';

export const TempContainer = styled.ScrollView`
  padding-top: 24px;
  padding-left: 24px;
  padding-right: 24px;

  background-color: ${props => props.theme.colors.white};
`;

export const RowView = styled.View`
  margin-top: 12px;
  margin-bottom: 24px;

  flex-direction: row;
`;

export const NoteWrapper = styled.View`
  flex-direction: row;

  margin-top: 12px;
  margin-bottom: 12px;
`;

export const NoteTitle = styled.Text`
  color: ${props => props.theme.colors.gray300};

  font-size: 16px;
  font-weight: 500;

  margin-left: 8px;
`;

export const NoteInput = styled.TextInput`
  border-width: 1px;
  border-color: ${props => props.theme.colors.gray200};
  border-radius: 4px;

  min-height: 60px;
`;

export const FooterContainer = styled.View`
  height: 80px;

  padding-top: 12px;
  padding-bottom: 12px;

  padding-left: 24px;
  padding-right: 24px;

  justify-content: center;
  align-items: center;

  flex-direction: row;

  background-color: ${props => props.theme.colors.white};
`;

export const FooterIconContainer = styled.TouchableOpacity`
  padding-left: 8px;
  padding-right: 16px;

  justify-content: center;
  align-items: center;
`;
