import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useSelector} from 'react-redux';
import {initialStateProps} from '../store/slice';
import Auth from './Auth';
import Stack from './Stack';

const Nav = createNativeStackNavigator();

const Root = () => {
  const {isLoggedIn} = useSelector((state: initialStateProps) => ({
    isLoggedIn: state.isLoggedIn,
  }));

  return (
    <Nav.Navigator
      screenOptions={{
        presentation: 'modal',
        headerShown: false,
      }}>
      {!isLoggedIn ? (
        <Nav.Screen name="Auth" component={Auth} />
      ) : (
        <Nav.Screen name="Stack" component={Stack} />
      )}
    </Nav.Navigator>
  );
};

export default Root;
