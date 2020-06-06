import React from 'react';
import { StyleSheet } from 'react-native';
import { Container } from 'native-base';
import RoutesComponent from './src/components/RoutesComponent';

export default function App() {
  return (
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
