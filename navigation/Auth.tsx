import React from 'react';
import Home from '../screen/Auth/Home';
import Signin from '../screen/Auth/Signin';
import Signup from '../screen/Auth/Signup';
import SignupCheck from '../screen/Auth/SignupCheck';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
const NativeStack = createNativeStackNavigator();

const Auth = () => (
  <NativeStack.Navigator
    screenOptions={{
      headerBackTitleVisible: true,
      headerTitleStyle: {
        fontWeight: '700',
      },
      contentStyle: {backgroundColor: 'white'},
      presentation: 'card',
    }}>
    <NativeStack.Screen name="Home" component={Home} />
    <NativeStack.Screen name="Signin" component={Signin} />
    <NativeStack.Screen name="Signup" component={Signup} />
    <NativeStack.Screen name="SignupCheck" component={SignupCheck} />
  </NativeStack.Navigator>
);

export default Auth;
