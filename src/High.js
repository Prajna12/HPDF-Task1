import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
const cards = [
  {
    text: 'Top tweet from your timeline',
    name: '100',
    image: require('../images/fact4.jpeg'),
  },
  {
    text: 'Top tweet from your timeline',
    name: '70',
    image: require('../images/fact6.jpeg'),
  },
  {
    text: 'Top tweet from your timeline',
    name: '50',
    image: require('../images/fact5.jpeg'),
  },
];
export default class high extends Component {
  render() {
    return (
      <Container>
        <Header />
        <View>
          <DeckSwiper
            dataSource={cards}
            renderItem={item =>
              <Card>
                <CardItem>
                  <Left>
                    <Thumbnail source={require("../images/face3.jpeg")} />
                    <Body>
                      <Text>{item.text}</Text>
                      <Text note> @factsdaily</Text>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem cardBody style={{paddingLeft: 20}} >
                  <Image style={{ height: 200}} source={item.image} />
                </CardItem>
                <CardItem>
                  <Icon name="heart" style={{ color: '#ED4A6A' }} />
                  <Text>{item.name}</Text>
                </CardItem>
              </Card>
            }
          />
        </View>
      </Container>
    );
  }
}
