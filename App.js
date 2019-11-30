import React, { Component } from 'react';
import { Text, View, Image, Button, FlatList } from 'react-native';
import Greeting from './src/Components/Greeting';
import BlinkApp from './src/Components/BlinkApp';
import Styles from './src/Styles/Styles';
import FixedDimensionsBasics from './src/Components/FixedDimensionsBasics';
import FetchExample from './src/Components/FetchExample';
import AxiosExample from './src/Components/AxiosExample';
import axios from 'react-native-axios';

export default class App extends Component {


    componentDidMount() {

        // Network Calls Using Fetch
        // fetch('https://facebook.github.io/react-native/movies.json')
        //     .then((response) => response.json())
        //     .then((responseJson) => {
        //         this.setState({
        //             isLoading: false,
        //             title: responseJson.title,
        //             description: responseJson.description,
        //             dataSource: responseJson.movies
        //         }), () => { }
        //     })
        //     .catch((error) => {
        //         console.log(error);
        //     });

        // Network Calls Using AXIOS
        // axios.get('https://facebook.github.io/react-native/movies.json', {
        //     params: {
        //         //   ID: 12345
        //     }
        // })
        // .then(response => {
        //     response = JSON.stringify(response.data);
        //     console.warn(response);
        //     this.setState({
        //         isLoading: false,
        //         title: response.title,
        //         description: response.description,
        //         dataSource: response.movies
        //     });

        // })
        // .catch(function (error) {
        //     alert(error);
        // });

    }

    state = {
        isShowingText: false
    };

    parentMethod = (data) => {
        alert(data);
    }

    changeText = () => {
        this.setState(previousState => (
            { isShowingText: !previousState.isShowingText }
        ))
    }



    render() {
        let pic = {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
        };
        return (
            <View style={{ flex: 1, backgroundColor: 'pink', justifyContent: 'center', alignItems: 'center' }}>
                {/* <FetchExample /> */}
                <AxiosExample />
                {/* <Text>{this.state.title}</Text>
                <Text>{this.state.description}</Text> */}

                {/* <FlatList
                        data={this.state.dataSource}
                        renderItem={({ item }) => <Text>{item.title}, {item.releaseYear}</Text>}
                        keyExtractor={({ id }, index) => id}
                    /> */}
            </View>

        );
        // return (
        //     <View style={{ flex: 1, justifyContent: "center", alignItems: "center", flexDirection: 'column' }}>

        //         {/* FetchExample */}
        //         <FetchExample />

        //         <Text style={Styles.bigBlue}>Hello, world!</Text>
        //         <Image source={pic} style={{ width: 193, height: 110, margin: 20 }} />



        //         {/* Passing data from Parent to Child and vice-versa */}
        //         {/* <Greeting name='Shantanu' akash={(data) => this.parentMethod(data)}/>  */}


        //         {/* <BlinkApp/> */}

        //         <Text style={this.state.isShowingText ? Styles.red : Styles.bigBlue}>{this.state.isShowingText ? 'Text has been Changed' : 'This is Sample Text'}</Text>


        //         <Button onPress={() => { this.changeText() }}
        //             title="Change Text"
        //             style={Styles.marginTen}
        //         />


        //         <Text style={Styles.red}>just red</Text>
        //         <Text style={Styles.bigBlue}>just bigBlue</Text>
        //         <Text style={[Styles.bigBlue, Styles.red]}>bigBlue, then red</Text>
        //         <Text style={[Styles.red, Styles.bigBlue]}>red, then bigBlue</Text>

        //         {/* Height & Width */}
        //         <FixedDimensionsBasics />




        //     </View>

        // );
    }
}



