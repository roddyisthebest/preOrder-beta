import styled from 'styled-components/native';

const Button = styled.Pressable<{type: 'nxde' | 'default'; disable: boolean}>`
  height: 50px;
  border-radius: 10px;
  background-color: ${props =>
    props.type === 'nxde' ? 'white' : props.disable ? 'gray' : '#42B883'};
  border-width: 1px;
  border-color: ${props => (props.disable ? 'gray' : '#42b883')};
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  opacity: ${props => (props.disable ? 0.3 : 1)};
`;

const ButtonText = styled.Text<{color: string}>`
  color: ${props => props.color};
  font-size: 18px;
  font-weight: 700;
`;

export {Button, ButtonText};
