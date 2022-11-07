import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {StyleSheet, View, Text, Image} from 'react-native';
import Loggin from './Loggin';

const Tab = createBottomTabNavigator();

const NavigationTabContainer = () => {
  function HomeScreen() {
    const style = StyleSheet.create({
      subtitle: {
        fontSize: 20,
        textAlign: 'center',
      },
    });
    return (
      <View style={{flex: 1, alignItems: 'center', marginTop: 40}}>
        <Image
          style={{
            width: 200,
            height: 200,
            borderRadius: 100,
            marginBottom: 20,
          }}
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_3uV7Sol0iLxijVaqm1gITm5z8YqyzeqX6-vMJvihE8qa0uwV2e8JWNw2YKue3ZM47Jk&usqp=CAU',
          }}
        />
        <Text style={style.subtitle}>
          Esta es la pantalla de inicio de la navegación tab
        </Text>
      </View>
    );
  }

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,

        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused
              ? 'information-circle'
              : 'information-circle-outline';
          } else if (route.name === 'Iniciar sesión') {
            iconName = focused ? 'list' : 'list-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Iniciar sesión" component={Loggin} />
    </Tab.Navigator>
  );
};

export default NavigationTabContainer;
