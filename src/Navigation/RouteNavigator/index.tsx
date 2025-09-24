import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../../screens/Home ";
import SalonServices from "../../screens/SalonServices";

export type RootStackParamList = {
  Home: undefined;
  Details: { item: any } | undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const Navigation = () => {
  return (
    <Stack.Navigator
      initialRouteName={"Home"}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name={"Home"} component={HomeScreen} />
      <Stack.Screen name={"Details"} component={SalonServices} />
    </Stack.Navigator>
  );
};

export default Navigation;
