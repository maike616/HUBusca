import React, { useState } from "react";
import {
  SafeArea, Container, StyledErrorText, UserDataContainer,
  Header, Title, StyledUserImage, StyledUserName, StyledUserLogin,
  StyledUserLocation, UserSearchContainer, InputField, SearchIcon, SearchButton, CustomActivityIndicator
} from './styles';
import axios from "axios";

const Home = ({ }) => {
  const [userName, setUserName] = useState('');
  const [userData, setUserData] = useState(null);
  const [userNotFound, setUserNotFound] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const fetchUserData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(`https://api.github.com/users/${userName}`);
      setUserData(response.data);
      setUserNotFound(false);
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
    <>
      <SafeArea>
        <Header>
          <Title>HUBusca</Title>
        </Header>
      </SafeArea>
      <Container>
        {userNotFound && (
          <StyledErrorText>
            Usuário não encontrado
          </StyledErrorText>
        )}

        {userData && !userNotFound && (
          <UserDataContainer>
            <StyledUserImage source={{ uri: userData.avatar_url }} />
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
      </Container>
    </>
  );
};

export default Home;