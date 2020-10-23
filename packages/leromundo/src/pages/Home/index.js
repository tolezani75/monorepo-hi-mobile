import React, { useEffect, useContext } from 'react';
import { View, Image } from 'react-native';

import Banners from '@monorepo-hi-mobile/shared/components/Banner';
import { BannersContext } from '@monorepo-hi-mobile/shared/context/BannersContext';

import { Styles } from './styles';

import logo from '../../assets/images/logo.png';

import colors from '../../styles/colors';

import { service } from '../../services/constant';

const Home = () => {
  const { GetBanners, banners } = useContext(BannersContext);

  useEffect(() => {
    GetBanners(service);
  }, []);

  return (
    <View style={Styles.container}>
      <View style={Styles.banner}>
        <Banners
          paginationDotColor={`${colors.paginationDotColor}`}
          paginationInactiveDotColor={`${colors.paginationInactiveDotColor}`}
          dataBanners={banners}
        />
        <Image style={Styles.logoOnBanner} source={logo} />
      </View>
    </View>
  );
};

export default Home;
