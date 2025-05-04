import { Ionicons } from '@expo/vector-icons';
import { Text, View, StyleSheet, Dimensions, TouchableOpacity, Alert } from 'react-native';
import * as Clipboard from 'expo-clipboard';
import Toast from 'react-native-toast-message';



interface PromptCardProps {
    prompt: string;
    logoType: string;
}

export default function PromptCard({ prompt, logoType }: PromptCardProps) {

    const handleCopyPrompt = async () => {
        try {
          await Clipboard.setStringAsync(prompt);
          Toast.show({
            type: 'success',
            position: 'bottom',
            text1: 'Copied to clipboard',
            visibilityTime: 2000
          });
        } catch (error) {
          Toast.show({
            type: 'error',
            text1: 'Copy failed',
            text2: 'Please try again',
            visibilityTime: 2000
          });
        }
      };

    return (
        <View style={styles.card}>
            {/* Card Header */}
            <View style={styles.cardHeader}>
                <Text style={styles.cardHeaderText}>Prompt</Text>
                <TouchableOpacity
                    style={styles.copyButton}
                    onPress={handleCopyPrompt}
                >
                    <Ionicons name="copy-outline" size={16} color="#A1A1AA" />
                    <Text style={styles.copyText}>Copy</Text>
                </TouchableOpacity>
            </View>

            {/* Card Body */}
            <View style={styles.cardBody}>
                <Text style={styles.promptText}>{prompt}</Text>
            </View>

            {/* Card Footer */}
            <View style={styles.cardFooter}>
                <View style={styles.badge}>
                    <Text style={styles.badgeText}>{logoType}</Text>
                </View>
            </View>
        </View>
    );
}

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        flex: 1,
        paddingHorizontal: 0, // No side padding
    },
    closeButton: {
        position: 'absolute',
        top: 16,
        right: 16,
        zIndex: 1,
        padding: 8,
    },
    imageWrapper: {
        width: width,
        aspectRatio: 1, // Square container (adjust as needed)
        marginBottom: 24,
        padding: 16,
    },
    image: {
        flex: 1,
        width: undefined,
        height: undefined,
        borderRadius: 16,
        overflow: 'hidden',
    },
    promptText: {
        fontSize: 16,
        fontFamily: 'Manrope_400Regular',
        textAlign: 'left',
        justifyContent: 'flex-start',
        marginBottom: 16,
        color: '#FAFAFA',
    },
    badge: {
        backgroundColor: '#3F3F46',
        alignSelf: 'center',
        paddingVertical: 4,
        paddingHorizontal: 8,
        borderRadius: 20,
    },
    badgeText: {
        fontSize: 12,
        fontFamily: 'Manrope_400Regular',
        color: '#FAFAFA',
    },
    card: {
        backgroundColor: '#27272A',
        borderRadius: 12,
        padding: 16,
    },
    cardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
        paddingBottom: 0,
    },
    cardHeaderText: {
        fontFamily: 'Manrope_700Bold',
        fontSize: 15,
        color: '#FAFAFA',
    },
    copyButton: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
    },
    copyText: {
        fontFamily: 'Manrope_400Regular',
        fontSize: 11,
        color: '#A1A1AA',
    },
    cardBody: {
        flexDirection: 'row',
    },
    cardFooter: {
        flexDirection: 'row',
    },

});