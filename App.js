import React, { Component } from 'react';
import { Text, View, Image, Button, FlatList } from 'react-native';
import Greeting from './src/Components/Greeting';
import Styles from './src/Styles/Styles';
import HelloWorldApp from './src/Components/HellloWorldApp';
import Bananas from './src/Components/Bananas';
import LotsOfGreetings from './src/Components/LotsOfGreetings';
import BlinkApp from './src/Components/BlinkApp';
import LotsOfStyles from './src/Components/LotsOfStyles';
import FixedDimensionsBasics from './src/Components/FixedDimensionsBasics';
import FlexDimensionsBasics from './src/Components/FlexDimensionsBasics';
import FlexDirectionBasics from './src/Components/FlexDirectionBasics';
import JustifyContentBasics from './src/Components/JustifyContentBasics';
import AlignItemsBasics from './src/Components/AlignItemsBasics';
import PizzaTranslator from './src/Components/PizzaTranslator';
import ButtonBasics from './src/Components/ButtonBasics';
import Touchables from './src/Components/Touchables';
import IScrolledDownAndWhatHappenedNextShockedMe from './src/Components/IScrolledDownAndWhatHappenedNextShockedMe';
import FlatListBasics from './src/Components/FlatListBasics';
import SectionListBasics from './src/Components/SectionListBasics';
import FetchExample from './src/Components/FetchExample';
import AxiosExample from './src/Components/AxiosExample';
export default class App extends Component {
    componentDidMount() {
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
        return (
            // <HelloWorldApp />
            // <Bananas />
            // <LotsOfGreetings />
            // <BlinkApp />
            // <LotsOfStyles />
            // <FixedDimensionsBasics />
            // <FlexDimensionsBasics />
            // <FlexDirectionBasics />
            // <JustifyContentBasics />
            // <AlignItemsBasics />
            // <PizzaTranslator />
            // <ButtonBasics />
            // <Touchables/>
            // <IScrolledDownAndWhatHappenedNextShockedMe />
            // <FlatListBasics />
            // <SectionListBasics />
            // <FetchExample />
            <AxiosExample />

            // <View style={{ flex: 1, justifyContent: "center", alignItems: "center", flexDirection: 'column' }}>
            //     <Text style={Styles.bigBlue}>Hello, world!</Text>
            //     {/* Passing data from Parent to Child and vice-versa */}
            //     <Greeting name='Shantanu' customPropName={(data) => this.parentMethod(data)}/> 
            //     {/* <BlinkApp/> */}
            //     <Text style={this.state.isShowingText ? Styles.red : Styles.bigBlue}>{this.state.isShowingText ? 'Text has been Changed' : 'This is Sample Text'}</Text>
            //     <Button onPress={() => { this.changeText() }}
            //         title="Change Text"
            //         style={{ marginTop: 30 }}
            //     />
               
                
            // </View>
        );
    }
}
