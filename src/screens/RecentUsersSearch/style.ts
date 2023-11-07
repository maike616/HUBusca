import styled from 'styled-components/native';
import { Platform } from 'react-native';
const Container = styled.ScrollView`
  padding: 20px;
`;

const Title = styled.Text`
  color: ${props => props.theme.textColor};     
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const UserItem = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 8px;
  background-color: #f0f0f0;  
  ${Platform.OS === 'android' ? 'elevation: 5;' : 'shadow-color: #000; shadow-offset: { width: 0, height: 2 }; shadow-opacity: 0.25; shadow-radius: 3.84;'}
`;

const Avatar = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  margin-bottom: 10px;
`;

const UserInfo = styled.View`
  justify-content: center;
`;

const UserName = styled.Text`
  font-weight: bold;
  font-size: 16px;
`;

const LoginText = styled.Text`
    color: #777;
`;

const LocationText = styled.Text`
  font-style: italic;
  font-size: 12px;
`;
export {
    Container,
    Title,
    UserItem,
    Avatar,
    UserInfo,
    UserName,
    LoginText,
    LocationText
};