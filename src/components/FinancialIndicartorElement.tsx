import { HStack, Text, Divider  } from "@react-native-material/core";
import Icon from "@react-native-vector-icons/ionicons";
import { Pressable, View } from "react-native";
import { IndicatorParam } from "../types/navigationTypes";
import { useNavigation } from "@react-navigation/native";
import type { StackNavigationProp } from '@react-navigation/stack';

type Props = {
  indicator: IndicatorParam;
};

export const FinancialIndicartorElement: React.FC<Props> = ({ indicator }) => {
    const navigation = useNavigation<StackNavigationProp<any>>();

    return (
        <>
            <Divider/>
            <HStack m={4} spacing={6} style={{marginVertical:16}}>
                <Pressable style={{flex:1}} onPress={() => navigation.navigate('ListaValores', {indicator})}>
                    <Text variant="h5" style={{flex:1, textAlign:'left', justifyContent:'center'}}>{indicator.label}</Text>
                </Pressable>

                <Pressable style={{flex:1}} onPress={() => navigation.navigate('Detalle', {indicator})}>
                    <View style={{ justifyContent:'flex-end'}}>
                        <Icon name="chevron-forward-circle-sharp" size={30} color="#005AEE" style={{alignSelf:'flex-end'}}/>
                    </View>
                </Pressable>
            </HStack>
        </>
    );
}