import React from 'react';
import { FlatList, ActivityIndicator, Text, View } from 'react-native';

export default class FetchExample extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isLoading: true }
    }
    componentDidMount() {
        fetch('https://facebook.github.io/react-native/movies.json')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    isLoading: false,
                    title: responseJson.title,
                    description: responseJson.description,
                    dataSource: responseJson.movies
                }), () => { }
            })
            .catch((error) => {
                console.log(error);
            });
    }
    render() {
        const { isLoading, title, description, dataSource } = this.state;
        if (isLoading) {
            return (
                <View style={{ flex: 1, padding: 20, alignItems: 'center', justifyContent: 'center' }}>
                    <ActivityIndicator />
                </View>
            )
        }
        return (<View>
            <Text>{title}</Text>
            <Text>{description}</Text>
            <FlatList
                data={dataSource}
                renderItem={({ item }) => <Text>{item.title}, {item.releaseYear}</Text>}
                keyExtractor={({ id }, index) => id}
            />
        </View>
        );
    }
}
