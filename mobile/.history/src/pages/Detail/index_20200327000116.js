import React from 'react';
import { Feather } from '@expo/vector-icons';
import { View, Image, TouchableOpacity } from 'react-native';

import styles from './styles';

import logoImg from '../../assets/logo.png';

export default function Detail() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />

        <TouchableOpacity onPress={() => { }}>
          <Feather name="arrow-left" size={28} color="#e82041" />
        </TouchableOpacity>

        <View style={styles.incident}>
          <Text style={styles.incidentProperty}>ONG:</Text>
          <Text style={styles.incidentValue}>APAD</Text>

          <Text style={styles.incidentProperty}>CASO:</Text>
          <Text style={styles.incidentValue}>cadelinha atropelada</Text>

          <Text style={styles.incidentProperty}>VALOR:</Text>
          <Text style={styles.incidentValue}>R$ 120,00</Text>
        </View>

      </View>


    </View>
  );
}