import React from 'react';
import { FlatList, ActivityIndicator, Text, View } from 'react-native';
import axios from 'react-native-axios';
export default class AxiosExample extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
        }
    }
    handleResponse = (response) => {
        this.setState({
            isLoading: false,
            dataSource: JSON.parse(response)
        })
    }
    componentDidMount() {
        // Network Calls Using AXIOS
        axios.get('https://facebook.github.io/react-native/movies.json', {
            params: {
                //   ID: 12345
            }
        })
        .then(response => {
            this.handleResponse(JSON.stringify(response.data))
        })
        .catch(function (error) {
            alert(error);
        });
    }
    render() {
        const { isLoading, dataSource } = this.state;
        if (isLoading) {
            return (
                <View style={{ flex: 1, padding: 20 }}>
                    <ActivityIndicator />
                </View>
            )
        }
        return (<View>
            <Text>{dataSource.title}</Text>
            <Text>{dataSource.description}</Text>
            <FlatList
                data={dataSource.movies}
                renderItem={({ item }) => <Text>{item.title}, {item.releaseYear}</Text>}
                keyExtractor={({ id }, index) => id}
            />
        </View>
        );
    }
}
