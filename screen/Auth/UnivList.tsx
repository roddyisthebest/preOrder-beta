import {Dimensions, Pressable, Platform, View} from 'react-native';
import React, {useEffect, useState, useRef} from 'react';
import styled from 'styled-components/native';
import {useHeaderHeight} from '@react-navigation/elements';
import Icon from 'react-native-vector-icons/Ionicons';
import University from '../../components/Auth/University';

const SearchTextInput = styled.TextInput`
  font-size: 13px;
  flex: 1;
  margin: 0 8px;
`;

const ButtonText = styled.Text`
  color: black;
  font-size: 15px;
  font-weight: 400;
`;

const SearchResetButton = styled.Pressable`
  width: 16px;
  height: 16px;
  background-color: #8b8b8b;
  border-radius: 16px;
  align-items: center;
  justify-content: center;
`;

const SearchContainer = styled.View<{
  height: number;
  os: 'android' | 'ios';
  width: number;
}>`
  height: ${props => props.height * (props.os === 'android' ? 0.67 : 0.35)}px;
  width: ${props => props.width * 0.8}px;
  border-radius: 7px;
  background-color: #e5e5e5;
  padding: 0 10px;
  align-items: center;
  flex-direction: row;
`;

const Container = styled.FlatList``;
const UnivList = ({
  navigation: {setOptions, goBack},
}: {
  navigation: {setOptions: Function; goBack: Function};
}) => {
  const headerHeight = useHeaderHeight();
  const [keyword, setKeyword] = useState<string>('');
  const [visible, setVisible] = useState<boolean>(false);

  const target = useRef<any>();
  const [data, setData] = useState<any[]>([
    {
      url: 'https://t1.daumcdn.net/cafeattach/aVeZ/b7eef2631a415ab99ad174ea9a18354f14865d8c',
      name: '서울대학교',
      id: 0,
      domain: 'snu.co.kr',
    },
    {
      url: 'https://t1.daumcdn.net/cafeattach/aVeZ/a488dcf318c029048020e42024810e4164498fd3',
      name: '연세대학교',
      domain: 'yonsei.ac.kr',
      id: 1,
    },
  ]);

  const renderItem = ({item}: {item: any}) => <University data={item} />;
  useEffect(() => {
    setVisible(keyword.length !== 0);
    console.log(keyword);
  }, [keyword, visible]);
  useEffect(() => {
    setOptions({
      headerLeft: () => (
        <SearchContainer
          height={headerHeight}
          os={Platform.OS}
          width={Dimensions.get('window').width}>
          <Icon name={'search-outline'} color={'#545454'} size={15} />
          <SearchTextInput
            placeholder="학교를 검색해보세요."
            returnKeyType="done"
            returnKeyLabel="done"
            onChangeText={(text: string) => {
              setKeyword(text);
            }}
            value={keyword}
            autoFocus
          />
          {visible ? (
            <SearchResetButton
              onPress={() => {
                setKeyword('');
              }}>
              <Icon name={'close-outline'} color={'white'} size={13} />
            </SearchResetButton>
          ) : null}
        </SearchContainer>
      ),
      headerRight: () => (
        <Pressable
          onPress={() => {
            goBack();
          }}>
          <ButtonText>취소</ButtonText>
        </Pressable>
      ),
      headerTitle: '',
    });
  }, [goBack, headerHeight, keyword, setOptions, visible]);

  return (
    <Container
      data={data}
      ItemSeparatorComponent={() => (
        <View
          style={{
            height: 1,
            backgroundColor: '#dbdbdb',
            width: Dimensions.get('window').width,
          }}
        />
      )}
      renderItem={renderItem}
      keyExtractor={(item: any) => item.id.toString()}
    />
  );
};

export default UnivList;
