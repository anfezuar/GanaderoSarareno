import React from 'react';
import {View, TouchableOpacity, Text, Image} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import CommonHeader from '../../components/CommonScreen';

import ApplicationStyles from '../../Themes/ApplicationStyles';
import styles from './styles';
import {getButtons} from './constants';

function SubMenuScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const title = route.params.title;
  const elementsToButton = getButtons(title, navigation, route.params);
  return (
    <CommonHeader title={title}>
      <View style={styles.content}>
        <Image
          source={route.params.icon}
          resizeMode={'contain'}
          style={styles.iconStyle}
        />
        <TouchableOpacity
          style={[ApplicationStyles.button, styles.subMenuButton]}
          onPress={elementsToButton.firstOnPress}>
          <Text style={ApplicationStyles.textButton}>
            {elementsToButton.firstButtonTitle}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[ApplicationStyles.button, styles.subMenuButton]}
          onPress={elementsToButton.secondOnPress}>
          <Text style={ApplicationStyles.textButton}>
            {elementsToButton.secondButtonTitle}
          </Text>
        </TouchableOpacity>
      </View>
    </CommonHeader>
  );
}

export default SubMenuScreen;
