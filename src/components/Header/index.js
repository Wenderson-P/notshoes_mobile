import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  Container,
  LogoButton,
  Logo,
  BasketButton,
  ItemAmount,
} from './styles';

export default function components({ navigation }) {
  return (
    <Container>
      <LogoButton onPress={() => navigation.navigate('Main')}>
        <Logo />
      </LogoButton>
      <BasketButton onPress={() => navigation.navigate('Cart')}>
        <Icon name="shopping-basket" color="#FFF" size={24} />
        <ItemAmount>2</ItemAmount>
      </BasketButton>
    </Container>
  );
}
