import React, { Component } from 'react';
import { Container, Button, Text } from 'native-base';
import Admob from '../../Components/Admob.js';

export default class Post extends Component {
  render() {
    const { params } = this.props.navigation.state;
    return (
      <Container>
        <Button>
          <Text>
            Button
          </Text>
        </Button>
        <Admob />
      </Container>
    );
  }
}