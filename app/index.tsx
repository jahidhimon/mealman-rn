import { PropsWithChildren } from "react";
import { StyleSheet, Text, View } from "react-native";

export const CustomText = ({ children }: PropsWithChildren) => (
  <Text style={styles.customText}>{children}</Text>
);

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <CustomText>Hello from Ethereal Trident!!</CustomText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  customText: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
