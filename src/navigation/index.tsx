import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {useSelector} from 'react-redux';

import type {RootState} from '../store';

const AppNavigator = () => {
  const completeState = useSelector((state: RootState) => state);

  return (
    <SafeAreaView>
      <Text>{JSON.stringify(completeState)}</Text>
    </SafeAreaView>
  );
};

export default AppNavigator;
