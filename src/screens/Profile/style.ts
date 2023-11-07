import styled from "styled-components/native";

const Container = styled.ScrollView`
  background-color: ${props => props.theme.backgroundBody};

  padding: 20px;
`;

const UserInfoContainer = styled.View`
  align-items: center;
  margin-bottom: 20px;
`;


const Avatar = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  margin-bottom: 10px;
`;


const InfoText = styled.Text`
  color: ${props => props.theme.textColor}; 
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
  border-color: #ccc;
  padding: 10px;
  margin-bottom: 10px;
`;


const RepoName = styled.Text`
  color: ${props => props.theme.textColor}; 
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
`;


const RepoInfo = styled.Text`
  color: ${props => props.theme.textColor};     
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