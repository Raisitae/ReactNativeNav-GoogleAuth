import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';

const About = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', marginTop: 40}}>
      <Image
        style={{width: 200, height: 200, borderRadius: 100, marginBottom: 20}}
        source={{
          uri: 'https://img.freepik.com/vector-gratis/gente-plana-haciendo-preguntas-ilustracion_23-2148910627.jpg',
        }}
      />
      <Text style={styles.subtitle}>
        Esta es la pantalla de ayuda de la navegación drawer
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  subtitle: {
    fontSize: 20,
    textAlign: 'center',
  },
});

export default About;
