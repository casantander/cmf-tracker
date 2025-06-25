import React, { useEffect, useState } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { MainParamList } from '../types/navigationTypes';
import { FlatList, View } from 'react-native';
import { SkeletonListValues } from '../components/SkeletonListValues';
import { IndicadorValue } from '../types/cmf.types';
import { getCurrentYearIndicator, getLast30DaysIndicator } from '../api/cmf-service';
import { ValueIndicator } from '../components/ValueIndicator';

type Props = NativeStackScreenProps<MainParamList, 'ListaValores'>;

export const ListValuesScreen: React.FC<Props> = ({ route }) => {
    const { indicator } = route.params;
    const [loading, setLoading] = useState(true);
    const [values, setValues] = useState<IndicadorValue[]>([]);

    
    useEffect(() => {
        const fetchData = async () => {
            try {
                if (indicator.key === 'utm' || indicator.key === 'ipc') {
                    const dataCurrentYear = await getCurrentYearIndicator(indicator.key.toLowerCase());
                    setValues(dataCurrentYear);
                } else {
                    const dataLastDays = await getLast30DaysIndicator(indicator.key.toLowerCase());
                    setValues(dataLastDays);
                }
            } catch (error) {
                console.error("Error al obtener los valores:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [indicator.key]);

    return (
        <>
            {loading ? (
                <SkeletonListValues />
            ): (
                <View style={{ flex: 1, margin:16}}  >
                    <FlatList
                        data={values}
                        renderItem={({item}) => <ValueIndicator indicatorValue={item} nameIndicator={indicator.key.toLowerCase()}/>}
                    />
                </View>
            )}
        </>
        
    );
};