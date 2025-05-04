import { TouchableOpacity, Text, StyleSheet, Image, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface LogoStyleCardProps {
  title: string;
  selected: boolean;
  onPress: () => void;
  image?: any;
}

export default function LogoStyleCard({ 
  title, 
  selected, 
  onPress, 
  image 
}: LogoStyleCardProps) {
  return (
    <TouchableOpacity
      style={[styles.container, selected && styles.selectedContainer]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <View style={[styles.imageContainer, selected && styles.selectedImageContainer, !image && styles.noImageContainer]}>
        {image ? (
          <Image 
            source={image} 
            style={styles.image}
            resizeMode="cover"
          />
        ) : (
          <Ionicons name="ban-outline" size={44} color={selected ? '#FAFAFA' : '#71717A'} />
        )}
      </View>
      <Text style={[styles.text, selected && styles.selectedText]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 100,
    alignItems: 'center',
    marginRight: 16,
  },
  selectedContainer: {
    opacity: 1,
  },
  imageContainer: {
    width: 100,
    height: 100,
    borderRadius: 12,
    backgroundColor: '#18181B', // Black background
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    marginBottom: 6,
  },
  noImageContainer: {
    backgroundColor: '#09090B', // Even darker for restricted items
  },
  selectedImageContainer: {
    borderColor: '#FAFAFA',
    borderWidth: 2,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  text: {
    fontSize: 14,
    fontFamily: 'Manrope_500Medium',
    color: '#71717A',
    textAlign: 'center',
  },
  selectedText: {
    color: '#FAFAFA',
    fontFamily: 'Manrope_700Bold',
  },
});