import React, { Component } from 'react';
import { Text, View, Image, Button, FlatList } from 'react-native';
import Greeting from './Components/Greeting';
import Styles from './Styles/Styles';
import HelloWorldApp from './Components/HellloWorldApp';
import Bananas from './Components/Bananas';
import LotsOfGreetings from './Components/LotsOfGreetings';
import BlinkApp from './Components/BlinkApp';
import LotsOfStyles from './Components/LotsOfStyles';
import FixedDimensionsBasics from './Components/FixedDimensionsBasics';
import FlexDimensionsBasics from './Components/FlexDimensionsBasics';
import FlexDirectionBasics from './Components/FlexDirectionBasics';
import JustifyContentBasics from './Components/JustifyContentBasics';
import AlignItemsBasics from './Components/AlignItemsBasics';
import PizzaTranslator from './Components/PizzaTranslator';
import ButtonBasics from './Components/ButtonBasics';
import Touchables from './Components/Touchables';
import IScrolledDownAndWhatHappenedNextShockedMe from './Components/IScrolledDownAndWhatHappenedNextShockedMe';
import FlatListBasics from './Components/FlatListBasics';
import SectionListBasics from './Components/SectionListBasics';
import FetchExample from './Components/FetchExample';
import AxiosExample from './Components/AxiosExample';
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
