import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as CartActions from '../../store/modules/cart/action';

import colors from '../../styles/colors';

import { formatPrice } from '../../util/format';
import {
  Container,
  ProductContainer,
  Products,
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
  TotalContainer,
  TotalText,
  TotalAmount,
  FinishOrder,
  FinishOrderText,
} from './styles';

function Cart({
  navigation,
  products,
  total,
  updateAmountRequest,
  removeFromCart,
}) {
  function decrement(product) {
    updateAmountRequest(product.id, product.amount - 1);
  }
  function increment(product) {
    updateAmountRequest(product.id, product.amount + 1);
  }

  return (
    <Container>
      <ProductContainer>
        {products.map(product => (
          <Products key={product.id}>
            <ProductInfo>
              <ProductImage source={{ uri: product.image }} />
              <ProductDetails>
                <ProductTitle>{product.title}</ProductTitle>
                <ProductPrice>{product.priceFormatted}</ProductPrice>
              </ProductDetails>
              <RemoveButton>
                <Icon
                  name="delete-forever"
                  size={24}
                  color={colors.primary}
                  onPress={() => removeFromCart(product.id)}
                />
              </RemoveButton>
            </ProductInfo>
            <ProductControls>
              <ProductControlsButton onPress={() => decrement(product)}>
                <Icon
                  name="remove-circle-outline"
                  size={20}
                  color={colors.primary}
                />
              </ProductControlsButton>
              <ProductAmount readonly value={String(product.amount)} />
              <ProductControlsButton onPress={() => increment(product)}>
                <Icon
                  name="add-circle-outline"
                  size={20}
                  color={colors.primary}
                />
              </ProductControlsButton>
              <ProductTotal>{product.subTotal}</ProductTotal>
            </ProductControls>
          </Products>
        ))}
        <TotalContainer>
          <TotalText>Total</TotalText>
          <TotalAmount>{total}</TotalAmount>
          <FinishOrder>
            <FinishOrderText>Finalizar Pedido</FinishOrderText>
          </FinishOrder>
        </TotalContainer>
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

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
