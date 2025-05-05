import { useState } from 'react';
import { Text, TextInput, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import DiceSvg from '../assets/icons/dice.svg'

interface PromptInputProps {
  value: string;
  onChangeText: (text: string) => void;
  secondaryTitle: string;
}
// after surprise me button clicked these prompts are randomly given to input area. 
const examplePrompts = [
    "A blue lion logo reading 'HEXA' in bold letters",
    "Minimalist tech company logo with geometric shapes",
    "Vintage badge logo for a coffee shop",
    "Modern sans-serif wordmark for a fashion brand",
    "Mascot logo of a fox for a gaming company",
    "Abstract symbol representing connectivity",
    "Retro 80s style neon logo for a music app",
    "Elegant serif monogram for a jewelry brand",
    "Playful cartoon logo for a kids' food product",
    "Futuristic cyberpunk logo for a tech startup"
  ];

export default function PromptInput({ value, onChangeText, secondaryTitle }: PromptInputProps) {

    const handleSurpriseMe = () => {
        const randomIndex = Math.floor(Math.random() * examplePrompts.length);
        onChangeText(examplePrompts[randomIndex]);
      };
      
  return (
    <View style={styles.container}>
        <View style={styles.promptHeader}>
           <Text style={styles.title}>Enter Your Prompt</Text>
           <TouchableOpacity
            style={styles.copyButton}
            onPress={handleSurpriseMe}
        >
            <View style={styles.iconContainer}>

      <Image
        source={require('../assets/images/dice.png')}
        style={styles.icon}
      />
            </View>
           <Text style={styles.secondaryTitle}> {secondaryTitle} </Text>
        </TouchableOpacity>
        </View>
      <TextInput
        style={styles.input}
        multiline
        numberOfLines={10}
        maxLength={500}
        placeholder="A blue lion logo reading ‘HEXA’ in bold letters"
        value={value}
        onChangeText={onChangeText}
        placeholderTextColor={'#71717A'}
        selectionColor="#FAFAFA"
        autoCorrect={false}
      />
      <Text style={styles.charCount}>{value.length}/500</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    backgroundColor: '#27272A',
    borderRadius: 16,
    padding: 12,
    minHeight: 175,
    fontFamily: 'Manrope_400Regular',
    color: '#FAFAFA',
    fontSize: 16,
    textAlignVertical: 'top',
  },
  title: {
    fontSize: 20,
    marginBottom: 15,
    color: '#FAFAFA',
    fontFamily: 'Manrope_800ExtraBold',
  },
  secondaryTitle: {
    fontSize: 13,
    marginBottom: 15,
    color: '#FAFAFA',
    fontFamily: 'Manrope_400Regular',
  },
    charCount: {
    alignSelf: 'flex-end',
    color: '#666',
    marginBottom: 10,
    fontFamily: 'Manrope_400Regular',
  },
  promptHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
},
copyButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
},
iconContainer: {
    width: 13,
    height: 13,
    marginBottom: 15,
  },
  icon: {
    width: '100%',
    height: '100%',
  },
});