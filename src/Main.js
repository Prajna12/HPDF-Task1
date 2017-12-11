import React from 'react';
import {  Header, Left, Body,Right, Button, Icon, Title,Thumbnail,Tabs,TabHeading,Fab,Footer,FooterTab,Container, Tab,Text,ScrollableTab} from 'native-base';
import {TouchableOpacity,StyleSheet,View} from 'react-native';
import {PropTypes} from 'prop-types';
import Tab1 from './TabOne';
import Tab2 from './TabTwo';
import Tab3 from './TabThree';
import Tab4 from './TabFour';
export default class Main extends React.Component {
    constructor(){
        super();
        this.state = {
          fontLoaded: false,
   
        };
      }
    async componentWillMount() {
          await Expo.Font.loadAsync({
            'Roboto': require('native-base/Fonts/Roboto.ttf'),
            'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
        });
        this.setState({ fontLoaded: true});
    }
    static contextTypes = {
        drawer: PropTypes.object.isRequired,
      };
  render() {
    return (
        <Container>
        <View style={{paddingTop:Expo.Constants.statusBarHeight}}>
        <Header hasTabs style={{backgroundColor: "white"}} 
          <Left>
            <TouchableOpacity onPress={this.context.drawer.open}>
            <Thumbnail source={require("../images/face8.jpeg")} />
            </TouchableOpacity>
          </Left>
          <Body>
          {this.state.fontLoaded ? (
            <Title style={{color: "black",alignContent: 'flex-start'}} >Home</Title>
              ) : null 
          }
          </Body>
          <Right />
        </Header>
        </View>
        <Tabs initialPage={0} 
         tabBarUnderlineStyle={{backgroundColor:'#3BB9FF',borderBottomWidth:0}} >
          <Tab heading={ <TabHeading style={{backgroundColor:'white'}}><Icon name="home" style={{color:'#3BB9FF'}} /></TabHeading> } >
            <Tab1 />
          </Tab>
          <Tab heading={ <TabHeading style={{backgroundColor:'white'}} ><Icon name="search" style={{color:'#3BB9FF'}} /></TabHeading> }
          >
            <Tab2 />
          </Tab>
          <Tab heading={ <TabHeading style={{backgroundColor:'white'}}><Icon name="notifications" style={{color:'#3BB9FF'}}/></TabHeading> }>
                     <Tab3 />
          </Tab>
          <Tab heading={ <TabHeading style={{backgroundColor:'white'}}><Icon name="mail" style={{color:'#3BB9FF'}} /></TabHeading> }
          >
            <Tab4 />
          </Tab>
        </Tabs>
        <Fab style={{ backgroundColor: '#3BB9FF', marginBottom: 30 }} position="bottomRight">
            <Icon name="create" />
        </Fab>
        <Footer style={{backgroundColor: 'white'}}>
        {this.state.fontLoaded ? (
                  <FooterTab style={{backgroundColor: 'white'}}>
                    <Button >
                      <Text style={{fontSize: 12, color: '#3BB9FF', fontWeight: 'bold'}}>All</Text>
                    </Button>
                    <Button>
                      <Text style={{  fontWeight: 'bold'}}>Mentions</Text>
                    </Button>
                    <Right>
                      <Icon style={{ marginRight: 10, color: '#3BB9FF' }} name='settings'></Icon>
                  </Right>
                  </FooterTab>         
             ) : null 
         }
         </Footer>
         </Container>
    );
  }
}
