import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Container,
    UserInfoContainer,
    Avatar,
    InfoText,
    ReposTitle,
    RepoItem,
    RepoName,
    RepoInfo, } from './style'
import { Linking} from 'react-native';

const Profile = ({ route }: { route: any }) =>{
    const {userName} = route.params;
    const [userDetails, setUserDetails] = useState<any>(null);
    const [userRepos, setUserRepos] = useState<any[]>([]);

    useEffect(()=>{
        const fetchUserDetails = async () =>{
            try {
                const userDetailsResponse = await axios.get(`https://api.github.com/users/${userName}`);
                setUserDetails(userDetailsResponse.data);
                const userReposResponse = await axios.get(`https://api.github.com/users/${userName}/repos`);
                setUserRepos(userReposResponse.data);
            } catch (error) {
                console.error('Error fetching user details:', error);
            }
        };
        fetchUserDetails();
    },[userName]);
    const openRepoInBrowser = (url) => {
        Linking.openURL(url); // Abre o repositório no navegador
      };
    return(
        <Container>
        {userDetails && (
          <UserInfoContainer>
            <Avatar source={{ uri: userDetails.avatar_url }} />
            <InfoText>Nome: {userDetails.name}</InfoText>
            <InfoText>Login: {userDetails.login}</InfoText>
            <InfoText>Localização: {userDetails.location}</InfoText>
            <InfoText>Seguidores: {userDetails.followers}</InfoText>
            <InfoText>Repositórios Públicos: {userDetails.public_repos}</InfoText>
          </UserInfoContainer>
        )}
        <ReposTitle>Repositórios:</ReposTitle>
       
        {userRepos.map((repo) => (
        <RepoItem key={repo.id} onPress={() => openRepoInBrowser(repo.html_url)}>
          <RepoName>{repo.name}</RepoName>
          <RepoInfo>Linguagem: {repo.language}</RepoInfo>
          <RepoInfo>Descrição: {repo.description}</RepoInfo>
          <RepoInfo>Criado em: {repo.created_at}</RepoInfo>
          <RepoInfo>Último Push: {repo.updated_at}</RepoInfo>
        </RepoItem>
        
      ))}
      </Container>
    );
};

export default (Profile);



