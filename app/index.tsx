import React, { useState } from "react";
import {
  ScrollView,
  Text,
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "@/constants/images";

export default function Index() {
  const [selectedLanguage, setSelectedLanguage] = useState<string>("spanish");

  const colors = [
    { name: "Lingua Purple", token: "bg-lingua-purple", hex: "#6C4EF5", type: "primary" },
    { name: "Lingua Deep Purple", token: "bg-lingua-deep-purple", hex: "#5B3BF6", type: "primary" },
    { name: "Lingua Blue", token: "bg-lingua-blue", hex: "#4D8BFF", type: "primary" },
    { name: "Lingua Green", token: "bg-lingua-green", hex: "#21C16B", type: "primary" },

    { name: "Success", token: "bg-success", hex: "#21C16B", type: "semantic" },
    { name: "Warning", token: "bg-warning", hex: "#FFC800", type: "semantic" },
    { name: "Streak", token: "bg-streak", hex: "#FF8A00", type: "semantic" },
    { name: "Error", token: "bg-error", hex: "#FF4D4F", type: "semantic" },
    { name: "Info", token: "bg-info", hex: "#4D8BFF", type: "semantic" },

    { name: "Text Primary", token: "bg-text-primary", hex: "#0D132B", type: "neutral" },
    { name: "Text Secondary", token: "bg-text-secondary", hex: "#6B7280", type: "neutral" },
    { name: "Neutral Border", token: "bg-neutral-border", hex: "#E5E7EB", type: "neutral" },
    { name: "Neutral Surface", token: "bg-neutral-surface", hex: "#F6F7FB", type: "neutral" },
    { name: "Neutral Background", token: "bg-neutral-bg", hex: "#FFFFFF", type: "neutral" },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        {/* Brand Header */}
        <View className="items-center mb-8 bg-neutral-surface p-6 rounded-3xl border border-neutral-border">
          <View className="flex-row items-center justify-center space-x-3 gap-3">
            <Image source={images.mascotLogo} className="w-16 h-16 rounded-full" resizeMode="contain" />
            <Text className="text-h1 text-text-primary">lingua</Text>
          </View>
          <Text className="text-body-sm text-text-secondary mt-2 text-center">
            Poppins-fueled playful AI language learning design system
          </Text>
        </View>

        {/* Section: Typography */}
        <View className="mb-8">
          <Text className="text-h2 text-text-primary mb-4">Typography</Text>
          <View className="bg-neutral-surface p-5 rounded-3xl border border-neutral-border gap-4">
            <View>
              <Text className="text-caption text-text-secondary mb-1">H1 / Bold / 32px / LH 1.2</Text>
              <Text className="text-h1 text-text-primary">Page Title</Text>
            </View>
            <View className="h-[1px] bg-neutral-border" />
            
            <View>
              <Text className="text-caption text-text-secondary mb-1">H2 / SemiBold / 24px / LH 1.3</Text>
              <Text className="text-h2 text-text-primary">Section Header</Text>
            </View>
            <View className="h-[1px] bg-neutral-border" />

            <View>
              <Text className="text-caption text-text-secondary mb-1">H3 / SemiBold / 20px / LH 1.3</Text>
              <Text className="text-h3 text-text-primary">Card / Module Title</Text>
            </View>
            <View className="h-[1px] bg-neutral-border" />

            <View>
              <Text className="text-caption text-text-secondary mb-1">H4 / Medium / 16px / LH 1.4</Text>
              <Text className="text-h4 text-text-primary">Subheading text</Text>
            </View>
            <View className="h-[1px] bg-neutral-border" />

            <View>
              <Text className="text-caption text-text-secondary mb-1">Body Large / Regular / 16px / LH 1.6</Text>
              <Text className="text-body-lg text-text-primary">
                Important content that needs extra emphasis or standard large reading.
              </Text>
            </View>
            <View className="h-[1px] bg-neutral-border" />

            <View>
              <Text className="text-caption text-text-secondary mb-1">Body Medium / Regular / 14px / LH 1.6</Text>
              <Text className="text-body-md text-text-secondary">
                Standard body text for descriptions, explanations, and instructions.
              </Text>
            </View>
            <View className="h-[1px] bg-neutral-border" />

            <View>
              <Text className="text-caption text-text-secondary mb-1">Body Small / Regular / 13px / LH 1.6</Text>
              <Text className="text-body-sm text-text-secondary">
                Supporting text, secondary options, and lesson metadata items.
              </Text>
            </View>
            <View className="h-[1px] bg-neutral-border" />

            <View>
              <Text className="text-caption text-text-secondary mb-1">Caption / Regular / 11px / LH 1.4</Text>
              <Text className="text-caption text-text-secondary">
                Labels, timestamps, counter tags, and micro metadata.
              </Text>
            </View>
          </View>
        </View>

        {/* Section: Colors */}
        <View className="mb-8">
          <Text className="text-h2 text-text-primary mb-4">Color Palette</Text>

          {/* Primary */}
          <Text className="text-h4 text-text-primary mb-2">Primary</Text>
          <View className="flex-row flex-wrap gap-3 mb-4">
            {colors
              .filter((c) => c.type === "primary")
              .map((c) => (
                <View key={c.name} className="w-[47%] bg-neutral-surface p-3 rounded-2xl border border-neutral-border items-center">
                  <View className={`w-12 h-12 rounded-xl mb-2 ${c.token}`} />
                  <Text className="text-body-sm text-text-primary font-poppins-semibold text-center">{c.name}</Text>
                  <Text className="text-caption text-text-secondary">{c.hex}</Text>
                </View>
              ))}
          </View>

          {/* Semantic */}
          <Text className="text-h4 text-text-primary mb-2">Semantic</Text>
          <View className="flex-row flex-wrap gap-3 mb-4">
            {colors
              .filter((c) => c.type === "semantic")
              .map((c) => (
                <View key={c.name} className="w-[30%] bg-neutral-surface p-3 rounded-2xl border border-neutral-border items-center">
                  <View className={`w-10 h-10 rounded-xl mb-2 ${c.token}`} />
                  <Text className="text-caption text-text-primary font-poppins-semibold text-center" numberOfLines={1}>{c.name}</Text>
                  <Text className="text-caption text-text-secondary">{c.hex}</Text>
                </View>
              ))}
          </View>

          {/* Neutrals */}
          <Text className="text-h4 text-text-primary mb-2">Neutrals</Text>
          <View className="bg-neutral-surface p-4 rounded-3xl border border-neutral-border gap-3">
            {colors
              .filter((c) => c.type === "neutral")
              .map((c) => (
                <View key={c.name} className="flex-row items-center justify-between">
                  <View className="flex-row items-center gap-3">
                    <View className={`w-8 h-8 rounded-lg border border-neutral-border ${c.token}`} />
                    <Text className="text-body-sm text-text-primary font-poppins-medium">{c.name}</Text>
                  </View>
                  <Text className="text-caption text-text-secondary">{c.hex}</Text>
                </View>
              ))}
          </View>
        </View>

        {/* Section: Component Demos */}
        <View className="mb-8">
          <Text className="text-h2 text-text-primary mb-4">Interactive Components</Text>

          {/* 3D Button Demo */}
          <View className="mb-6">
            <Text className="text-h4 text-text-primary mb-2">Playful Button</Text>
            <TouchableOpacity
              activeOpacity={0.8}
              className="bg-lingua-purple border-b-4 border-lingua-deep-purple py-4 px-6 rounded-2xl items-center justify-center flex-row"
            >
              <Text className="text-neutral-bg text-body-lg font-poppins-bold text-center">
                Get Started
              </Text>
            </TouchableOpacity>
          </View>

          {/* Selection Card Demo */}
          <View className="mb-6">
            <Text className="text-h4 text-text-primary mb-2">Selection Cards (Duolingo Style)</Text>
            
            <View className="gap-3">
              {/* Spanish Card (Selected style) */}
              <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => setSelectedLanguage("spanish")}
                className={`p-4 rounded-2xl border-2 flex-row items-center justify-between ${
                  selectedLanguage === "spanish"
                    ? "border-lingua-purple bg-neutral-surface"
                    : "border-neutral-border bg-neutral-bg"
                }`}
              >
                <View className="flex-row items-center gap-3">
                  <View className="w-10 h-10 rounded-full bg-red-500 items-center justify-center">
                    <Text className="text-white font-bold">ES</Text>
                  </View>
                  <View>
                    <Text className="text-body-md text-text-primary font-poppins-semibold">Spanish</Text>
                    <Text className="text-caption text-text-secondary">28.4M learners</Text>
                  </View>
                </View>
                {selectedLanguage === "spanish" && (
                  <View className="w-6 h-6 rounded-full bg-lingua-purple items-center justify-center">
                    <Text className="text-white text-[10px] font-bold">✓</Text>
                  </View>
                )}
              </TouchableOpacity>

              {/* French Card (Default style) */}
              <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => setSelectedLanguage("french")}
                className={`p-4 rounded-2xl border-2 flex-row items-center justify-between ${
                  selectedLanguage === "french"
                    ? "border-lingua-purple bg-neutral-surface"
                    : "border-neutral-border bg-neutral-bg"
                }`}
              >
                <View className="flex-row items-center gap-3">
                  <View className="w-10 h-10 rounded-full bg-blue-500 items-center justify-center">
                    <Text className="text-white font-bold">FR</Text>
                  </View>
                  <View>
                    <Text className="text-body-md text-text-primary font-poppins-semibold">French</Text>
                    <Text className="text-caption text-text-secondary">19.4M learners</Text>
                  </View>
                </View>
                {selectedLanguage === "french" && (
                  <View className="w-6 h-6 rounded-full bg-lingua-purple items-center justify-center">
                    <Text className="text-white text-[10px] font-bold">✓</Text>
                  </View>
                )}
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  scrollContainer: {
    padding: 20,
    backgroundColor: "#FFFFFF",
  },
});
