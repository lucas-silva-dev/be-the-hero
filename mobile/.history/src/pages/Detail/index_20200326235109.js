import React from 'react';
import { Feather } from '@expo/vector-icons';
import { View, TouchableOpacity } from 'react-native';

import styles from './styles';

import logoImg from '../../assets/logo.png';

export default function Detail() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />


      </View>


    </View>
  );
}