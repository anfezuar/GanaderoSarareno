import React from 'react';
import {View, Text} from 'react-native';

import {titleAliment} from './constants';

function ChickenFood({aliment}) {
  return (
    <View>
      <View>
        <Text>{titleAliment}</Text>
        <Text>{aliment}</Text>
      </View>
    </View>
  );
}

export default ChickenFood;
