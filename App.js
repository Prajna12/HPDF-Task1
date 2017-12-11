import {PropTypes,StyleSheet,Text,View} from 'react-native';
import React from 'react';
import {  Header, Left, Body,Right, Button, Icon, Title,Thumbnail,Tabs,TabHeading,Fab,Footer,FooterTab,Container,Tab} from 'native-base';
import Drawer from 'react-native-drawer';
import SideBar from './src/SideBar';
import Main from './src/Main';
export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      drawerOpen: false,
      drawerDisabled: false,
    };
  }
  closeDrawer = () => {
    this._drawer.close()
  };
  openDrawer = () => {
    this._drawer.open()
  };
  render() {
    return (
      <Drawer
        ref={(ref) => this._drawer = ref}
        type="static"
        content={ <SideBar /> }
        tapToClose={true}
        openDrawerOffset={0.2}
        panCloseMask={0.2}
        closedDrawerOffset={-3}
        styles={drawerStyles}
        tweenHandler={(ratio) => ({
        main: {opacity:(2-ratio)/2}
        })
       }
      >
      <Main />
      </Drawer>
    )
  }
}
const drawerStyles ={
  drawer: {shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3},
  main: {paddingLeft: 3}
}
