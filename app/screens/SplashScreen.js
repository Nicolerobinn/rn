import React, {memo} from 'react';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Title from '../components/Title';

const SplashScreen = ({navigation}) => (
  <Background>
    <Logo />
  </Background>
);

export default memo(SplashScreen);
