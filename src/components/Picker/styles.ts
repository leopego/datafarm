import styled from 'styled-components/native';

export const PickerContainer = styled.TouchableOpacity`
  border-bottom-width: 1.5px;
  border-bottom-color: ${props => props.theme.colors.gray100};

  padding-bottom: 8px;
`;

export const PickerLabel = styled.Text`
  color: ${props => props.theme.colors.green100};

  font-size: 14px;
  font-weight: bold;

  margin-bottom: 8px;
`;

export const PickerName = styled.Text`
  font-size: 16px;
  color: ${props => props.theme.colors.gray300};
  font-weight: 500;
`;

export const PickerSerialNumber = styled.Text`
  font-size: 12px;
  color: ${props => props.theme.colors.gray400};
`;

export const InformationWrapper = styled.View`
  flex-direction: row;

  align-items: center;
  justify-content: space-between;
`;

export const InformationContainer = styled.View`
  margin-right: 12px;
`;

export const ModalFakeBlur = styled.View`
  flex: 1;
  background-color: ${props => props.theme.colors.gray};

  opacity: 0.2;
`;

export const ModalContainer = styled.View`
  height: 300px;
  background-color: ${props => props.theme.colors.white};
`;

export const ModalHeader = styled.View`
  flex-direction: row;

  justify-content: space-between;
  align-items: center;

  margin-bottom: 12px;

  padding-left: 24px;
  padding-right: 24px;

  padding-top: 12px;
`;

export const ModalHeaderLabel = styled.Text`
  font-size: 16px;
  color: ${props => props.theme.colors.black};

  font-weight: bold;
`;
