import React,{Component} from 'react';
import { Text } from 'react-native';
import { Font } from 'expo';
import { Container } from 'native-base';
export default class Moments extends Component {
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
        <Container style={{flex: 1,
          justifyContent: 'center',
          alignItems: 'center'}}>
        <Text style={{fontSize: 25}} >No Moments</Text>
        <Text style={{fontSize: 20}} >You haven't created your moments yet. </Text>
        <Text style={{fontSize: 20}}>When you do, you'll find it here.</Text>
        </Container>
    );
  }
}
