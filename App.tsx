import { NavigationContainer } from "@react-navigation/native";
import { navigationRef } from "./src/Navigation";
import Navigation from "./src/Navigation/RouteNavigator";

export default function App() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Navigation />
    </NavigationContainer>
  );
}
