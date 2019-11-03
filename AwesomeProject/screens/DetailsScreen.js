import React from "react";
import {Button, Text, View} from "react-native";

class DetailsScreen extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('customTitle', 'No default')
        };
    };

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Details Screen</Text>
                <Button
                    title="Go to Home"
                    onPress={() => this.props.navigation.goBack()}
                />
                <Button
                    title="Update the title"
                    onPress={() => this.props.navigation.setParams({ customTitle: 'Updated gubs!' })}
                />
            </View>
        );
    }
}

export default DetailsScreen;