import { createNativeStackNavigator } from "@react-navigation/native-stack";
import List from "../screens/List";
const Stack = createNativeStackNavigator();
import AddTask from "../screens/AddTask";
const RootNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="List" component={List}></Stack.Screen>
      <Stack.Screen name="AddTask" component={AddTask}></Stack.Screen>
    </Stack.Navigator>
  );
};
export default RootNavigation;
