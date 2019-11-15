import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const Container = styled.View`
  background: #fff;
  margin: 20px;
  border-radius: 5px;
`;

export const ProductContainer = styled.View`
  padding: 20px;
`;

export const Products = styled.View``;

export const ProductInfo = styled.View`
  flex-direction: row;
`;

export const ProductImage = styled.Image`
  width: 80px;
  height: 80px;
`;
export const ProductDetails = styled.View``;

export const ProductTitle = styled.Text``;

export const ProductPrice = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;

export const RemoveButton = styled.TouchableOpacity``;

export const ProductControls = styled.View`
  flex-direction: row;
  align-items: center;
  background: #eee;
  border-radius: 5px;
  padding: 8px;
`;
export const ProductControlsButton = styled.TouchableOpacity``;

export const ProductAmount = styled.TextInput`
  background: #fff;
  padding: 5px;
  margin: 5px;
  border-radius: 5px;
  min-width: 45px;
  text-align: center;
`;

export const ProductTotal = styled.Text`
  font-weight: bold;
  font-size: 16px;
  flex: 1;
  text-align: right;
`;
