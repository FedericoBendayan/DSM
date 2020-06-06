import React, { Component } from 'react';
import { Container, Header, Content, Button, Body, Icon, Text, Left, Title, Right } from 'native-base';
import StyleSheet from 'react-native';
import { Actions } from 'react-native-router-flux';
import appStyles from '../styles/AppStyles';

const styles = {
    firstfullButton: {
        marginBottom: 2,
        marginTop: 2
    },
    fullButton: {
        marginBottom: 2
    }
};

class DrawerContentComponent extends React.Component {

    render() {
        return (
            <Container>
                <Header >
                    <Left>

                    </Left>
                    <Body style={appStyles.titleAndIconContainer} >
                        <Title style={appStyles.title}>Shareplaces</Title>
                        <Icon name='map-signs' type='FontAwesome5' style={appStyles.icon} />
                    </Body>
                    <Right>

                    </Right>
                </Header>
                <Content>
                    <Button full onPress={Actions.HomePage} style={styles.firstfullButton}>
                        <Text>Home</Text>
                        <Icon name='home' type='FontAwesome5' />
                    </Button>
                    <Button full onPress={Actions.FavoritesLocationsPage} style={styles.fullButton}>
                        <Text>Favorites locations</Text>
                        <Icon name='star' type='FontAwesome5' />
                    </Button>
                    <Button full style={styles.fullButton}>
                        <Text>My locations</Text>
                        <Icon name='map-marker-alt' type='FontAwesome5' />
                    </Button>
                    <Button full onPress={Actions.FriendsPage} style={styles.fullButton}>
                        <Text>Friends</Text>
                        <Icon name='users' type='FontAwesome5' />
                    </Button>
                </Content>
            </Container>
        );
    }
}

export default DrawerContentComponent;



