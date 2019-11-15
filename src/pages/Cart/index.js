import React from 'react';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import colors from '../../styles/colors';
import { formatPrice } from '../../util/format';
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

function Cart({ navigation, products }) {
  return (
    <Container>
      <ProductContainer>
        {products.map(product => (
          <>
            <ProductInfo>
              <ProductImage source={{ uri: product.image }} />
              <ProductDetails>
                <ProductTitle>{product.title}</ProductTitle>
                <ProductPrice>{product.priceFormatted}</ProductPrice>
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
              <ProductAmount value={String(product.amount)} />
              <ProductControlsButton>
                <Icon
                  name="add-circle-outline"
                  size={20}
                  color={colors.primary}
                />
              </ProductControlsButton>
              <ProductTotal>{product.subTotal}</ProductTotal>
            </ProductControls>
          </>
        ))}
      </ProductContainer>
    </Container>
  );
}
const mapStateToProps = state => ({
  products: state.cart.map(product => ({
    ...product,
    subTotal: formatPrice(product.price * product.amount),
    priceFormatted: formatPrice(product.price),
  })),
  total: formatPrice(
    state.cart.reduce(
      (total, product) => total + product.price * product.amount,
      0
    )
  ),
});

export default connect(mapStateToProps)(Cart);
