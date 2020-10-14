import React, {useContext} from 'react';
import {View, Text, Button} from 'react-native';

import {AuthContext} from '@monorepo-hi-mobile/shared/context/AuthContext';

const Profile = () => {
  const {SignOut} = useContext(AuthContext);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Profile</Text>

      <Button title="Sair" onPress={() => SignOut()} />
    </View>
  );
};

export default Profile;
