import { createNativeStackNavigator} from '@react-navigation/native-stack';

import Welcome from '../pages/Welcome'
import SignIn from '../pages/SignIn'

const STACK = createNativeStackNavigator();

// import { Container } from './styles';

const routes = () => {
  return(
      <STACK.Navigator>
          <STACK.Screen
            name="Welcome"
            component={Welcome}
            options={{ headerShown: false}}
            />
          <STACK.Screen
            name="SignIn"
            component={SignIn}
            options={{ headerShown: false}}
          />
      </STACK.Navigator>
  );
}

export default routes;