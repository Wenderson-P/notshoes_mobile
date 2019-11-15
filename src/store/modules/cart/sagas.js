import { select, all, call, put, takeLatest } from 'redux-saga/effects';
import { addToCartSucess } from './action';
import { formatPrice } from '../../../util/format';

import api from '../../../services/api';

function* addToCart({ id }) {
  const productExists = yield select(state =>
    state.cart.find(product => product.id === id)
  );
  if (!productExists) {
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
