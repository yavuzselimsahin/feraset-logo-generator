import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { Image } from 'react-native';

export type LoadingState = 'generating' | 'ready' | 'error';

interface LoadingChipProps {
  state: LoadingState;
  onPress: () => void;
}

export default function LoadingChip({ state, onPress }: LoadingChipProps) {
  const renderSidebar = () => (
    <>
      <View style={[
        styles.sideBar,
        state === 'error' && styles.errorSideBar
      ]}>
       {state === 'generating' ? (
    <ActivityIndicator size="large" color="#FAFAFA" />
  ) : state === 'ready' ? (
    <Image 
      source={require('../assets/images/created-logo.jpg')}
      resizeMode="contain"
      style={styles.readyImage}
    />
  ) : (
    <Ionicons name="alert-circle" size={32} color="#FAFAFA" />
  )}
      </View>
      
      <View style={styles.textContainer}>
        <Text style={styles.mainText}>
          {state === 'generating' ? 'Creating Your Design...' : 
           state === 'ready' ? 'Your Design is Ready!' : 
           'Oops, something went wrong...'}
        </Text>
        <Text style={[
          styles.secondaryReadyText,
          state !== 'generating' && styles.secondaryText
        ]}>
          {state === 'generating' ? 'Ready in 2 minutes' : 
           state === 'ready' ? 'Tap to see it.' : 
           'Click to try again.'}
        </Text>
      </View>
    </>
  );

  return (
    <TouchableOpacity 
      style={styles.container}
      onPress={onPress}
      disabled={state !== 'ready'}
    >
      {state === 'ready' ? (
        <LinearGradient
          colors={['#2938DC', '#943DFF']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.gradientContainer}
        >
          {renderSidebar()}
        </LinearGradient>
      ) : (
        <View style={[
          styles.solidContainer,
          state === 'error' && styles.errorContainer
        ]}>
          {renderSidebar()}
        </View>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 16,
    marginBottom: 20,
    width: '100%',
    overflow: 'hidden',
  },
  gradientContainer: {
    flexDirection: 'row',
  },
  solidContainer: {
    flexDirection: 'row',
    backgroundColor: '#27272A',
  },
  errorContainer: {
    backgroundColor: '#EF4444',
  },
  sideBar: {
    width: 70,
    backgroundColor: '#18181B',
    alignItems: 'center',
    justifyContent: 'center',
  },
  errorSideBar: {
    backgroundColor: '#f37373',
    opacity: 1,
  },
  textContainer: {
    padding: 12,
    flex: 1,
  },
  mainText: {
    fontSize: 16,
    fontFamily: 'Manrope_800ExtraBold',
    marginBottom: 2,
    color: '#FAFAFA',
  },
  secondaryText: {
    fontSize: 13,
    color: '#D4D4D8',
    fontFamily: 'Manrope_500Medium',
  },
  secondaryReadyText: {
    fontSize: 13,
    color: '#71717A',
    fontFamily: 'Manrope_500Medium',
  },
  readyImage: {

    height: 70,
  },
  
});