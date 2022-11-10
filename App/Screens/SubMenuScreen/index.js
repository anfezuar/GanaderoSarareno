import React from 'react';
import {View, Image} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import CommonHeader from '../../components/CommonScreen';
import CustomButton from '../../components/CustomButton';

import styles from './styles';
import {getButtons} from './constants';

function SubMenuScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const {title, icon} = route.params;
  const elementsToButton = getButtons(title, navigation, route.params);
  return (
    <CommonHeader title={title}>
      <View style={styles.content}>
        <Image
          source={icon}
          resizeMode={'contain'}
          style={[styles.iconStyle, title === 'Gallinas' && styles.iconHen]}
        />
        <View style={styles.buttonContainer}>
          <CustomButton
            onPress={elementsToButton.firstOnPress}
            title={elementsToButton.firstButtonTitle}
          />
        </View>
        <View style={styles.buttonContainer}>
          <CustomButton
            onPress={elementsToButton.secondOnPress}
            title={elementsToButton.secondButtonTitle}
          />
        </View>
      </View>
    </CommonHeader>
  );
}

export default SubMenuScreen;
