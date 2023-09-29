import React from 'react';
import {ListContainer, ListLabel, ReasonContainer, ReasonTitle} from './styles';
import {IconXml} from '../../assets/icons/IconXml';
import {Reason} from '../../types/types';

interface ReasonProps {
  reason: Reason;

  selectedReason: Reason | null;
  onPress: () => void;
}

interface Props {
  data: Reason[] | null;
  selectedReason: Reason | null;
  setSelectedReason: (reason: Reason | null) => void;
}

function ReasonCard({reason, selectedReason, onPress}: ReasonProps) {
  return (
    <ReasonContainer
      key={reason?.id}
      onPress={onPress}
      style={{
        backgroundColor:
          selectedReason?.id === reason?.id ? '#e9f1e8' : 'white',
      }}>
      <IconXml iconPath={reason?.icon} />
      <ReasonTitle>{reason?.name}</ReasonTitle>
    </ReasonContainer>
  );
}

export function StopReasonList({
  data,
  selectedReason,
  setSelectedReason,
}: Props) {
  function handleSelectedReason(reason: Reason) {
    if (selectedReason?.id === reason?.id) {
      setSelectedReason(null);
    } else {
      setSelectedReason(reason);
    }
  }

  return (
    <>
      <ListLabel>Motivo da Parada</ListLabel>
      {data && (
        <ListContainer>
          {data?.map(reason => (
            <ReasonCard
              key={reason?.id}
              reason={reason}
              selectedReason={selectedReason}
              onPress={() => handleSelectedReason(reason)}
            />
          ))}
        </ListContainer>
      )}
    </>
  );
}
