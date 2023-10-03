import React from 'react';
import {
  IconWrapper,
  StopCardContainer,
  StopCardDate,
  StopCardFarmTitle,
  StopCardInformation,
  StopCardInformationRow,
  StopCardReasonTitle,
} from './styles';
import {IconXml} from '../../assets/icons/IconXml';
import {StopType} from '../../types/types';
import {UploadCloudIcon} from '../../assets/icons/UploadCloudIcon';
import {CheckCircleIcon} from '../../assets/icons/CheckCircleIcon';
import {AlertCircleIcon} from '../../assets/icons/AlertCircleIcon';

type Props = {
  data: StopType;
};

export function StopCard({data}: Props) {
  return (
    <StopCardContainer>
      <IconWrapper>
        <IconXml width={36} height={36} iconPath={data.reason.icon} />
      </IconWrapper>
      <StopCardInformation>
        <StopCardInformationRow>
          <StopCardFarmTitle>{data.farm.name}</StopCardFarmTitle>
          <StopCardDate>04/03/2023 AM</StopCardDate>
        </StopCardInformationRow>
        <StopCardInformationRow>
          <StopCardReasonTitle>{data.reason.name}</StopCardReasonTitle>
          {data.synced && <CheckCircleIcon />}
          {!data.synced && data.errorOnSync && <AlertCircleIcon />}
          {!data.synced && !data.errorOnSync && <UploadCloudIcon />}
        </StopCardInformationRow>
      </StopCardInformation>
    </StopCardContainer>
  );
}
