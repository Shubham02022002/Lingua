import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { images } from "@/constants/images";

export default function OnboardingScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <View className="flex-row items-center justify-center mt-6">
        <Image
          source={images.mascotLogo}
          className="w-12 h-12"
          resizeMode="contain"
        />
        <Text className="font-poppins-bold text-h2 text-text-primary ml-2">
         lingua
        </Text>
      </View>

      <View className="px-6 mt-8">
        <Text className="font-poppins-bold text-[34px] leading-[42px] text-text-primary">
          Your AI language
        </Text>
        <View className="flex-row items-baseline">
          <Text className="font-poppins-bold text-[34px] leading-[42px] text-lingua-purple">
            teacher
          </Text>
          <Text className="font-poppins-bold text-[34px] leading-[42px] text-text-primary">
            .
          </Text>
        </View>
      </View>

      <View className="px-6 mt-3">
        <Text className="font-poppins-regular text-body-lg text-text-secondary">
          Real conversations, personalized{"\n"}lessons, anytime, anywhere.
        </Text>
      </View>

      <View className="relative items-center mt-4 h-[320px]">
        <View className="absolute top-[80px] left-[20px] z-10 rounded-[20px] px-4 py-2.5 bg-[#EFF1FB]">
          <Text className="font-poppins-semibold text-[15px] text-text-primary">
            Hello!
          </Text>
        </View>

        <View className="absolute top-[20px] right-[20px] z-10 rounded-[20px] px-4 py-2.5 bg-[#EEF0FD]">
          <Text className="font-poppins-semibold text-[15px] text-lingua-purple">
            ¡Hola!
          </Text>
        </View>

        <View className="absolute top-[160px] right-[20px] z-10 rounded-[20px] px-4 py-2.5 bg-[#FFF0F0]">
          <Text className="font-poppins-semibold text-[15px] text-[#E03030]">
            你好!
          </Text>
        </View>

        <Image
          source={images.mascotWelcome}
          className="w-[260px] h-[260px] mt-[30px]"
          resizeMode="contain"
        />
      </View>

      <View className="flex-1" />

      <View className="px-6 pb-8">
        <TouchableOpacity
          className="flex-row items-center justify-center rounded-2xl py-[18px] bg-lingua-purple gap-2"
          style={styles.ctaShadow}
          onPress={() => router.push("/")}
          activeOpacity={0.85}
        >
          <Text className="font-poppins-semibold text-[17px] text-white tracking-wide">
            Get Started
          </Text>
          <Text className="font-poppins-bold text-[22px] text-white leading-[26px]">
            ›
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  ctaShadow: {
    shadowColor: "#6C4EF5",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.35,
    shadowRadius: 12,
    elevation: 8,
  },
});
