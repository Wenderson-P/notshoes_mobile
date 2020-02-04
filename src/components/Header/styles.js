import styled from 'styled-components/native';
import colors from '../../styles/colors';
import logo from '../../assets/images/logo.png';

export const Container = styled.View`
  background: ${colors.primary};
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
`;

export const LogoButton = styled.TouchableHighlight``;

export const Logo = styled.Image.attrs({
  source: logo,
  resizeMode: 'cover',
})``;

export const BasketButton = styled.TouchableOpacity``;

export const ItemAmount = styled.Text`
  color: #fff;
  background: ${colors.primary};
  border-radius: 10px;
  padding: 2px;
  font-size: 12px;
  min-width: 18;
  min-height: 18;
  text-align: center;
  position: absolute;
  right: -8px;
  top: -8px;
`;
