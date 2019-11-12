import React, { Component } from 'react';
import { FlatList } from 'react-native';
import api from '../../services/api';

import { Container, Product, ProductImage } from './styles';

export default class Main extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    const response = await api.get('/products');
    const data = response.data.map(product => ({
      ...product,
      priceFormatted: product.price,
    }));
    this.setState({ products: data });
  }

  render() {
    const { products } = this.state;
    return (
      <Container>
        <FlatList
          data={products}
          keyExtractor={product => String(product.id)}
          renderItem={({ item }) => (
            <Product>
              <ProductImage source={{ uri: item.image }} />
            </Product>
          )}
        />
      </Container>
    );
  }
}
