import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {StyleSheet, Text, View} from 'react-native';

import * as CoursesActions from '@monorepo-hi-mobile/shared/store/modules/course/actions';

const Welcome = () => {
  const dispatch = useDispatch();

  const {service} = useSelector((state) => state.course);

  useEffect(() => {
    dispatch(CoursesActions.GetAllCoursesRequest(service.LEROMUNDO));
  }, []);

  return (
    <View>
      <Text>Welceom</Text>
    </View>
  );
};

export default Welcome;
