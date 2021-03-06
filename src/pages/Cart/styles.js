import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const Container = styled.View`
  background: #fff;
  margin: 20px;
  border-radius: 5px;
`;

export const ProductContainer = styled.ScrollView.attrs({
  bounces: true,
})``;

export const Products = styled.View`
  padding: 20px;
`;

export const ProductInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ProductImage = styled.Image`
  width: 80px;
  height: 80px;
`;
export const ProductDetails = styled.View`
  flex: 1;
  margin-left: 10px;
  padding: 10px;
`;

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

export const TotalContainer = styled.View`
  align-items: center;
`;

export const TotalText = styled.Text`
  color: ${colors.grayColor};
  font-size: 18px;
  font-weight: 600;
`;
export const TotalAmount = styled.Text`
  font-size: 24px;
  font-weight: bold;
`;
export const FinishOrder = styled.TouchableOpacity`
  align-items: center;
  background-color: ${colors.primary};
  width: 90%;
  border-radius: 5px;
  padding: 10px;
  margin: 20px 0px 10px 0px;
`;
export const FinishOrderText = styled.Text`
  color: #fff;
  font-weight: bold;
  text-transform: uppercase;
`;

export const EmptyStateContainer = styled.View`
  margin: 15px;
  align-items: center;
  justify-content: center;
`;
export const EmptyStateText = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-top: 18px;
`;

export const EmptyStateSubText = styled.Text`
  font-size: 14px;
  font-weight: 600;
  margin-top: 18px;
  text-align: center;
  color:${colors.grayColor}
`;
