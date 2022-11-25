import React from 'react';
import styled from 'styled-components/native';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {LoggedInParamList} from '../../navigation/Root';

const Container = styled.TouchableOpacity`
  padding: 0 15px;
  background-color: white;
  height: 70px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const UnivInfoWrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;

const UnivLogo = styled.ImageBackground<{height: number}>`
  height: 35px;
  width: 35px;
  border-radius: 10px;
  margin-right: 10px;
`;

const UnivDomain = styled.Text`
  font-size: 20px;
  font-weight: 700;
  color: black;
`;

const University = ({
  data,
}: {
  data: {url: string; name: string; id: number; domain: string};
}) => {
  const navigation = useNavigation<NavigationProp<LoggedInParamList>>();

  return (
    <Container
      onPress={() => {
        navigation.navigate('Auth', {screen: 'Signup', params: data});
      }}>
      <UnivInfoWrapper>
        <UnivLogo
          resizeMode="cover"
          source={{uri: data.url}}
          imageStyle={{
            borderRadius: 10,
            borderColor: '#EBEBEB',
            borderWidth: 1,
          }}
        />
        <UnivDomain>
          {data.name} ({data.domain})
        </UnivDomain>
      </UnivInfoWrapper>
    </Container>
  );
};

export default University;
