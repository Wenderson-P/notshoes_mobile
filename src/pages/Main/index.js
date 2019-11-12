import React, { Component } from 'react';
import { FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import api from '../../services/api';
import {
  Container,
  Product,
  ProductImage,
  ProductTitle,
  ProductPrice,
  AddButton,
  AddButonText,
} from './styles';

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
          horizontal
          data={products}
          keyExtractor={product => String(product.id)}
          renderItem={({ item }) => (
            <Product>
              <ProductImage source={{ uri: item.image }} />
              <ProductTitle>{item.title}</ProductTitle>
              <ProductPrice>{item.price}</ProductPrice>
              <AddButton>
                <AddButonText>Adicionar</AddButonText>
              </AddButton>
            </Product>
          )}
        />
      </Container>
    );
  }
}
