import React, { Component } from "react";
import { Container, Header, Content, Card, CardItem, Text, Body, DatePicker } from "native-base";
export default class CardItemBordered extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content padder>
          <Card>
            <CardItem header bordered>
              <Text>My Header</Text>
            </CardItem>
            <CardItem bordered>
              <Body>
                <DatePicker 
                  defaultDate={new Date(2018, 4, 4)}
                  minimumDate={new Date(2018, 1, 1)}
                />
              </Body>
            </CardItem>
            <CardItem footer bordered>
              <Text>My Footer</Text>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}