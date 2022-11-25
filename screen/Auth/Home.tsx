import React from 'react';
import {Dimensions} from 'react-native';
import styled from 'styled-components/native';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {LoggedInParamList} from '../../navigation/Root';
import {Button, ButtonText} from '../../components/utils';
const Container = styled.SafeAreaView`
  flex: 1;
  margin: 20px;
`;
const ImageBackground = styled.ImageBackground<{height: number}>`
  /* width: 100%; */
  height: ${props => props.height}px;
  justify-content: flex-end;
  padding: 20px;
`;

const TitleText = styled.Text`
  color: white;
  font-size: 25px;
  font-weight: 800;
`;

const SubTitleText = styled.Text`
  color: #ffffffb0;
  font-size: 15px;
  font-weight: 300;
`;

const Home = () => {
  const navigation = useNavigation<NavigationProp<LoggedInParamList>>();

  return (
    <Container>
      <ImageBackground
        resizeMode="cover"
        height={Dimensions.get('window').height * 0.7}
        imageStyle={{borderRadius: 10}}
        source={require('../../assets/img/nitish-goswami-zZuk1GV3V28-unsplash.jpeg')}>
        <TitleText>완벽한 하루를 위한</TitleText>
        <TitleText style={{marginBottom: 22}}>단 한번의 클릭</TitleText>
        <SubTitleText>
          이제 수업시간에 허덕이면서 줄서서 기다리며 식당을 이용하지 말고
          예약하고 음식을 받아가세요.
        </SubTitleText>
      </ImageBackground>
      <Button
        type="default"
        disable={false}
        onPress={() => {
          navigation.navigate('Auth', {screen: 'Signup', params: null});
        }}>
        <ButtonText color={'white'}>가입하기</ButtonText>
      </Button>
      <Button
        type="nxde"
        disable={false}
        onPress={() => {
          navigation.navigate('Auth', {screen: 'Signin', params: null});
        }}>
        <ButtonText color={'#42B883'}>로그인</ButtonText>
      </Button>
    </Container>
  );
};

export default Home;
