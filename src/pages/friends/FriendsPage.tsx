import React from 'react'
import { TouchableOpacity, Text, FlatList, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Container, Content, Spinner, View } from 'native-base';
import FooterComponent from '../../components/FooterComponent';
import HeaderComponent from '../../components/HeaderComponent';
import UserService from '../../services/UserService';



class FriendsPage extends React.Component {

  constructor(props: any) {
    super(props);
    this.state = {
      users: null,
      isLoading: true
    };
  }



  componentDidMount() {
    //Intentional time out to test the spinner.
    // setTimeout(() => {
    UserService.getUsers().then(
      (response: any) => {
        if (response && response.data && response.data.results) {
          if (response.data.results.length > 0) {
            this.setState({
              users: response.data.results,
              isLoading: false
            });
          }
        }
        // console.log(this.state.users);
      }
    ).catch(
      function (error: any) {
        console.log(error);
      });
    // }, 2500);
  }
  render() {
    let content;
    if (this.state.isLoading) {
      content = <Spinner color='blue' />;
    }
    else {
      {
        if (this.state.users != null) {
          content = <View>
            <FlatList data={this.state.users}
              renderItem={({ item }) => {
                return (
                  <TouchableOpacity style={[styles.itemContainer, item.gender == 'male' ? styles.male : styles.female]}
                    onPress={() => {
                      Actions.FriendDetailsPage({ user: item });
                    }
                    }
                  >
                    <Image style={styles.itemImage}
                      source={{ uri: item.picture.medium }}
                    />
                    <View style={{ flexDirection: 'column' }}>
                      <Text style={styles.itemTitle}>Name: {item.name.first + ' ' + item.name.last}</Text>
                      <Text style={[styles.itemTitle, { fontSize: 13 }]}>Tap for more details</Text>
                    </View>
                  </TouchableOpacity>
                );
              }}
              keyExtractor={item => item.id.value}
            />
          </View>;
        }

      }
    }
    return (
      <Container>
        <HeaderComponent Title="Friends" IconName="users" />
        <Content>
          {content}
        </Content>
        <FooterComponent />
      </Container>
    )
  }
}

const styles = {
  itemContainer: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    marginBottom: 1
  },
  itemTitle: {
    fontSize: 20,
    color: '#457B9D',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'left',
    marginLeft: 10
  },
  itemImage: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  male: {
    backgroundColor: '#A8DADC'
  },
  female: {
    backgroundColor: 'pink'
  }
};

export default FriendsPage
