import React, {useState} from 'react';
import {View, Text} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

import styles from './styles';

function ChickenDensity({chickens, area}) {
  const title =
    'Cantidad aproximada de pollos que se pueden tener en esta área';
  const titleArea = 'Área del galpón';
  const titleChickenType = 'Escoja el clima de la zona';
  const [selected, setSelected] = useState('');
  const chickenSelected = item => setSelected(chickens[`${item}`]);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');
  const [items, setItems] = useState([
    {label: 'Seleccione una opción', value: ''},
    {label: 'Frío menos de 17 °C', value: 'cold'},
    {label: 'Templado entre 17 y 24 °C', value: 'tempered'},
    {label: 'Cálido mas de 24 °C', value: 'warm'},
  ]);
  return (
    <View>
      <Text style={[styles.titleResult, styles.resultContainer]}>
        {titleChickenType}
      </Text>
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        onChangeValue={item => {
          console.log('item', item);
          chickenSelected(item);
        }}
      />
      {value !== '' && (
        <>
          <Text style={styles.titleResult}>{titleArea}</Text>
          <View style={styles.areaContainer}>
            <Text style={styles.textResult}>{`${area.toFixed(2)} m`}</Text>
            <Text style={styles.textExponente}>{2}</Text>
          </View>
          <Text style={styles.titleResult}>{title}</Text>
          <Text style={[styles.textResult]}>{`${selected} Aves`}</Text>
        </>
      )}
    </View>
  );
}

export default ChickenDensity;
