import { createStackNavigator, createAppContainer  } from 'react-navigation';
import Home from '../screens/Home/Home';
import QuizStart from '../screens/QuizStart/QuizStart';
import Result from '../screens/Result/Result';

const Route = createStackNavigator({
    Home: { screen: Home },
    QuizStart: { screen: QuizStart },
    Result: { screen: Result },
});

const AppContainer = createAppContainer(Route);
export default AppContainer;