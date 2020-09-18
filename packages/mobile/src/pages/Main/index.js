import React, {useEffect} from 'react';
import {View, Text} from 'react-native';

import {useSelector, useDispatch} from 'react-redux';

import * as CoursesActions from '@monorepo-hi-mobile/shared/store/modules/course/actions';
//import {service} from '@monorepo-hi-mobile/shared/services/constant';

import Banner from '@monorepo-hi-mobile/shared/components/Banner';

const Main = () => {
  const dispatch = useDispatch();

  const {service} = useSelector((state) => state.course);

  useEffect(() => {
    dispatch(CoursesActions.GetAllCoursesRequest());
  }, []);

  return (
    <View>
      <Text>oioioioioi</Text>
      <Banner />
    </View>
  );
};

export default Main;
