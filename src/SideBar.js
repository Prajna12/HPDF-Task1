import React from "react";
import { Image, StatusBar, Settings } from "react-native";
import { Header,Footer,Left,Right,Card,CardItem,Text,Body,Container,Thumbnail,List,ListItem,Content,View,Icon} from "native-base";
import { StackNavigator } from 'react-navigation';
import Profile from './Profile';
import Lists from './List';
import high from './High';
import Moments from './Moment';
const routes = [
                {name: "Profile",icon: 'person'},
                {name: "Lists", icon: 'list-box'},
                {name: "Moments",icon: 'flash'}, 
                {name: 'Highlights',icon:'albums'} ];
let userdetails='';
export default class SideBar extends React.Component {
 
  constructor() {
    super();
    
    userdetails = {
          username: 'Prajna',
          userid: '@Prajnab704',
          following: 280,
          followers: 30,
          thumbnail: '../images/face2.jpeg',
        };
        //console.log(userdetails + 'user');
  }
  render() {
    const {username, userid,thumbnail,following,followers} = userdetails;
    //console.log(username);
    return (
      <Container>
        <Content>
        <Card>
            <CardItem >
              <View style = {{flex: 1,flexDirection: 'column', justifyContent: 'flex-end'}}>
                <Thumbnail source={require('../images/face8.jpeg')} />
                <Text style={{fontWeight: 'bold'}}>{username}</Text>
                <Text note>{userid}</Text>
                <View style = {{flexDirection: 'row'}} >
                   <Text>{following} Following </Text>
                   <Text >   {followers} Followers</Text>
                </View>
              </View>
             </CardItem>
            <CardItem style={{elevation: 2,borderBottomWidth: 4,borderTopWidth: 4}}>
               <List
                    dataArray={routes}
                    renderRow={data => {
                    return (
                    <ListItem
                     button noborder
                     
                     icon>
                <Left>
                   <Icon name={data.icon} style={{color: '#3BB9FF'}}/>
                </Left>
              <Body>
              <Text>{data.name}</Text>
              </Body>
              <Right/>
                
                  
                </ListItem>
              );
            }}
          />
          </CardItem>
          <CardItem >
            <List>
              <ListItem>
                  <Text>Settings and Privacy</Text>               
              </ListItem>
              <ListItem>
                  <Text>Help Center</Text>               
              </ListItem>
            </List>
          </CardItem>
          </Card>
          <Footer style={{backgroundColor:"white"}} >
            <Left>
             <Icon style={{ marginLeft: 20,color: '#3BB9FF'}} name='moon' ></Icon>
           </Left>
            <Right>
            <Icon style={{ marginRight: 15,color: '#3BB9FF' }} name='qr-scanner'></Icon>
            </Right>
          </Footer>
        </Content>
      </Container>
    );
  }
}
