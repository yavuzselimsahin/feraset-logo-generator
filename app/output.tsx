import { View, StyleSheet, Image, SafeAreaView, Dimensions } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import PromptCard from '@/components/PromptCard';

export default function OutputScreen() {
    const { prompt, logoType } = useLocalSearchParams<{
        prompt: string;
        logoType: string;
    }>();


    return (
        <LinearGradient
            colors={['#09090B', '#09090B', '#3c195b', '#09090B', '#09090B']}
            locations={[0, 0.3, 0.5, 0.7, 1]}
            start={{ x: 0.3, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.container}>
            <SafeAreaView style={styles.safeArea}>
                <View style={styles.content}>
                    <View style={styles.imageWrapper}>
                        <Image
                            source={require('@/assets/images/created-logo.jpg')}
                            style={styles.image}
                            resizeMode="cover"
                        />
                    </View>
                    <View style={styles.cardContainer}>
                    <PromptCard prompt={prompt} logoType={logoType} />
                    </View>
                </View>
            </SafeAreaView>
        </LinearGradient>
    );
}

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    safeArea: {
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
        marginBottom: 6,
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
        textAlign: 'center',
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
        padding: 20,
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
    cardContainer: {
        padding: 16,
    }
});