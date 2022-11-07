import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {MainStackNavigator, LogginNavigator} from './StackNavigation';
import NavigationTabContainer from './NavigationTabContainer';
import About from './About';

export default function DrawerNavigatorCont() {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={NavigationTabContainer} />
      <Drawer.Screen name="Ayuda" component={About} />
    </Drawer.Navigator>
  );
}
