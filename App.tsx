import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import RoutesComponent from './src/components/RoutesComponent';

export default function App() {
  return (
    // <Container>
    //   <Header>
    //     <Left>
    //       <Button transparent>
    //         <Icon name='menu' />
    //       </Button>
    //     </Left>
    //     <Body>
    //       <Title>Header</Title>

    //     </Body>
    //     <Right />
    //   </Header>
    //   <Content>
    //     <Text>
    //       This is Content Section
    //       </Text>
    //     <Container>
    //       <RoutesComponent />
    //     </Container>
    //   </Content>
    //   <Footer>
    //     <FooterTab>
    //       <Button full>
    //         <Text>Footer</Text>
    //       </Button>
    //     </FooterTab>
    //   </Footer>
    // </Container>


    <Container>
      <RoutesComponent />
    </Container>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
