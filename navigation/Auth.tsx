import React from 'react';
import Home from '../screen/Auth/Home';
import Signin from '../screen/Auth/Signin';
import Signup from '../screen/Auth/Signup';
import SignupCheck from '../screen/Auth/SignupCheck';
import UnivList from '../screen/Auth/UnivList';
import Icon from 'react-native-vector-icons/Ionicons';
import {NavigationProp, useNavigation} from '@react-navigation/native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import styled from 'styled-components/native';
import {LoggedInParamList} from './Root';
const NativeStack = createNativeStackNavigator();

const BackButton = styled.Pressable`
  width: 30px;
  height: 30px;
  background-color: #c8f3e0;
  border-radius: 30px;
  align-items: center;
  justify-content: center;
`;

const Auth = () => {
  const navigation = useNavigation<NavigationProp<LoggedInParamList>>();

  return (
    <NativeStack.Navigator
      screenOptions={{
        headerBackTitleVisible: true,
        headerTitleStyle: {
          fontWeight: '700',
        },
        contentStyle: {backgroundColor: 'white'},
        presentation: 'card',
        headerTitleAlign: 'center',
      }}>
      <NativeStack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <NativeStack.Screen
        name="Signin"
        component={Signin}
        options={{
          headerShadowVisible: false,
          headerTitle: '로그인',
          headerLeft: () => (
            <BackButton
              onPress={() => {
                navigation.goBack();
              }}>
              <Icon name="chevron-back-outline" color={'#42B883'} size={18} />
            </BackButton>
          ),
        }}
      />
      <NativeStack.Screen
        name="Signup"
        component={Signup}
        options={{
          headerShadowVisible: false,
          headerTitle: '가입하기',
          headerLeft: () => (
            <BackButton
              onPress={() => {
                navigation.goBack();
              }}>
              <Icon name="chevron-back-outline" color={'#42B883'} size={18} />
            </BackButton>
          ),
        }}
      />
      <NativeStack.Screen name="SignupCheck" component={SignupCheck} />
      <NativeStack.Screen name="UnivList" component={UnivList} />
    </NativeStack.Navigator>
  );
};

export default Auth;
