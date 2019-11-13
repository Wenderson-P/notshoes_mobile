import styled from 'styled-components/native';
import { darken } from 'polished';
import colors from '../../styles/colors';

export const Container = styled.View`
  background: ${colors.dark};
`;

export const Product = styled.View`
  width: 220px;
  background: #fff;
  padding: 10px;
  margin: 15px;
  border-radius: 4px;
`;

export const ProductImage = styled.Image`
  height: 200px;
  width: 200px;
`;

export const ProductTitle = styled.Text`
  color: ${colors.grayColor};
  font-size: 16px;
  line-height: 20px;
  height: 40px;
`;
export const ProductPrice = styled.Text`
  font-size: 21px;
  font-weight: bold;
  margin: 5px 0px 15px;
`;
export const AddButton = styled.TouchableOpacity`
  background: ${colors.primary};
  border-radius: 4px;
  flex-direction: row;
  align-items: center;
`;

export const AddButonText = styled.Text`
  flex: 1;
  color: #fff;
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;
`;

export const ProductAmount = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 10px;
  background: ${darken(0.06, colors.primary)};
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
`;

export const ProductAmountText = styled.Text`
  color: #fff;
  margin: 0px 4px 0px 10px;
`;
