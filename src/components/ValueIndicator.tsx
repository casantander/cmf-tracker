import { HStack, Text, Divider  } from "@react-native-material/core";
import { IndicadorValue } from "../types/cmf.types";
import { StyleSheet } from "react-native";

type Props = {
  indicatorValue: IndicadorValue;
  nameIndicator: string;
};


export const ValueIndicator: React.FC<Props> = ({ indicatorValue, nameIndicator }) => {
    const formattedValue = nameIndicator === 'ipc' ? `${indicatorValue.Valor}%` : `$${indicatorValue.Valor}`;
    return (
        <>
            <Divider/>
            <HStack m={4} spacing={6} style={{marginVertical:16}}>
                <Text variant="h6" style={styles.textStyle}>{indicatorValue.Fecha}</Text>
                <Text variant="h6" style={styles.textStyle}>{formattedValue}</Text>
            </HStack>
        </>
    );
}

const styles = StyleSheet.create({
  textStyle:{
    flex:1, 
    textAlign:'left', 
    justifyContent:'center'
}
})
