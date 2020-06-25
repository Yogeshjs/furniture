import { createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
import GroundScreen from "./src/screens/GroundScreen";
import ProductScreen from "./src/screens/ProductScreen";

const navigator = createStackNavigator({
  Home: HomeScreen,
  Ground: GroundScreen,
  Product: ProductScreen
},{
  initialRouteName: 'Home'
});

export default createAppContainer(navigator);



