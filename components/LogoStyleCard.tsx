import { TouchableOpacity, Text, StyleSheet, Image, View } from 'react-native';

interface LogoStyleCardProps {
  title: string;
  selected: boolean;
  onPress: () => void;
  image?: any; // You can use `require('./path')` or {uri: 'https://...'}
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
      <View style={[styles.imageContainer, selected && styles.selectedImageContainer]}>
        <Image 
          source={image} 
          style={styles.image}
          resizeMode="cover"
        />
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
    opacity: 1
  },
  selectedContainer: {
    opacity: 1,
  },
  imageContainer: {
    width: 100,
    height: 100,
    borderRadius: 12,
    backgroundColor: '#F8F8F8',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    marginBottom: 6,
  },
  selectedImageContainer: {
    borderColor: '#FAFAFA',
    borderWidth: 2,
    marginBottom: 6,
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
    fontSize: 14,
    color: '#FAFAFAFF',
    fontFamily: 'Manrope_700Bold',
  },
});