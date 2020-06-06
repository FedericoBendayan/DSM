import React from 'react'
import { Button, Text, Header, Left, Icon, Title, Body, Right } from "native-base";
import { Actions } from 'react-native-router-flux';
import appStyles from '../styles/AppStyles';

const HeaderComponent = (props: { Title: string; IconName: string }) => {
    return (<Header>
        <Left>
            <Button transparent>
                <Icon name="menu" onPress={() => Actions.drawerToggle()} />
            </Button>
        </Left>
        <Body style={appStyles.titleAndIconContainer}>
            <Title style={appStyles.title}>{props.Title}</Title>
            <Icon name={props.IconName} type='FontAwesome5' style={appStyles.icon}/>
        </Body>
        <Right />
    </Header>);
};
export default HeaderComponent