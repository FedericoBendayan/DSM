import React from 'react'
import { Footer, FooterTab, Button, Text } from "native-base";

const styles = {
    fullButton: {
        flex:1,
        flexDirection:"row"
    },
};

const FooterComponent = () => (
    <Footer>
        <FooterTab>
            <Button full style={styles.fullButton}>
                <Text>Made by Federico Bendayan for DSM UTN FRC 2020, Cordoba Argentina.</Text>
            </Button>
        </FooterTab>
    </Footer>
);
export default FooterComponent