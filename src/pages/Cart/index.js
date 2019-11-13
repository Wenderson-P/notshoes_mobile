import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  ProductContainer,
  ProductImage,
  ProductDetails,
  ProductTitle,
  ProductPrice,
  RemoveButton,
  ProductControls,
  ProductControlsButton,
  ProductAmount,
  ProductTotal,
} from './styles';

export default function Cart() {
  return (
    <Container>
      <ProductContainer>
        <ProductImage />
        <ProductDetails>
          <ProductTitle>Tênis</ProductTitle>
          <ProductPrice>R$ 159,00</ProductPrice>
          <RemoveButton>
            <Icon />
          </RemoveButton>
        </ProductDetails>
        <ProductControls>
          <ProductControlsButton>
            <Icon />
          </ProductControlsButton>
          <ProductAmount>2</ProductAmount>
          <ProductControlsButton>
            <Icon />
          </ProductControlsButton>
          <ProductTotal>R$ 318,00</ProductTotal>
        </ProductControls>
      </ProductContainer>
    </Container>
  );
}
