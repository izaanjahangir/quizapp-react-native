import React, { Component } from 'react'
import { Text, View, ActivityIndicator, TouchableOpacity, Alert } from 'react-native'
import Variables from '../Variables';
import GeneralStyles from '../GeneralStyles';
import { CheckBox, Divider, Badge, Icon } from 'react-native-elements';
import Styles from './Styles';
import Trivia from '../../config/Trivia';

export default class QuizStart extends Component {
    constructor() {
        super();

        this.state = {
            isLoading: true,
            questions: null,
            currentIndex: 0,
            selectAnswerIndex: ''
        }

        this.validateNextButton = this.validateNextButton.bind(this);
        this.checkSelectedAnswer = this.checkSelectedAnswer.bind(this);
        this.nextQuestion = this.nextQuestion.bind(this);
    }
    static navigationOptions = {
        title: 'Simple Quiz',
        headerStyle: {
            backgroundColor: Variables.themeColorDark,
        },
        headerTintColor: Variables.fontColorLight
    };

    async componentDidMount() {
        const questions = await Trivia.fetchQuiz().catch(err => console.log("err -->", err));
        this.setState({ questions, isLoading: false })
        console.log("questions -->", questions)
    }

    selectAnswer(selectAnswerIndex) {
        this.setState({ selectAnswerIndex })
    }

    checkSelectedAnswer(index) {
        const { selectAnswerIndex } = this.state;
        return selectAnswerIndex === index
    }

    validateNextButton() {
        const { selectAnswerIndex } = this.state
        return Number.isInteger(selectAnswerIndex)
    }

    renderChoices(questionObj) {
        let choices = [questionObj.correct_answer];

        questionObj.incorrect_answers.forEach(answer => choices.push(answer));
        choices = choices.sort(); // randomized array so that correct answer wont alway be first

        return choices.map((c, index) =>
            <CheckBox
                title={c}
                checkedIcon='check-circle'
                checkedColor="white"
                uncheckedColor="white"
                uncheckedIcon='circle-o'
                onPress={this.selectAnswer.bind(this, index)}
                containerStyle={Styles.checkboxContainer}
                textStyle={Styles.choiceTextStyle}
                checked={this.checkSelectedAnswer(index)}
            />
        )
    }

    nextQuestion(){
        const { currentIndex, questions } = this.state;
        if(currentIndex < questions.length - 1){
            this.setState({currentIndex: currentIndex + 1, selectAnswerIndex: ""})
        }else{
            Alert.alert("", "done")
        }
    }

    render() {
        const { isLoading, questions, currentIndex } = this.state;

        return (
            <View style={GeneralStyles.container}>
                {
                    questions &&
                    <View style={GeneralStyles.fullWidthHeight}>
                        <View style={Styles.labelContainer}>
                            <Badge
                                value={`Questions left ${questions.length - (currentIndex + 1)}`}
                                textStyle={{ color: 'white' }}
                                containerStyle={{ backgroundColor: Variables.themeColorLight }}
                            />
                        </View>
                        <View style={Styles.quizContainer}>
                            <View style={Styles.questionContainer}>
                                <Badge
                                    value={currentIndex + 1}
                                    containerStyle={{ width: 40, height: 40 }}
                                    textStyle={{ color: 'white', fontWeight: 'bold' }}
                                />
                                <Text style={[Styles.question, { marginLeft: 10 }]}> {questions[currentIndex].question} </Text>
                            </View>
                            <Divider style={GeneralStyles.divider} />
                            {this.renderChoices(questions[currentIndex])}
                            <TouchableOpacity style={[GeneralStyles.alignEnd, { marginRight: 20 }]} disabled={!this.validateNextButton()} onPress={this.nextQuestion}>
                                <Icon
                                    name='arrow-circle-o-right'
                                    type="font-awesome"
                                    color={this.validateNextButton() ? Variables.themeColorDark : Variables.themeColorDarkTransparent}
                                    size={50}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                }
                {
                    isLoading &&
                    <View style={GeneralStyles.loaderContainer}>
                        <ActivityIndicator size="large" color={Variables.themeColorDark} />
                    </View>
                }
            </View>
        )
    }
}
