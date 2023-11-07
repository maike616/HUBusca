import styled from "styled-components/native";

const Container = styled.ScrollView`
  background-color: ${props => props.theme.backgroundBody};

  padding: 20px;
`;

const UserInfoContainer = styled.View`
 
  align-items: center;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 8px;
  background-color: #f0f0f0;
`;


const Avatar = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  margin-bottom: 10px;
`;


const InfoText = styled.Text`
  color: ${props => props.theme.backgroundBody}; 
  margin-bottom: 5px;
  font-size: 16px;
`;


const ReposTitle = styled.Text`
  color: ${props => props.theme.textColor};  
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
`;


const RepoItem = styled.TouchableOpacity`
  border-bottom-width: 1px;
  border-color: ${props => props.theme.textColor}; 
  padding: 15px; 
  margin-bottom: 10px;
  border-radius: 8px; 
  background-color: #FFFFFF; 
`;


const RepoName = styled.Text`
  color: ${props => props.theme.backgroundHeader}; 
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
`;


const RepoInfo = styled.Text`
  color:${props => props.theme.backgroundHeader};      
  font-size: 14px;
`;


export {
    Container,
    UserInfoContainer,
    Avatar,
    InfoText,
    ReposTitle,
    RepoItem,
    RepoName,
    RepoInfo,
  };