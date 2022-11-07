import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import DrawerNavigatorCont from './DrawerNavigatorCont';

const App = () => {
  return (
    <NavigationContainer independent={true}>
      <DrawerNavigatorCont />
    </NavigationContainer>
  );
};
export default App;
