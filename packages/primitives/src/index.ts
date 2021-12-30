import type { StyledFunction } from "@react-native-tailwindcss/styled";
import {
  View as RNView,
  ScrollView as RNScrollView,
  SafeAreaView as RNSafeAreaView,
  Pressable as RNPressable,
  TouchableOpacity as RNTouchableOpacity,
} from "react-native";

export const createPrimitives = (styled: StyledFunction) => {
  const View = styled(RNView)``;
  const ScrollView = styled(RNScrollView)``;
  const SafeAreaView = styled(RNSafeAreaView)``;
  const Pressable = styled(RNPressable)``;
  const TouchableOpacity = styled(RNTouchableOpacity)``;

  return {
    View,
    ScrollView,
    SafeAreaView,
    Pressable,
    TouchableOpacity,
  } as const;
};
