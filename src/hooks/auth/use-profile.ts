import { firebaseAuth } from '@/firebase/auth';
import { onAuthStateChanged } from 'firebase/auth';

import { useState, useEffect } from 'react';

const defaultProfile = {
  photo: '',
  displayName: '',
  email: '',
};

export const useProfile = () => {
  const [profile, setProfile] = useState<typeof defaultProfile>(defaultProfile);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, profile => {
      if (profile) {
        setProfile({
          photo: profile.photoURL || '',
          displayName: profile.displayName || '',
          email: profile.email || '',
        });
      } else {
        setProfile(defaultProfile);
      }
    });

    return () => unsubscribe();
  }, []);

  return { profile };
};
