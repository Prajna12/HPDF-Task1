import React,{Component} from 'react';
import { Text, Image } from 'react-native';
import { Font } from 'expo';
import { Container, Content, Left, Body, Button,Thumbnail, Card, CardItem } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
export default class Tab1 extends Component {
    constructor(props){
        super(props);
        this.state = {
          fontLoaded: false,
          refreshing: false,
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
        <Content style={{flex: 1}}>
        {/* <Spinner color='blue' /> */}
        {this.state.fontLoaded ? (
            <Card >
              <CardItem>
                <Left>
                  <Thumbnail source={require("../images/face7.jpeg")} />
                  <Body>
                    <Text>
                    <Text>Smarter Every Day</Text>
                    <Text style={{color: '#a9a9a9'}}>  @smarter  20m <Icon name="chevron-down" style={{color: '#a9a9a9'}}/></Text></Text>
                    <Text note>Fact for the day :)</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem>
                <Body style={{paddingLeft:50}} >
                  <Image source={require("../images/fact2.jpeg")} style={{flex: 1}}/>
                </Body>
              </CardItem>
              <CardItem style={{paddingLeft: 70, paddingRight: 30}} >
                <Left>
                  <Button transparent>
                    <Icon name="comment-o" style={{color: '#3BB9FF'}}/>
                    <Text>  60</Text>
                  </Button>
                  <Text>          </Text>
                  
                  <Button transparent>
                    <Icon name="retweet" style={{color: '#3BB9FF'}}/>
                    <Text>  19</Text>
                  </Button>
                  <Text>          </Text>
                  <Button transparent>
                    <Icon name="heart-o" style={{color: '#3BB9FF'}} />
                    <Text>  2</Text>
                  </Button>
                  <Text>          </Text>
                  <Button transparent >
                    <Icon name="envelope-o" style={{color: '#3BB9FF'}} />
                  </Button>
                </Left>
              </CardItem>
            </Card>
            ) : null 
          }
          {this.state.fontLoaded ? (
            <Card>
            <CardItem>
              <Left>
                <Thumbnail source={require("../images/face5.jpeg")} />
                <Body>
                  <Text>
                  <Text>Style Queen</Text>
                  <Text style={{color: '#a9a9a9'}}>  @stylerani  10m    <Icon name="chevron-down" style={{color: '#a9a9a9'}}/></Text></Text>
                  <Text note>Winter has begun!! Girls know more about dry skin and how to take care of your skin here</Text>
                  <Text note style={{color: 'blue'}} >https://know_more_about_dry_skin.html</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body style={{paddingLeft:50, paddingRight:20}}>
                <Image source={require("../images/fact3.jpeg")} style={{flex: 1}}/>
              </Body>
            </CardItem>
            <CardItem style={{paddingLeft: 70, paddingRight: 30}}>
              <Left>
                <Button transparent>
                  <Icon name="comment-o" style={{color: '#3BB9FF'}} />
                  <Text>  20</Text>
                </Button>
                <Text>          </Text>
                
                <Button transparent>
                  <Icon name="retweet" style={{color: '#3BB9FF'}}/>
                  <Text>  9</Text>
                </Button>
                <Text>          </Text>
                <Button transparent>
                    <Icon name="heart-o" style={{color: '#3BB9FF'}}/>
                    <Text>  2</Text>
                  </Button>
                  <Text>          </Text>
                <Button transparent>
                  <Icon name="envelope-o" style={{color: '#3BB9FF'}} />
                </Button>
              </Left>
            </CardItem>
          </Card>
            ) : null 
          }
          </Content>
          </Container>
    );
  }
}
