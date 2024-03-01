import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import Register from "../screens/Register";
import Login from "../screens/Login";
const Stack = createNativeStackNavigator();

const RootNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home}></Stack.Screen>
      <Stack.Screen name="Login" component={Login}></Stack.Screen>
      <Stack.Screen name="Register" component={Register}></Stack.Screen>
    </Stack.Navigator>
  );
};
export default RootNavigation;
