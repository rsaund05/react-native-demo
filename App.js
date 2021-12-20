import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from "./src/screens/ComponentsScreen";
import ListScreen from "./src/screens/ListScreen";
import ImageScreen from "./src/screens/ImageScreen";
import CounterScreen from "./src/screens/CounterScreen";
import ColourScreen from "./src/screens/ColourScreen";
import ColourBoxScreen from "./src/screens/ColourBoxScreen";
import TextScreen from "./src/screens/TextScreen";
import BoxScreen from "./src/screens/BoxScreen";

//Test comment, please ignore
//Stack navigator is an object that decides what content is going to be shown on screen at any given time
const navigator = createStackNavigator(
  {
	Home: HomeScreen,
	Components: ComponentsScreen,
	List: ListScreen, 
	Image: ImageScreen,
	Counter: CounterScreen,
	Colour: ColourScreen,
	Box: ColourBoxScreen,
	Text: TextScreen,
	BoxObj: BoxScreen
  },
  {
	initialRouteName: "Home",
	defaultNavigationOptions: {
	  title: "React Native Demo",
	},
  }
);

export default createAppContainer(navigator);
