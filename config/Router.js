import { createStackNavigator, createAppContainer  } from 'react-navigation';
import Home from '../screens/Home/Home';
import QuizStart from '../screens/QuizStart/QuizStart';

const Route = createStackNavigator({
    Home: { screen: Home },
    QuizStart: { screen: QuizStart },
});

const AppContainer = createAppContainer(Route);
export default AppContainer;