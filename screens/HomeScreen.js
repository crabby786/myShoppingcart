import React from 'react';
import {
  AsyncStorage,
} from 'react-native';
import {
  Container, Icon, Header, Content, Card, CardItem, Text, Body, Button, Left, Right 
} from 'native-base';


export default function HomeScreen(props) {
  const { navigation } = props;
  const _signOutAsync = async () => {
    await AsyncStorage.clear();
    navigation.navigate('Auth');
  };
  return (
    <Container>
      <Header>
          <Left>
          <Button transparent>
              <Icon name="menu" />
            </Button>
        </Left>

          <Body>
            <Text>Dashboard</Text>
          </Body>
          <Right>
            <Button transparent onPress={_signOutAsync}>
              <Icon name="log-out" />
            </Button>
          </Right>

        </Header>
      <Content>
          <Card>
            <CardItem header>
              <Text>welcome Guest</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                  Your text here
                </Text>
              </Body>
            </CardItem>
            <CardItem footer>
              <Text>See more</Text>
            </CardItem>
          </Card>
        </Content>
    </Container>

  );
}
