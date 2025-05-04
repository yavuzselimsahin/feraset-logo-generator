// services/logoGenerator.ts
import { doc, serverTimestamp, setDoc } from 'firebase/firestore';
import { db } from '@/firebaseConfig';

type GenerateLogoParams = {
  prompt: string;
  selectedStyle: string;
  onStatusChange: (status: 'generating' | 'ready' | 'error') => void;
};

export const generateLogo = async ({
  prompt,
  selectedStyle,
  onStatusChange,
}: GenerateLogoParams) => {
  if (!prompt.trim()) return;

  try {
    
    // 1. Save to Firestore
    const requestRef = doc(db, 'logoRequests', Date.now().toString());
    await setDoc(requestRef, {
      prompt,
      logoType: selectedStyle,
      status: 'pending',
      createdAt: serverTimestamp()
    });

    // 2. Simulate processing (3-5 seconds)
    setTimeout(async () => {
      try {
        const isSuccess = Math.random() > 0.1;
        const status = isSuccess ? 'completed' : 'failed';
        const mockImageUrl = isSuccess 
          ? './assets/images/created-logo.jpg'
          : null;

        // 3. Update Firestore with result
        await setDoc(requestRef, {
          status,
          resultUrl: mockImageUrl,
          completedAt: serverTimestamp()
        }, { merge: true });

        onStatusChange(isSuccess ? 'ready' : 'error');
        
      } catch (error) {
        onStatusChange('error');
        console.error("Update failed:", error);
      }
    }, 3000 + Math.random() * 2000);

  } catch (error) {
    onStatusChange('error');
    console.error("Initial save failed:", error);
  }
};