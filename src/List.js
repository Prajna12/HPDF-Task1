import React,{Component} from 'react';
import { Text } from 'react-native';
import { Font } from 'expo';
import { Container} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
export default class Lists extends Component {
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
        <Container style={{flex: 1,
          justifyContent: 'center',
          alignItems: 'center'}}>
          {this.state.fontLoaded ? (
        <Text style={{fontSize: 25}} >No Lists</Text>
        ) : null 
      }
        </Container>
    );
  }
}
