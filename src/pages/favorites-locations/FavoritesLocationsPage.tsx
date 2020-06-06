import React from 'react'
import { Text, SafeAreaView,Image } from 'react-native';
import { Container, Content, Card, CardItem, Left, Thumbnail, Body, Button, Icon, Right } from 'native-base';
import FooterComponent from '../../components/FooterComponent';
import HeaderComponent from '../../components/HeaderComponent';

const FavoritesLocationsPage = () => {

  return (
    <Container>
      <HeaderComponent Title="Favorites locations" IconName="star" />
      <Content>
        <SafeAreaView>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={require('../../assets/thumbnail.png')} />
                <Body>
                  <Text>Favorite Location</Text>
                  <Text >Federico's house</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={require('../../assets/featuredHome.jpg')} style={{ height: 200, width: null, flex: 1 }} />
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>15M Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>4379 Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text>5 min ago</Text>
              </Right>
            </CardItem>
          </Card>
        </SafeAreaView>
      </Content>
      <FooterComponent />
    </Container>
  )
}
export default FavoritesLocationsPage
