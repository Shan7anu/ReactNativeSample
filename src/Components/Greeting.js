import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

class Greeting extends Component {
    render() {
        return (
            <View style={{ alignItems: 'center' }}>
                <Text>Hello {this.props.name}!</Text>

                <Button
                    onPress={() => {this.props.akash("Data from Child")}}
                    title="Child"
                />


            </View>
        );
    }
}

export default Greeting;