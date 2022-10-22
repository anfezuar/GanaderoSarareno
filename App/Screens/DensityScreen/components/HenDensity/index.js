import React, {useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

import styles from './styles';

function HenDensity({hens, area}) {
  const title =
    'Cantidad aproximada de gallinas ponedoras que se pueden tener en esta área';
  const titleArea = 'Área del galpón';
  const titleHenType = 'Escoja el clima de la zona';
  const titleNido = 'Cantidad de nidos en el galpón';
  const [selected, setSelected] = useState('');
  const henSelected = item => setSelected(hens[`${item}`]);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');
  const [items, setItems] = useState([
    {label: 'Seleccione una opción', value: ''},
    {label: 'Frío menos de 17 °C', value: 'cold'},
    {label: 'Templado entre 17 y 24 °C', value: 'tempered'},
    {label: 'Cálido mas de 24 °C', value: 'warm'},
  ]);
  return (
    <View style={styles.container}>
      <Text style={[styles.titleResult, styles.resultContainer]}>
        {titleHenType}
      </Text>
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        onChangeValue={item => henSelected(item)}
      />
      {value !== '' && (
        <ScrollView>
          <Text style={styles.titleResult}>{titleArea}</Text>
          <View style={styles.areaContainer}>
            <Text style={styles.textResult}>{`${area.toFixed(2)} m`}</Text>
            <Text style={styles.textExponente}>{2}</Text>
          </View>
          <Text style={styles.titleResult}>{title}</Text>
          <Text style={[styles.textResult]}>{`${selected} Aves`}</Text>
          <Text style={styles.titleResult}>{titleNido}</Text>
          <Text style={[styles.textResult]}>{`${selected / 5} Aves`}</Text>
        </ScrollView>
      )}
    </View>
  );
}

export default HenDensity;
