import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './App/Screens/Home';
import Video from './App/Screens/VideoCarga';
import CalcularCarga from './App/Screens/CalcularCarga';
import SubMenuScreen from './App/Screens/SubMenuScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Video"
          component={Video}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CalcularCarga"
          component={CalcularCarga}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SubMenuScreen"
          component={SubMenuScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
