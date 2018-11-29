import Variables from '../Variables';

const Styles = {
    quizContainer: {
        height: '90%',
        width: '100%',
        backgroundColor: Variables.bgColorLight,
        borderTop: 2,
        borderBottom: 2,
        borderTopColor: 'black',
        borderBottomColor: 'black'
    },
    labelContainer: {
        height: "10%",
        width: "100%",
        alignItems: 'flex-end',
        marginRight: 20,
        justifyContent: 'center'
    },
    questionContainer:{
        paddingLeft: 5,
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 10,
        paddingBottom: 5,
    },
    question: {
        flex: 1,
        fontSize: 15,
    },
    checkboxContainer: {
        backgroundColor: Variables.themeColorLight,
        borderRadius: 15
    },
    choiceTextStyle:{
        color: 'white'
    }
}
export default Styles;