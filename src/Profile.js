import React,{Component} from 'react';
import { Text,Image } from 'react-native';
import { Container} from 'native-base';
export default class Profile extends Component {
  render(){
    return(
        <Container style={{flex: 1,
            justifyContent: 'center',
            alignItems: 'center'}}>
        <Text style={{fontSize: 35}} >Your Profile</Text>
        <Image source={require("../images/face8.jpeg")} />
        <Text style={{fontSize: 30}}>Prajna</Text>
        <Text style={{color: '#a9a9a9',fontSize: 28}}>  @Prajnab704</Text>
        <Text style={{fontSize: 28}}>91 Following      10 Followers</Text>
        </Container>
    );
  }
}
