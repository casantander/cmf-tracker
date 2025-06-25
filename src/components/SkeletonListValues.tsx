import { Divider } from "@react-native-material/core";
import { ScrollView, View } from "react-native";
import SkeletonPlaceholder from "react-native-skeleton-placeholder";

export const SkeletonListValues = () => {
    return (
        <ScrollView style={{ flex: 1, margin:16}} showsVerticalScrollIndicator={false}>
            {Array.from({ length: 10 }).map((_, index) => (
                <View key={index} style={{ marginBottom: 20 }}>
                    <SkeletonPlaceholder borderRadius={4}>
                        <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            marginTop: 10,
                        }}
                        >
                        <View style={{ width: 160, height: 40, borderRadius: 4 }} />
                        <View style={{ flex: 1 }} />
                        <View style={{ width: 160, height: 40, borderRadius: 4 }} />
                        </View>
                    </SkeletonPlaceholder>
                    <Divider style={{ marginTop: 16 }} />
                </View>
            ))}
        </ScrollView>
    );
}