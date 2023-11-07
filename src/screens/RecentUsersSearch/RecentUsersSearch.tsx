import React from "react";
import {
    Container, Title, UserItem,LoginText,
    Avatar, UserInfo, UserName,LocationText
} from './style'

const RecentUsersSearch = ({ recentUsers, navigation }) => {
    const Profile = (userName) => {
        navigation.navigate('Perfil', { userName })
    };
    return (
        <Container>
            <Title>Usuários Pesquisados Recentemente</Title>
            {recentUsers.map((user, index) => (
        <UserItem key={index} onPress={() => Profile(user.login)}>
          <Avatar source={{ uri: user.avatar_url }} />
          <UserInfo>
            <UserName>{user.name}</UserName>
            <LoginText>@{user.login}</LoginText>
            <LocationText>{user.location}</LocationText>
          </UserInfo>
        </UserItem>
      ))}
        </Container>
    );
};

export default RecentUsersSearch;