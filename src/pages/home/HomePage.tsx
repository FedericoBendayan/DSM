import React from 'react'
import { Image, Text, Dimensions, SafeAreaView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Container, Header, Left, Button, Icon, Title, Body, Right, Content, Footer, FooterTab, Card, CardItem, Thumbnail } from 'native-base';
import FooterComponent from '../../components/FooterComponent';
import HeaderComponent from '../../components/HeaderComponent';


const HomePage = () => {

  return (
    <Container>
      <HeaderComponent Title="Home" IconName="home" />
      <Content>
        <SafeAreaView>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={require('../../assets/thumbnail.png')} />
                <Body>
                  <Text>Featured Location</Text>
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
          
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={require('../../assets/thumbnailHotel.png')} />
                <Body>
                  <Text>Featured Hotel</Text>
                  <Text >London palace</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={require('../../assets/hotel.jpg')} style={{ height: 200, width: null, flex: 1 }} />
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>500 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>400 Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text>6h ago</Text>
              </Right>
            </CardItem>
          </Card>

          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={require('../../assets/thumbnailKitchen.png')} />
                <Body>
                  <Text>Featured Kitchen</Text>
                  <Text >Arthur's stop</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={require('../../assets/fancyRestaurant.jpg')} style={{ height: 200, width: null, flex: 1 }} />
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>359 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>257 Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text>11h ago</Text>
              </Right>
            </CardItem>
          </Card>

        </SafeAreaView>
      </Content>
      <FooterComponent />
    </Container>

  )
}
export default HomePage