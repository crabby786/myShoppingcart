import React , { Component } from 'react';
import Expo from 'expo';
import { AsyncStorage,StyleSheet,Image } from 'react-native';
import { Container, Item, Input, Header, Body, Content, Label, Button, Text, Form, H3 } from 'native-base';
import {Block} from "../components";
import * as theme from '../constants/theme';


const validate = values => {
  const error= {};
  error.password= '';
  error.name= '';
  var pwd = values.password;
  var nm = values.name;
  return error;
};

class LoginScreen extends React.Component {
  static navigationOptions = {
    title: 'Login',
  };
  constructor(props){
    super(props);
    this.state={
      isReady: false,
      username:'',
      password:''
    };
  }
   componentWillMount() {
      // await Expo.Font.loadAsync({
      //   'Roboto': require('native-base/Fonts/Roboto.ttf'),
      //   'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
      // });
      this.setState({isReady: true});
    }
  
    render() {
    const { navigation } = this.props;
    return (
      <Container>
        <Block center middle>
          <Block>
            <Image
              source={require("../assets/images/Base/Logo.png")}
              style={{ height: 28, width: 102 }}
            />
          </Block>
          <Block flex={2.5} center>
            <H3 style={{ marginBottom: 6 }}>
              Sign in to Ekart
            </H3>
            <Text style={{color:theme.black3}}>
              Please enter your credentials to proceed.
            </Text>
            <Block center style={{ marginTop: 44 }}>
              <Item floatingLabel
                style={{ marginBottom: 25 }}>
                  <Label>Email address</Label>
              <Input/>
              </Item>
              
              <Item floatingLabel last  style={{ marginBottom: 25 }}>
                <Label>Password</Label>
              <Input/>
              </Item>
              <Button block primary
                style={{ marginBottom: 12 }}
                onPress={this._signInAsync}
              >
                <Text >Login</Text>
              </Button>
              <Text style={{color:theme.gray}}>
                Don't have an account?{" "}
                <Text
                  style={{color:theme.blue,height:18}}
                  // onPress={() => navigation.navigate("Register")}
                >
                  Sign up
                </Text>
              </Text>
            </Block>
          </Block>
        </Block>
      </Container>
    );
  }

  _signInAsync = async () => {
    let userName = this.state.username;
    await AsyncStorage.setItem('userToken', userName);
    this.props.navigation.navigate('App');
  };
}

export default LoginScreen;
