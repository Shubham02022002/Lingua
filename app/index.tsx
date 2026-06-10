import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <View className="flex-1 items-center justify-center px-6">
        <Text className="h2 text-center color-lingua-purple">Lingua</Text>
        <Text className="h3 mt-2 text-center color-text-primary">
          Language Learning
        </Text>

        <TouchableOpacity
          className="mt-8 px-7 py-[14px] bg-lingua-purple rounded-[14px]"
          style={styles.shadow}
          onPress={() => router.push("/onboarding")}
          activeOpacity={0.8}
        >
          <Text className="font-poppins-semibold text-[15px] text-white">
            View Onboarding →
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#6C4EF5",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
});