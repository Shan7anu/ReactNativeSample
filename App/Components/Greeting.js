import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

class Greeting extends Component {
    render() {
        return (
            <View style={{ alignItems: 'center', paddingBottom: 35 }}>
                <Text style={{ padding: 35 }}>Hello {this.props.name}!</Text>
                <Button
                    onPress={() => {this.props.customPropName("Data from Child")}}
                    title="Press Me!"
                />
            </View>
        );
    }
}

export default Greeting;