import React from 'react';
import Alert from '../screen/Alert';
import CustomerList from '../screen/Menu/CustomerList';
import ImageEdit from '../screen/Menu/ImageEdit';
import Inquiry from '../screen/Menu/Inquiry';
import InquiryDetail from '../screen/Menu/InquiryDetail';
import InquiryHistory from '../screen/Menu/InquiryHistory';
import InquiryList from '../screen/Menu/InquiryList';
import MenuList from '../screen/Menu/MenuList';
import NoticeDetail from '../screen/Menu/NoitceDetail';
import Notice from '../screen/Menu/Notice';
import Profile from '../screen/Menu/Profile';
import QuestionList from '../screen/Menu/QuestionList';
import Adding from '../screen/Stack/Adding';
import Basket from '../screen/Stack/Basket';
import Home from '../screen/Auth/Home';
import ItemDetail from '../screen/Stack/ItemDetail';
import Record from '../screen/Stack/Record';
import Search from '../screen/Stack/Search';
import StoreDetail from '../screen/Stack/StoreDetail';
import Stores from '../screen/Stack/Stores';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const NativeStack = createNativeStackNavigator();

const Stack = () => (
  <NativeStack.Navigator
    screenOptions={{
      headerBackTitleVisible: true,
      headerTitleStyle: {
        fontWeight: '700',
      },
      contentStyle: {backgroundColor: 'white'},
      presentation: 'card',
    }}>
    <NativeStack.Screen
      name="Alert"
      component={Alert}
      options={{title: '알림'}}
    />
    <NativeStack.Screen
      name="CustomerList"
      component={CustomerList}
      options={{title: '고객센터'}}
    />
    <NativeStack.Screen name="ImageEdit" component={ImageEdit} />
    <NativeStack.Screen name="Inquiry" component={Inquiry} />
    <NativeStack.Screen name="InquiryDetail" component={InquiryDetail} />
    <NativeStack.Screen name="InquiryHistory" component={InquiryHistory} />
    <NativeStack.Screen name="InquiryList" component={InquiryList} />
    <NativeStack.Screen name="MenuList" component={MenuList} />
    <NativeStack.Screen name="NoticeDetail" component={NoticeDetail} />
    <NativeStack.Screen name="Notice" component={Notice} />
    <NativeStack.Screen name="Profile" component={Profile} />
    <NativeStack.Screen name="QuestionList" component={QuestionList} />
    <NativeStack.Screen name="Adding" component={Adding} />
    <NativeStack.Screen name="Basket" component={Basket} />
    <NativeStack.Screen name="Home" component={Home} />
    <NativeStack.Screen name="ItemDetail" component={ItemDetail} />
    <NativeStack.Screen name="Record" component={Record} />
    <NativeStack.Screen name="Search" component={Search} />
    <NativeStack.Screen name="StoreDetail" component={StoreDetail} />
    <NativeStack.Screen name="Stores" component={Stores} />
  </NativeStack.Navigator>
);

export default Stack;
