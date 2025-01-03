import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      {/* Define your routes here */}
      <Stack.Screen name="register" />
      <Stack.Screen name="login" />
      {/* Add other screens as needed */}
    </Stack>
  );
}
