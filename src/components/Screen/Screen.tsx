import React from 'react';
import {useAppSafeArea} from '../../hooks/useAppSafeArea';
import {ScrollViewContainerScreen, ViewContainerScreen} from './styles';

type Props = {
  scrollable?: boolean;
  children: React.ReactNode;
};

export function Screen({scrollable, children}: Props) {
  const {top} = useAppSafeArea();

  const Container = scrollable
    ? ScrollViewContainerScreen
    : ViewContainerScreen;

  return <Container style={{paddingTop: top}}>{children}</Container>;
}
