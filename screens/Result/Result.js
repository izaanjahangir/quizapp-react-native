import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import Variables from '../Variables';
import GeneralStyles from '../GeneralStyles';
import Styles from './Styles';
import { StackActions, NavigationActions } from 'react-navigation';

export default class Result extends Component {
    constructor() {
        super();

        this.state = {
            isLoading: true,
            score: 0,
            total: 0
        }

    }
    static navigationOptions = {
        title: 'Simple Quiz',
        headerStyle: {
            backgroundColor: Variables.themeColorDark,
        },
        headerTintColor: Variables.fontColorLight
    };

    async componentDidMount() {
        const { score, total } = this.props.navigation.state.params;
        this.setState({ score, total })
    }

    navigateAndUnmount(routeName) {
        const resetAction = StackActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName })],
            key: null
        });
        this.props.navigation.dispatch(resetAction);
    }

    render() {
        const { score, total } = this.state;

        return (
            <View style={GeneralStyles.container}>
                {
                    <View style={[GeneralStyles.fullWidthHeight, GeneralStyles.perfectlyCentered]}>
                        <Text style={{ fontSize: 22 }}>Your score: {score} out of {total}</Text>
                        <TouchableOpacity style={[Styles.startBtn, GeneralStyles.smallMarginTop]} onPress={this.navigateAndUnmount.bind(this,"QuizStart")}>
                            <Text style={GeneralStyles.fontWhite}>Start Again</Text>
                        </TouchableOpacity>
                    </View>
                }
            </View>
        )
    }
}
