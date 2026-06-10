import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
} from "react-native";
import { useRouter } from "expo-router";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

interface VerificationModalProps {
  visible: boolean;
  email: string;
  onClose: () => void;
}

const DIGITS = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "", "0", "⌫"];

export default function VerificationModal({
  visible,
  email,
  onClose,
}: VerificationModalProps) {
  const router = useRouter();
  const [code, setCode] = useState<string[]>([]);

  const handleDigit = (digit: string) => {
    if (digit === "⌫") {
      setCode((prev) => prev.slice(0, -1));
      return;
    }
    if (digit === "") return;

    const next = [...code, digit];
    setCode(next);

    if (next.length === 6) {
      setTimeout(() => {
        setCode([]);
        onClose();
        router.replace("/");
      }, 150);
    }
  };

  const displayCode = Array(6)
    .fill("")
    .map((_, i) => code[i] ?? "");

  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.kavContainer}
        >
          <SafeAreaView style={styles.sheet} edges={["bottom"]}>
            <View className="w-10 h-1 rounded-full bg-neutral-border self-center mb-4" />
            <View className="items-center px-6 pt-2 pb-4">
              <Text className="font-poppins-bold text-[22px] text-text-primary text-center">
                Check your email
              </Text>
              <Text className="font-poppins-regular text-[14px] text-text-secondary text-center mt-2 leading-5">
                We sent a 6-digit code to{"\n"}
                <Text className="font-poppins-semibold text-text-primary">
                  {email || "your email"}
                </Text>
              </Text>
            </View>

            <View className="flex-row justify-center gap-3 px-6 mb-6">
              {displayCode.map((d, i) => {
                const isFilled = !!d;
                const isActive = i === code.length && code.length < 6;
                return (
                  <View
                    key={i}
                    className={[
                      "w-[46px] h-14 rounded-xl border-2 items-center justify-center",
                      isFilled
                        ? "border-lingua-purple bg-[#EEF0FD]"
                        : isActive
                          ? "border-lingua-purple bg-neutral-surface"
                          : "border-neutral-border bg-neutral-surface",
                    ].join(" ")}
                  >
                    <Text className="font-poppins-bold text-[24px] text-text-primary">
                      {d}
                    </Text>
                  </View>
                );
              })}
            </View>

            <View className="flex-row flex-wrap px-6 gap-3">
              {DIGITS.map((d, i) => {
                const isBackspace = d === "⌫";
                const isEmpty = d === "";
                return (
                  <TouchableOpacity
                    key={i}
                    className={[
                      "w-[29%] h-[60px] rounded-[14px] items-center justify-center",
                      isEmpty ? "opacity-0" : "bg-neutral-surface",
                    ].join(" ")}
                    onPress={() => handleDigit(d)}
                    disabled={isEmpty}
                    activeOpacity={0.7}
                  >
                    <Text
                      className={
                        isBackspace
                          ? "font-poppins-semibold text-[24px] text-text-secondary"
                          : "font-poppins-semibold text-[22px] text-text-primary"
                      }
                    >
                      {d}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>

            <View className="items-center pt-3 pb-2">
              <Text className="font-poppins-regular text-[14px] text-text-secondary">
                Didn't receive it?{" "}
                <Text className="font-poppins-semibold text-lingua-purple">
                  Resend code
                </Text>
              </Text>
            </View>
          </SafeAreaView>
        </KeyboardAvoidingView>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.45)",
    justifyContent: "flex-end",
  },
  kavContainer: {
    width: "100%",
  },
  sheet: {
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    paddingTop: 12,
  },
});
