import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useSelector} from 'react-redux';
import {initialStateProps} from '../store/slice';
import Auth from './Auth';
import Stack from './Stack';

export type LoggedInParamList = {
  Stack: {
    screen: '';
    params: {id: number | null; uri: string | null} | null;
  };
  Auth: {
    screen: 'Signin' | 'Signup' | 'SignupCheck' | 'UnivList';
    params: null | {
      url: string;
      name: string;
      id: number;
      domain: string;
    };
  };
};

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
