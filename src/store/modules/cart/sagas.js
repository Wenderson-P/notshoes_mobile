import { select, all, call, put, takeLatest } from 'redux-saga/effects';
import { Alert } from 'react-native';
import { addToCartSucess, updateAmountSucess } from './action';
import { formatPrice } from '../../../util/format';

import api from '../../../services/api';

function* addToCart({ id }) {
  const productExists = yield select(state =>
    state.cart.find(product => product.id === id)
  );

  const currentAmount = productExists ? productExists.amount : 0;
  const amount = currentAmount + 1;

  const stockResponse = yield call(api.get, `/stock/${id}`);
  const stockAmount = stockResponse.data.amount;

  if (amount > stockAmount) {
    Alert.alert('Não temos a quantidade selecionada em estoque.');
  }

  if (productExists) {
    yield put(updateAmountSucess(id, amount));
  } else {
    const response = yield call(api.get, `/products/${id}`);
    const data = {
      ...response.data,
      amount: 1,
      priceFormatted: formatPrice(response.data.price),
    };
    yield put(addToCartSucess(data));
  }
}

export default all([takeLatest('@cart/ADD_REQUEST', addToCart)]);
