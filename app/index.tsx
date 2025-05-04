import { useState } from 'react';
import { View, ScrollView, TouchableOpacity, Text, StyleSheet, StatusBar } from 'react-native';
import { useRouter } from 'expo-router';
import PromptInput from '../components/PromptInput';
import LoadingChip, { LoadingState } from '../components/LoadingChip';
import LogoStyleSlider from '@/components/LogoStyleSlider';
import { LinearGradient } from 'expo-linear-gradient';
import SparkSvg from '../assets/icons/stars.svg'
import { generateLogo } from '@/db/logoRequest';

const logoStyles = [
  { id: '1', title: 'No Style', image: '' },
  { id: '3', title: 'Monogram', image: require('../assets/images/monogram.png') },
  { id: '2', title: 'Abstract', image: require('../assets/images/abstract.png') },
  { id: '4', title: 'Mascot', image: require('../assets/images/mascot.png') },
];

export default function HomeScreen() {
  const router = useRouter();
  const [prompt, setPrompt] = useState('');
  const [selectedStyle, setSelectedStyle] = useState('No Style');
  const [chipState, setChipState] = useState<LoadingState | null>(null);


  const handleGenerate = async () => {
    if (!prompt.trim()) return;

    setChipState('generating');

    // logo generate request    
    await generateLogo({
      prompt,
      selectedStyle,
      onStatusChange: setChipState
    });
  };

  const handleChipPress = () => {
    if (chipState === 'ready') {
      router.push({
        pathname: '/output',
        params: { prompt, logoType: selectedStyle }
      });
      setChipState(null);
    } else if (chipState === 'error') {
      setChipState(null); // Reset chip to try again
    }
  };

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />

      {/* Main gradient background container */}
      <LinearGradient
        colors={[
          '#09090B', // Top-left corner (dark)
          '#09090B', // Top gradient
          '#3c195b', // Center (vibrant)
          '#09090B', // Bottom gradient
          '#09090B'  // Bottom-right corner (dark)
        ]}
        locations={[0, 0.3, 0.5, 0.7, 1]}
        start={{ x: 0.3, y: 0 }} // Top-left
        end={{ x: 1, y: 1 }}   // Bottom-right
        style={styles.wrapper}
      >

        <ScrollView contentContainerStyle={styles.container}>
          {chipState !== null && (
            <LoadingChip
              state={chipState}
              onPress={handleChipPress}
            />
          )}

          <PromptInput
            value={prompt}
            onChangeText={setPrompt}
            secondaryTitle='Surprise me'
          />

          <Text style={styles.sectionTitle}>Logo Styles</Text>

          <LogoStyleSlider
            styles={logoStyles}
            selectedStyle={selectedStyle}
            onSelect={setSelectedStyle}
          />

        </ScrollView>
        <View style={styles.buttonContainer}>

          <TouchableOpacity
            onPress={handleGenerate}
            disabled={!prompt.trim()}
          >
            <LinearGradient
              colors={['#2938DC', '#943DFF']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.button}
            >
              <View style={styles.buttonContent}>
                <Text style={styles.buttonText}>Create</Text>
                <SparkSvg />
              </View>
            </LinearGradient>
          </TouchableOpacity>

        </View>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#09090B',
  },
  container: {
    flexGrow: 1,
    padding: 12,
    paddingBottom: 100,
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: 'Manrope_700Bold',
    color: '#ffffff',
  },
  styleContainer: {
    paddingBottom: 10,
    gap: 10,
  },
  buttonContainer: {
    padding: 40,
  },
  buttonGradient: {
    borderRadius: 50,
    margin: 20
  },
  button: {
    padding: 16,
    borderRadius: 50,
    alignItems: 'center',
    marginTop: 30,
  },
  buttonDisabled: {
    backgroundColor: '#CCCCCC',
  },
  buttonText: {
    color: '#FAFAFA',
    fontSize: 17,
    fontFamily: 'Manrope_800ExtraBold',
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
});