import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './App/Screens/Home';
import Video from './App/Screens/VideoCarga';
import CalcularCarga from './App/Screens/CalcularCarga';
import SubMenuScreen from './App/Screens/SubMenuScreen';
import FoodScreen from './App/Screens/FoodScreen';
import DensityScreen from './App/Screens/DensityScreen';
import EggsScreen from './App/Screens/EggsScreen';

const Stack = createStackNavigator();

const App = () => {
  const withoutHeader = {headerShown: false};
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={withoutHeader} />
        <Stack.Screen name="Video" component={Video} options={withoutHeader} />
        <Stack.Screen
          name="CalcularCarga"
          component={CalcularCarga}
          options={withoutHeader}
        />
        <Stack.Screen
          name="SubMenuScreen"
          component={SubMenuScreen}
          options={withoutHeader}
        />
        <Stack.Screen
          name="FoodScreen"
          component={FoodScreen}
          options={withoutHeader}
        />
        <Stack.Screen
          name="DensityScreen"
          component={DensityScreen}
          options={withoutHeader}
        />
        <Stack.Screen
          name="EggsScreen"
          component={EggsScreen}
          options={withoutHeader}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
