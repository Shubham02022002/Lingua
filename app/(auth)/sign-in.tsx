import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { useState } from "react";
import { images } from "@/constants/images";
import VerificationModal from "@/components/VerificationModal";

export default function SignInScreen() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [showVerification, setShowVerification] = useState(false);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <TouchableOpacity
          onPress={() => router.back()}
          className="ml-4 mt-1 w-10 h-10 items-center justify-center"
          activeOpacity={0.7}
        >
          <Text className="font-poppins-regular text-[32px] text-text-primary leading-[36px]">
            ‹
          </Text>
        </TouchableOpacity>

        <View className="px-6 mt-2">
          <Text className="font-poppins-bold text-[28px] text-text-primary leading-[36px]">
            Welcome back
          </Text>
          <Text className="font-poppins-regular text-[15px] text-text-secondary mt-1">
            Continue your language journey ✨
          </Text>
        </View>

        <View className="items-center mt-4">
          <Image
            source={images.mascotAuth}
            className="w-40 h-40"
            resizeMode="contain"
          />
        </View>

        {/* Form */}
        <View className="px-6 mt-2 gap-3">
          <View className="bg-white rounded-2xl border border-neutral-border px-4 pt-2.5 pb-3">
            <Text className="font-poppins-regular text-[12px] text-text-secondary mb-0.5">
              Email
            </Text>
            <TextInput
              value={email}
              onChangeText={setEmail}
              placeholder="alex@gmail.com"
              placeholderTextColor="#9CA3AF"
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              style={styles.input}
            />
          </View>
          
          <TouchableOpacity
            className="bg-lingua-purple rounded-2xl py-[18px] items-center mt-1"
            style={styles.primaryShadow}
            onPress={() => setShowVerification(true)}
            activeOpacity={0.85}
          >
            <Text className="font-poppins-semibold text-[17px] text-white tracking-wide">
              Log In
            </Text>
          </TouchableOpacity>
        </View>

        <View className="flex-row items-center px-6 mt-6">
          <View className="flex-1 h-px bg-neutral-border" />
          <Text className="font-poppins-regular text-[13px] text-text-secondary mx-3">
            or continue with
          </Text>
          <View className="flex-1 h-px bg-neutral-border" />
        </View>

        {/* Social Buttons */}
        <View className="px-6 mt-4 gap-3">
          <TouchableOpacity
            className="flex-row items-center border border-neutral-border rounded-2xl py-[14px] px-5 bg-white"
            activeOpacity={0.8}
          >
            <Text className="font-poppins-bold text-[18px] text-[#DB4437] w-8">
              G
            </Text>
            <Text className="font-poppins-semibold text-[15px] text-text-primary">
              Continue with Google
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            className="flex-row items-center border border-neutral-border rounded-2xl py-[14px] px-5 bg-white"
            activeOpacity={0.8}
          >
            <Text className="font-poppins-bold text-[18px] text-[#1877F2] w-8">
              f
            </Text>
            <Text className="font-poppins-semibold text-[15px] text-text-primary">
              Continue with Facebook
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            className="flex-row items-center border border-neutral-border rounded-2xl py-[14px] px-5 bg-white"
            activeOpacity={0.8}
          >
            <Text className="text-[18px] w-8">🍎</Text>
            <Text className="font-poppins-semibold text-[15px] text-text-primary">
              Continue with Apple
            </Text>
          </TouchableOpacity>
        </View>

        <View className="flex-row justify-center mt-8 pb-8">
          <Text className="font-poppins-regular text-[14px] text-text-secondary">
            Don't have an account?{" "}
          </Text>
          <TouchableOpacity
            onPress={() => router.replace("/(auth)/sign-up")}
            activeOpacity={0.7}
          >
            <Text className="font-poppins-semibold text-[14px] text-lingua-purple">
              Sign up
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <VerificationModal
        visible={showVerification}
        email={email}
        onClose={() => setShowVerification(false)}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  scrollContent: {
    flexGrow: 1,
  },
  input: {
    fontFamily: "Poppins-Regular",
    fontSize: 16,
    color: "#0D132B",
    paddingVertical: 0,
  },
  primaryShadow: {
    shadowColor: "#6C4EF5",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.35,
    shadowRadius: 12,
    elevation: 8,
  },
});
