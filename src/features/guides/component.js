import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet, TouchableHighlight } from 'react-native';
import axios from 'axios'
import { constants } from '../../constants'
import { Guide } from './guide/component';

export class Guides extends React.Component {
  static navigationOptions = {
    title: 'Guides',
  };

  state = {
    guides: null,
  }

  componentWillMount() {
    axios.get(`http://${constants.serverAddress}:8080/api/guides`)
      .then((response) => {
        const guides = []
        response.data.guides.forEach((guide, index) => {
          guides[index] = {
            name: guide.name,
            image: `http://${constants.serverAddress}${guide.image.slice(16)}`,
            rating: guide.rating,
            id: index,
            date: guide.updatedAt,
            description: guide.description
          }
        })
        this.setState({
          guides: guides
        })

      })
      .catch((error) => {
        console.log(error);
      })
  }

  renderGuides() {
    return this.state.guides.map((guide) => {
      return (
        <TouchableHighlight key={guide.id} onPress={() => this.props.selectGuide(+guide.id)}>
          <View style={styles.guide} >
            <Image style={{ width: 100, height: 100 }} source={{ uri: guide.image }} />
            <View style={styles.info}>
              <Text>Guide name: {guide.name}</Text>
              <Text>Rating: {guide.rating}</Text>
            </View>
          </View>
        </TouchableHighlight>
      )
    })

  }
  render() {
    return (
      <View>
        <ScrollView>
          {this.state.guides
            ? (this.props.numberGuide !== -1)
              ? <Guide selectGuide={this.props.selectGuide}
                guide={this.state.guides[this.props.numberGuide]}
              />
              : this.renderGuides()
            : null
          }
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  guide: {
    flex: 1,
    flexDirection: 'row',
    padding: 10
  },
  info: {
    padding: 2,
    fontSize: 2
  }
});