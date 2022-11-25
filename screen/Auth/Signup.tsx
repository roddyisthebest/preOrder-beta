import React, {useEffect, useState, useRef} from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Button, ButtonText} from '../../components/utils/index';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {LoggedInParamList} from '../../navigation/Root';
import {useDispatch} from 'react-redux';
import {setAuth} from '../../store/slice';
import {useToast} from 'react-native-toast-notifications';

const InputsWrapper = styled.View`
  margin: 20px 0 10px 0;
`;

const InputWrapper = styled.View<{borderColor: string}>`
  border-bottom-color: ${props => props.borderColor};
  /* #dbdbdb */
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
  position: relative;
`;

const InputInstance = styled.TextInput`
  font-size: 15px;
  flex: 1;
  padding: 10px 0;
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
  z-index: 100;
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

const InputEmailIdInstance = styled.TextInput`
  font-size: 15px;
  flex: 1;
  border-bottom-width: 1px;
  border-bottom-color: #dbdbdb;
  padding: 10px 0;
  color: black;
`;

const InputEmailDomainInstance = styled.Pressable`
  font-size: 15px;
  width: 180px;
  border-bottom-width: 1px;
  border-bottom-color: #dbdbdb;
  justify-content: center;
  color: black;
`;

const InputEmailDomainInstanceText = styled.Text`
  color: #a8a8a8;
  font-size: 15px;
`;

const InputEmailLogoText = styled.Text`
  font-size: 22px;
  margin: 0 7px;
  color: black;
  font-weight: 700;
  padding: 10px 0;
`;

const InputEmailDomainInstanceStatusWrapper = styled.View`
  width: 180px;
  border-bottom-width: 1px;
  border-bottom-color: #dbdbdb;
  justify-content: center;
  position: relative;
`;

const DomainStatusText = styled.Text`
  color: black;
  font-size: 15px;
`;
const DomainDeleteButton = styled.Pressable`
  position: absolute;
  right: 1px;
  width: 15px;
  height: 15px;
  background-color: #8b8b8b;
  border-radius: 16px;
  align-items: center;
  justify-content: center;
`;

const Signin = ({
  route: {params},
}: {
  route: {
    params: null | {
      url: string;
      name: string;
      id: number;
      domain: string;
    };
  };
}) => {
  const navigation = useNavigation<NavigationProp<LoggedInParamList>>();
  const dispatch = useDispatch();
  const toast = useToast();

  const [security, setSecurity] = useState<boolean[]>([false, false]);
  const [domain, setDomain] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordCheck, setPasswordCheck] = useState<string>('');
  const [visible, setVisible] = useState<boolean[]>([false, false]);
  const [disabled, setDisabled] = useState<boolean>(true);
  const targetPw = useRef<any>();
  const targetPwChcek = useRef<any>();
  useEffect(() => {
    setVisible(() => [password.length !== 0, passwordCheck.length !== 0]);
  }, [password, passwordCheck]);

  useEffect(() => {
    setDisabled(email.length === 0 || password.length === 0);
  }, [email, password]);

  useEffect(() => {
    if (params) {
      setDomain(params.domain);
    }
  }, [params]);

  return (
    <KeyboardAwareScrollView
      style={{marginHorizontal: 20, flex: 1}}
      extraScrollHeight={30}>
      <InputsWrapper>
        <InputWrapper
          style={{marginBottom: 20, zIndex: 1}}
          borderColor={'white'}>
          <InputLabel>이메일</InputLabel>
          <InputInstanceWrapper>
            <InputEmailIdInstance
              isItDomain={false}
              placeholder="아이디 부분입니다."
              placeholderTextColor="#a8a8a8"
            />
            <InputEmailLogoText>@</InputEmailLogoText>
            {domain.length === 0 ? (
              <InputEmailDomainInstance
                onPress={() => {
                  navigation.navigate('Auth', {
                    screen: 'UnivList',
                    params: null,
                  });
                }}>
                <InputEmailDomainInstanceText>
                  학교를 입력해주세요.
                </InputEmailDomainInstanceText>
              </InputEmailDomainInstance>
            ) : (
              <InputEmailDomainInstanceStatusWrapper>
                <DomainStatusText>{domain}</DomainStatusText>
                <DomainDeleteButton
                  onPress={() => {
                    setDomain('');
                  }}>
                  <Icon name={'close-outline'} color={'white'} size={13} />
                </DomainDeleteButton>
              </InputEmailDomainInstanceStatusWrapper>
            )}
          </InputInstanceWrapper>
        </InputWrapper>
        <InputWrapper style={{marginBottom: 20}} borderColor={'#dbdbdb'}>
          <InputLabel>비밀번호</InputLabel>
          <InputInstanceWrapper style={{alignItems: 'center'}}>
            <InputInstance
              ref={targetPw}
              secureTextEntry={!security[0]}
              onChangeText={(text: string) => {
                setPassword(text);
              }}
              onSubmitEditing={() => {
                targetPwChcek.current.focus();
              }}
              value={password}
              returnKeyType="next"
              returnKeyLabel="next"
              textContentType="oneTimeCode"
            />
            {visible[0] ? (
              <ShowContentsButton
                onPress={() => {
                  setSecurity(prev => [!prev[0], prev[1]]);
                }}>
                <Icon
                  name={security[0] ? 'eye-off-outline' : 'eye-outline'}
                  color={'#42B883'}
                  size={18}
                />
              </ShowContentsButton>
            ) : null}
          </InputInstanceWrapper>
        </InputWrapper>
        <InputWrapper borderColor={'#dbdbdb'}>
          <InputLabel>비밀번호 확인</InputLabel>
          <InputInstanceWrapper style={{alignItems: 'center'}}>
            <InputInstance
              ref={targetPwChcek}
              secureTextEntry={!security[1]}
              onChangeText={(text: string) => {
                setPasswordCheck(text);
              }}
              value={passwordCheck}
              onSubmitEditing={() => {
                dispatch(setAuth(true));
              }}
              returnKeyType="go"
              returnKeyLabel="login"
              textContentType="oneTimeCode"
            />
            {visible[1] ? (
              <ShowContentsButton
                onPress={() => {
                  setSecurity(prev => [prev[0], !prev[1]]);
                }}>
                <Icon
                  name={security[1] ? 'eye-off-outline' : 'eye-outline'}
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
        disabled={false}
        style={{zIndex: 5}}
        onPress={() => {
          // dispatch(setAuth(true));
          toast.show('이메일 인증이 완료되지 않는 계정입니다.');
        }}>
        <ButtonText color={'white'}>로그인</ButtonText>
      </Button>
      <NavigateWrapper>
        <NavigateLabel>계정이 있으신가요?</NavigateLabel>
        <NavigateButton
          onPress={() => {
            navigation.navigate('Auth', {screen: 'Signin'});
          }}>
          <NaviagateButtonText>로그인하기</NaviagateButtonText>
        </NavigateButton>
      </NavigateWrapper>
    </KeyboardAwareScrollView>
  );
};

export default Signin;
