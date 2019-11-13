import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import colors from '../../styles/colors';
import {
  Container,
  ProductContainer,
  ProductInfo,
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
        <ProductInfo>
          <ProductImage />
          <ProductDetails>
            <ProductTitle>Tênis</ProductTitle>
            <ProductPrice>R$ 159,00</ProductPrice>
          </ProductDetails>
          <RemoveButton>
            <Icon name="delete-forever" size={24} color={colors.primary} />
          </RemoveButton>
        </ProductInfo>
        <ProductControls>
          <ProductControlsButton>
            <Icon
              name="remove-circle-outline"
              size={20}
              color={colors.primary}
            />
          </ProductControlsButton>
          <ProductAmount>2</ProductAmount>
          <ProductControlsButton>
            <Icon name="add-circle-outline" size={20} color={colors.primary} />
          </ProductControlsButton>
          <ProductTotal>R$ 318,00</ProductTotal>
        </ProductControls>
      </ProductContainer>
    </Container>
  );
}
