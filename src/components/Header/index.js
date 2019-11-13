import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Container, Logo, BasketButton, ItemAmount } from './styles';

export default function components() {
  return (
    <Container>
      <Logo />
      <BasketButton>
        <Icon name="shopping-basket" color="#FFF" size={24} />
        <ItemAmount>2</ItemAmount>
      </BasketButton>
    </Container>
  );
}
