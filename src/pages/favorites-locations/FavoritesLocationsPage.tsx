import React from 'react'
import { TouchableOpacity, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Container, Header, Left, Button, Icon, Title, Body, Right, Content, Footer, FooterTab } from 'native-base';
import FooterComponent from '../../components/FooterComponent';
import HeaderComponent from '../../components/HeaderComponent';

const FavoritesLocationsPage = () => {
   const goToHome = () => {
      Actions.HomePage()
   }
   return (
      <Container>
      <HeaderComponent Title="Favorites locations" IconName="star" />
      <Content>
        <Text>
          This is Favorites Section
        </Text>
      </Content>
      <FooterComponent />
    </Container>
   )
}
export default FavoritesLocationsPage
