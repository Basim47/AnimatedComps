import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

import { typography } from '@utils/typography';
import { WIDTH } from '@utils/device';

const InitialBox = () => {
  return (
    <>
      <Entypo name="magnifying-glass" size={24} style={styles.lens} />
      <View style={{ width: WIDTH - 160 }}>
        <Text style={styles.whereTo}>Where to?</Text>
        <Text numberOfLines={1} style={styles.subtitle}>Anywhere • Any week • Add guests</Text>
      </View>
    </>
  );
};

export default InitialBox;

const styles = StyleSheet.create({
  lens: {
    paddingTop: 4,
    paddingRight: 12,
    color: 'black',
  },
  whereTo: {
    fontFamily: typography.medium,
    color: 'black',
  },
  subtitle: {
    color: 'rgb(75,75,75)',
    fontSize: 12,
    fontFamily: typography.regular,
  },
});
