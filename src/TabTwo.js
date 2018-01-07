import React,{Component} from 'react';
import { Text } from 'react-native';
import { Font } from 'expo';
import { Container, Header, Item, Input,Button } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
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
            'FontAwesome': require('react-native-vector-icons/Fonts/FontAwesome.ttf')
        });
        this.setState({ fontLoaded: true});
    }
  render(){
    return(
        <Container>
          {this.state.fontLoaded ? (
        <Header searchBar rounded style={{backgroundColor: '#3BB9FF'}} >
          <Item>
            <Text>  </Text>
            <Icon name="search" size={20}/>
            <Text>   </Text>
            <Input placeholder="Search Twitter" />
          </Item>
          {/* <Button transparent>
            <Text>Search</Text>
          </Button> */}
        </Header>
        ) : null 
      }
        </Container>
    );
  }
}
