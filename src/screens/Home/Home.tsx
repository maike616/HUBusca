import React, { useState } from "react";
import {
  SafeArea, Container, StyledErrorText, UserDataContainer,
  Header, Title, StyledUserImage, StyledUserName, StyledUserLogin,
  StyledUserLocation, UserSearchContainer, InputField, SearchIcon, SearchButton, CustomActivityIndicator
} from './styles';

import RecentUsersSearch from '../RecentUsersSearch/RecentUsersSearch'
import axios from "axios";

const Home = ({ navigation }) => {
  const [userName, setUserName] = useState('');
  const [userData, setUserData] = useState(null);
  const [userNotFound, setUserNotFound] = useState(false);
  const [recentUsers, setRecentUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchUserData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(`https://api.github.com/users/${userName}`);
      setUserData(response.data);
      setUserNotFound(false);

      if (!recentUsers.some((user) => user.login === response.data.login)) {
        setRecentUsers([response.data, ...recentUsers]);
      }
    } catch (error) {
      if (error.response && error.response.status === 404) {
        setUserNotFound(true);
      } else {
        console.log("Erro ao buscar os dados", error);
      }
    }
    setIsLoading(false);
  };
  return (
      <Container>
        {userNotFound && (
          <StyledErrorText>
            Usuário não encontrado
          </StyledErrorText>
        )}

        {userData && !userNotFound && (
          <UserDataContainer>
            <SearchButton onPress={() => navigation.navigate('Perfil', { userName: userData.login })}>
              <StyledUserImage source={{ uri: userData.avatar_url }} />
            </SearchButton>
            <StyledUserName>{userData.name}</StyledUserName>
            <StyledUserLogin>{userData.login}</StyledUserLogin>
            <StyledUserLocation>{userData.location}</StyledUserLocation>
          </UserDataContainer>
        )}

        <UserSearchContainer>
          <InputField
            placeholder="Digite o nome de usuário do GitHub"
            value={userName}
            onChangeText={(text) => setUserName(text)}
          />
          <SearchButton onPress={fetchUserData} disabled={isLoading}>
            {isLoading ? (
              <CustomActivityIndicator />
            ) : (
              <SearchIcon name="ios-search" />
            )}
          </SearchButton>
        </UserSearchContainer>
        {userData && (  
        <RecentUsersSearch recentUsers={recentUsers} navigation={navigation} />
      )}
      </Container>
  );
};

export default Home;