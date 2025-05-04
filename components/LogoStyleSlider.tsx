import { ScrollView, View, StyleSheet } from 'react-native';
import LogoStyleCard from './LogoStyleCard';

interface LogoStyle {
  id: string;
  title: string;
  image: any;
}

interface LogoStyleSliderProps {
  styles: LogoStyle[];
  selectedStyle: string;
  onSelect: (style: string) => void;
}

export default function LogoStyleSlider({ 
  styles, 
  selectedStyle, 
  onSelect 
}: LogoStyleSliderProps) {
  return (
    <View style={sliderStyles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={sliderStyles.scrollContainer}
      >
        {styles.map((style) => (
          <LogoStyleCard
            key={style.id}
            title={style.title}
            image={style.image}
            selected={selectedStyle === style.title}
            onPress={() => onSelect(style.title)}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const sliderStyles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  scrollContainer: {
    paddingHorizontal: 0,
    paddingBottom: 8, // For scroll spacing
  },
});