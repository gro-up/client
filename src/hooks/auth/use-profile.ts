import { firebaseAuth } from '@/lib/firebase/auth';
import { onAuthStateChanged } from 'firebase/auth';

import { useState, useEffect } from 'react';

export const useProfile = () => {
  const [photo, setPhoto] = useState<string | null>(null);
  const [displayName, setDisplayName] = useState<string | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, user => {
      if (user) {
        setPhoto(user.photoURL);
        setDisplayName(user.displayName);
      } else {
        setPhoto(null);
        setDisplayName(null);
      }
    });

    return () => unsubscribe();
  }, []);

  return { photo, displayName };
};
