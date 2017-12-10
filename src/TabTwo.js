import React,{Component} from 'react';
import { Text } from 'react-native';
import { Font } from 'expo';
import { Container, Header, Item, Input, Icon, Button } from 'native-base';

export default class Tab2 extends Component {
    constructor(){
        super();
        this.state = {
          fontLoaded: false
        };
      }
    async componentWillMount() {
          await Expo.Font.loadAsync({
            'Roboto': require('native-base/Fonts/Roboto.ttf'),
            'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
        });
        this.setState({ fontLoaded: true});
    }
  render(){
    return(
        <Container>
          {this.state.fontLoaded ? (
        <Header searchBar rounded style={{backgroundColor: '#3BB9FF'}} >
          <Item>
            <Icon name="search" />
            <Input placeholder="Search Twitter" />
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
        </Header>
        ) : null 
      }
        </Container>
    );
  }
}