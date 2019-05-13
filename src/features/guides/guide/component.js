import React from 'react';
import { View, Text, Button, ScrollView, Image } from 'react-native';

export class Guide extends React.Component {
    static navigationOptions = {
        title: 'Guide',
    };

    goBack = () => {
        this.props.selectGuide(-1);
    }
    render() {
        return (
            <ScrollView>
                <View style={{padding: 10}}>
                    <Text style={{textAlign: 'center', fontSize: 25}}>{this.props.guide.name}</Text>
                    <Text style={{textAlign: 'center', fontSize: 18}}>Rating: {this.props.guide.rating}</Text>
                    <View style={{flex: 1, alignItems: 'center'}}>
                        <Image source={{ uri: this.props.guide.image }} style={{ width: 250, height: 200 }}/>
                        <Text style={{padding: 10}}>{this.props.guide.description}</Text>
                    </View>
                    <Text style={{textAlign: 'right'}}>{new Date(this.props.guide.date).toDateString()}</Text>
                    <Button
                        title="Go to Home"
                        onPress={this.goBack}
                    />
                </View>
            </ScrollView>  
        )
    }
}