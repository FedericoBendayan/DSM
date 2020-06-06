import React from 'react'
import { Router, Scene, Drawer, Overlay, Modal, Lightbox, Stack, Tabs, Reducer } from 'react-native-router-flux'
import HomePage from '../pages/home/HomePage'
import FavoritesLocationsPage from '../pages/favorites-locations/FavoritesLocationsPage'
import FriendsPage from '../pages/friends/FriendsPage'
// import MyLocationsPage from '../pages/my-locations/MyLocationsPage'
import { StackViewStyleInterpolator } from 'react-navigation-stack';
import DrawerContentComponent from './DrawerContentComponent'
import { Platform } from 'react-native'
import FriendDetailsPage from '../pages/friends/FriendDetailsPage'


const transitionConfig = () => ({
    screenInterpolator:
        StackViewStyleInterpolator.forFadeFromBottomAndroid,
});

const styles = {
    container: {
        flex: 1,
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
    },
    tabBarStyle: {
        backgroundColor: '#eee',
    },
    tabBarSelectedItemStyle: {
        backgroundColor: '#ddd',
    },
};

const prefix = Platform.OS === 'android' ? 'mychat://mychat/' : 'mychat://';

const RoutesComponent = () => (

    <Router
        uriPrefix={prefix}
    >
        <Overlay key="overlay">
            <Modal key="modal" hideNavBar transitionConfig={transitionConfig}>
                <Lightbox key="lightbox">
                    <Stack key="root" hideNavBar titleStyle={{ alignSelf: 'center' }}>

                        <Drawer
                            hideNavBar
                            key="drawer"
                            contentComponent={DrawerContentComponent}
                            drawerWidth={300}>
                            <Scene hideNavBar>

                                <Scene key="HomePage" component={HomePage} title="Home" initial={true} />
                                <Scene key="FavoritesLocationsPage" component={FavoritesLocationsPage} title="Favorites locations" />
                                <Scene key="FriendsPage" component={FriendsPage} title="Friends" />
                                <Scene key="FriendDetailsPage" component={FriendDetailsPage} title="Friends" />
                                {/* <Scene key="MyLocationsPage" component={MyLocationsPage} title="My locations" /> */}

                            </Scene>
                        </Drawer>
                    </Stack>
                </Lightbox>
            </Modal>
        </Overlay>
    </Router>
);
export default RoutesComponent