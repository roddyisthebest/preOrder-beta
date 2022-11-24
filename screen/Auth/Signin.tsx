import React, {useEffect, useState, useRef} from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Button, ButtonText} from '../../components/utils/index';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {LoggedInParamList} from '../../navigation/Root';
import {useDispatch} from 'react-redux';
import {setAuth} from '../../store/slice';

const InputsWrapper = styled.View`
  margin: 20px 0 10px 0;
`;

const InputWrapper = styled.View`
  border-bottom-color: #dbdbdb;
  border-bottom-width: 1px;
`;

const InputLabel = styled.Text`
  font-size: 15px;
  font-weight: 500;
  color: #828282;
`;

const InputInstanceWrapper = styled.View`
  flex-direction: row;
  margin-top: 5px;
  height: 40px;
  align-items: center;
`;

const InputInstance = styled.TextInput`
  font-size: 15px;
  flex: 1;
`;

const ShowContentsButton = styled.Pressable`
  width: 20px;
  height: 20px;
  margin-left: 10px;
`;

const NavigateWrapper = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 35px;
  margin-top: 20px;
  /* background-color: black; */
`;

const NavigateLabel = styled.Text`
  color: #828282;
  font-size: 13px;
  font-weight: 300;
  margin-right: 10px;
`;

const NavigateButton = styled.TouchableOpacity``;

const NaviagateButtonText = styled.Text`
  color: #0e7de3;
  font-size: 18px;
  font-weight: 500;
`;

const Signin = () => {
  const navigation = useNavigation<NavigationProp<LoggedInParamList>>();
  const dispatch = useDispatch();
  const [security, setSecurity] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [visible, setVisible] = useState<boolean>(false);
  const [disabled, setDisabled] = useState<boolean>(true);
  const target = useRef<any>();
  useEffect(() => {
    setVisible(password.length !== 0);
  }, [password]);

  useEffect(() => {
    setDisabled(email.length === 0 || password.length === 0);
  }, [email, password]);

  return (
    <KeyboardAwareScrollView
      style={{marginHorizontal: 20, flex: 1}}
      extraScrollHeight={30}>
      <InputsWrapper>
        <InputWrapper style={{marginBottom: 20}}>
          <InputLabel>이메일</InputLabel>
          <InputInstanceWrapper>
            <InputInstance
              keyboardType="email-address"
              onChangeText={(text: string) => {
                setEmail(text);
              }}
              value={email}
              onSubmitEditing={() => {
                target.current.focus();
              }}
              returnKeyType="next"
              returnKeyLabel="next"
            />
          </InputInstanceWrapper>
        </InputWrapper>
        <InputWrapper>
          <InputLabel>비밀번호</InputLabel>
          <InputInstanceWrapper>
            <InputInstance
              ref={target}
              secureTextEntry={!security}
              onChangeText={(text: string) => {
                setPassword(text);
              }}
              value={password}
              onSubmitEditing={() => {
                dispatch(setAuth(true));
              }}
              returnKeyType="go"
              returnKeyLabel="login"
            />
            {visible ? (
              <ShowContentsButton
                onPress={() => {
                  setSecurity(prev => !prev);
                  console.log(security);
                }}>
                <Icon
                  name={security ? 'eye-off-outline' : 'eye-outline'}
                  color={'#42B883'}
                  size={18}
                />
              </ShowContentsButton>
            ) : null}
          </InputInstanceWrapper>
        </InputWrapper>
      </InputsWrapper>
      <Button
        type="default"
        disable={disabled}
        disabled={disabled}
        onPress={() => {
          dispatch(setAuth(true));
        }}>
        <ButtonText color={'white'}>로그인</ButtonText>
      </Button>
      <NavigateWrapper>
        <NavigateLabel>계정이 없으신가요?</NavigateLabel>
        <NavigateButton
          onPress={() => {
            navigation.navigate('Auth', {screen: 'Signup'});
          }}>
          <NaviagateButtonText>가입하기</NaviagateButtonText>
        </NavigateButton>
      </NavigateWrapper>
    </KeyboardAwareScrollView>
  );
};

export default Signin;
