import React from "react";

import {
  TextInput,
  SafeAreaView,
  View,
  Pressable,
  Text,
  ViewProps,
} from "react-native";

import styled from "@react-native-tailwindcss/styled";

const Input = styled(
  TextInput,
  "p-4 text-indigo-900 bg-gray-100 hover:bg-gray-200 focus:bg-gray-400 rounded outline-none transition-all"
);
const Container = styled(
  SafeAreaView,
  "flex-1 bg-indigo-500 sm:bg-indigo-900 h-screen"
);
const Form = styled<ViewProps>(View, "p-5");
const Spacer = styled(View, "h-4");
const Button = styled(Pressable, "p-4 bg-indigo-800 rounded-md");
const ButtonText = styled(Text, "text-white font-bold self-center");

const Index = () => {
  return (
    <Container>
      <Form accessibilityRole="form">
        <Input placeholder="Username" />
        <Spacer />
        <Input placeholder="Password" />
        <Spacer />
        <Button>
          <ButtonText>Login</ButtonText>
        </Button>
      </Form>
    </Container>
  );
};

export default Index;
