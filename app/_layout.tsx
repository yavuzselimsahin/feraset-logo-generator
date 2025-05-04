import { Stack } from 'expo-router';
import { useFonts, Manrope_400Regular, Manrope_700Bold, Manrope_800ExtraBold } from '@expo-google-fonts/manrope';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { TouchableOpacity, StyleSheet, View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

// Inside your component:

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const insets = useSafeAreaInsets();
  const [fontsLoaded] = useFonts({
    Manrope_400Regular,
    Manrope_700Bold,
    Manrope_800ExtraBold,
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'AI Logo',   headerStyle: {
        backgroundColor: '#09090B', // Header arkaplanı siyah
      },
      headerTintColor: '#FAFAFA', // Geri tuşu ve başlık rengi beyaz
      headerTitleStyle: {
        fontFamily: 'Manrope_700Bold',
      },}} />
   <Stack.Screen 
  name="output" 
  options={{
    headerBackVisible: false,
    presentation: 'containedModal',
    header: ({ navigation }) => (
      <View style={[styles.customHeader, { paddingTop: insets.top + 12 }]}>
        <Text style={styles.headerTitle}>Your Design</Text>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.closeButton}
        >
          <Ionicons name="close" size={24} color="#FAFAFA" />
        </TouchableOpacity>
      </View>
    ),
  }}
/>
    </Stack>
  );
}

const styles = StyleSheet.create({
  customHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#09090B',
    padding: 24,
  },
  headerTitle: {
    fontFamily: 'Manrope_800ExtraBold',
    color: '#FAFAFA',
    fontSize: 22,
  },
  closeButton: {
  },
});
