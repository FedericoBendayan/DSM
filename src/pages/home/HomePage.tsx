import React from 'react'
import { TouchableOpacity, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Container, Header, Left, Button, Icon, Title, Body, Right, Content, Footer, FooterTab } from 'native-base';
import FooterComponent from '../../components/FooterComponent';
import HeaderComponent from '../../components/HeaderComponent';

const HomePage = () => {
  //    const goToAbout = () => {
  //       Actions.about()
  //    }
  return (
    //   <TouchableOpacity style = {{ margin: 128 }} onPress = {goToAbout}>
    //      <Text>This is HomePage!</Text>
    //   </TouchableOpacity>
    <Container>
      <HeaderComponent Title="Home" IconName="home" />
      <Content>
        <Text>
          This is Home Section
      </Text>
      </Content>
      <FooterComponent />
    </Container>

  )
}
export default HomePage