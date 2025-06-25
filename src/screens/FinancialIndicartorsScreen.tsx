import React from 'react';
import { FlatList, View } from 'react-native';
import { NameIndicators } from '../constants/nameIndicators';
import { FinancialIndicartorElement } from '../components/FinancialIndicartorElement';
import { useNetworkStatus } from '../hooks/useNetworkStatus';
import { StatusOffline } from '../components/StatusOffline';

export const FinancialIndicartorsScreen = () => {

  const isOnline = useNetworkStatus();

  return (
    <View style={{ flex: 1, marginHorizontal:16}}  >
        {!isOnline ? (
          <StatusOffline />
        ) : (
          <FlatList
            data={NameIndicators}
            renderItem={({item}) => <FinancialIndicartorElement indicator={item} />}
          />
        )}

        
    </View>
  );
};
