import React from "react";
import { Text, Image, SafeAreaView } from "react-native";
import HeaderComponent from "../../components/HeaderComponent";
import FooterComponent from "../../components/FooterComponent";
import { View, Card, CardItem, Left, Thumbnail, Body, Button, Icon, Right, Spinner, Container, Content } from "native-base";
import { Actions } from "react-native-router-flux";

class FriendDetailsPage extends React.Component {

    constructor(props: any) {
        super(props);
        this.state = {
            user: null,
            isLoading:true
        }
    }

    componentDidMount() {
        this.setState({
            user: this.props.navigation.state.params.user,
            isLoading:false
        });
    }
    render() {
        let content;
        if (!this.state.isLoading) {
            content =
                <SafeAreaView>
                    <Card style={[styles.itemContainer, this.state.user.gender == 'male' ? styles.male : styles.female]}>
                        <CardItem>
                            <Left>
                                <Button transparent>
                                    <Icon name='id-card' type='FontAwesome' />
                                    <Text style={styles.itemTitle}> Name: {this.state.user.name.first + ' ' + this.state.user.name.last}</Text>
                                </Button>
                            </Left>
                        </CardItem>
                        <CardItem>
                            <Left>
                                <Button transparent>
                                    <Icon name='email' type='Fontisto' />
                                    <Text style={styles.itemTitle}> Email: {this.state.user.email}</Text>
                                </Button>
                            </Left>
                        </CardItem>

                        <CardItem cardBody>
                            <Image source={{ uri: this.state.user.picture.large }} style={styles.itemImage} />
                        </CardItem>
                        <CardItem>
                            <Left>
                                <Button transparent>
                                    <Icon name='map-marked-alt' type='FontAwesome5' />
                                    <Text style={styles.itemTitle}> Address: {this.state.user.location.street.name + ' ' + this.state.user.location.street.number}</Text>
                                </Button>
                            </Left>
                        </CardItem>
                        <CardItem>
                            <Left>
                                <Button transparent>
                                    <Icon name='map-marker' type='FontAwesome5' />
                                    <Text style={styles.itemTitle}> Latitude: {this.state.user.location.coordinates.latitude}</Text>
                                </Button>
                            </Left>
                        </CardItem>
                        <CardItem>
                            <Left>
                                <Button transparent>
                                    <Icon name='map-marker-alt' type='FontAwesome5' />
                                    <Text style={styles.itemTitle}> Longitude: {this.state.user.location.coordinates.longitude}</Text>
                                </Button>
                            </Left>
                        </CardItem>
                        <CardItem>
                           <Content>
                           <Button full onPress={Actions.FriendsPage}>
                                <Text style={{color:'#F1FAEE'}}>Back</Text>
                                <Icon active name="md-arrow-round-back" type='Ionicons' />

                            </Button>
                           </Content>
                        </CardItem>
                    </Card>
                </SafeAreaView>;


        }
        else {
            content = <Spinner color='blue' />;
        }
        return (
            <Container>
                <HeaderComponent Title="Friend" IconName="user" />
                <Content>
                    {content}
                </Content>
                <FooterComponent />
            </Container>
        )
    }
}

const styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
    itemTitle: {
        fontSize: 16,
        color: '#457B9D',
        alignItems: 'center',
    },
    itemImage: {
        width: 300,
        height: 300,
        borderRadius: 35,
        flex: 1
    },
    male: {
        backgroundColor: '#A8DADC'
    },
    female: {
        backgroundColor: 'pink'
    }
};

export default FriendDetailsPage