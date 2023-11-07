import styled from "styled-components/native";
import { Ionicons } from '@expo/vector-icons'


const SafeArea = styled.SafeAreaView`

 background-color: ${props => props.theme.backgroundHeader};
 `;


const Container = styled.View`
    flex: 1;
    align-items: center;
    background-color: ${props => props.theme.backgroundBody};
    padding-top: 50px;
`;

const StyledErrorText = styled.Text`
    color: ${props => props.theme.textColor}; 
    font-size: 20px; 
    margin-top: 20px; 
    text-align: center; 
    font-weight: bold; 
`;

const UserDataContainer = styled.View`
  align-items :center ;
`;

const StyledUserImage = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 50px;
`;

const StyledUserName = styled.Text`
  color: ${props => props.theme.textColor}; 
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 5px;
`;

const StyledUserLogin = styled.Text`
  color: ${props => props.theme.textColor}; 
  font-size: 16px;
  margin-bottom: 5px;
`;

const StyledUserLocation = styled.Text`
  color: ${props => props.theme.textColor}; 
  font-size: 16px;
  font-style: italic;
  padding-bottom: 10px;
`;

const UserSearchContainer = styled.View`
flex-direction: row;
align-items: center;
margin-left: 40px;
`;

const InputField = styled.TextInput`
  flex: 1;
  border-width: 1px;
  padding: 10px;
  margin: 20px 20px 20px 10px;
  background-color: ${props => props.theme.backgroundInputText}; 
  color:${props => props.theme.inputTextColor};
  font-weight: bold;
  border-radius: 10px;
`;

const StyledTouchableOpacity = styled.TouchableOpacity``;

const CustomActivityIndicator = styled.ActivityIndicator.attrs({
    size: 'small',
    color: '#FFFFFF',
})`
   margin: 10px;

`;

const SearchIcon = styled(Ionicons).attrs({
    //name:"ios-search", 
    size: 40,
})`
  margin: 10px;
  color: ${props => props.theme.textColor}; 
`;
const Header = styled.View``;
const Title = styled.Text`
    color: ${props => props.theme.textColor};  
    font-size: 28px; 
    margin-top: 50px; 
    text-align: center; 
    font-weight: bold; 
    margin-bottom: 20px;
`;

export {
    Title,
    Header,
    SafeArea,
    Container,
    StyledErrorText,
    UserDataContainer,
    StyledUserImage,
    StyledUserName,
    StyledUserLogin,
    StyledUserLocation,
    UserSearchContainer,
    InputField,
    StyledTouchableOpacity,
    CustomActivityIndicator,
    SearchIcon,
};