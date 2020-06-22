import { createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
import GroundScreen from "./src/screens/GroundScreen";

const navigator = createStackNavigator({
  Home: HomeScreen,
  Ground: GroundScreen
},{
  initialRouteName: 'Home'
});

export default createAppContainer(navigator);



