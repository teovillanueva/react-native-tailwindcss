import styled from '@react-native-tailwindcss/styled';

import {
  View as RNView,
  ScrollView as RNScrollView,
  SafeAreaView as RNSafeAreaView,
  Pressable as RNPressable,
  TouchableOpacity as RNTouchableOpacity,
} from 'react-native';

export const View = styled(RNView);
export const ScrollView = styled(RNScrollView);
export const SafeAreaView = styled(RNSafeAreaView);
export const Pressable = styled(RNPressable);
export const TouchableOpacity = styled(RNTouchableOpacity);

export {
  View as TailwindView,
  ScrollView as TailwindScrollView,
  SafeAreaView as TailwindSafeAreaView,
  Pressable as TailwindPressable,
  TouchableOpacity as TailwindTouchableOpacity,
};
