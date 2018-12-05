import { createStackNavigator, createAppContainer  } from 'react-navigation';
import Home from '../screens/Home/Home';
import QuizStart from '../screens/QuizStart/QuizStart';
import Result from '../screens/Result/Result';

const Route = createStackNavigator({
    QuizStart: { screen: QuizStart },
    Home: { screen: Home },
    Result: { screen: Result },
});

const AppContainer = createAppContainer(Route);
export default AppContainer;