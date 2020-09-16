import React, {useEffect} from 'react';
import {View, Text} from 'react-native';

import {useSelector, useDispatch} from 'react-redux';

import * as CoursesActions from '@monorepo-hi-mobile/shared/store/modules/course/actions';
//import {service} from '@monorepo-hi-mobile/shared/services/constant';

const Home = () => {
  const dispatch = useDispatch();

  const {service} = useSelector((state) => state.course);

  useEffect(() => {
    dispatch(CoursesActions.GetAllCoursesRequest());
  }, []);

  return (
    <View>
      <Text>oioioioioi</Text>
    </View>
  );
};

export default Home;
