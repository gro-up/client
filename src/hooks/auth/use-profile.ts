import { getMe } from "@/api/me";
import { firebaseAuth } from "@/firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import { useQuery } from "@tanstack/react-query";
import { useState, useEffect } from "react";

const defaultProfile = {
  photo: "",
  displayName: "",
  email: "",
};

// hooks/useProfile.ts
export const useProfile = () => {
  const [profile, setProfile] = useState(defaultProfile);
  const [isFirebaseReady, setFirebaseReady] = useState(false);
  const [isFirebaseUser, setFirebaseUser] = useState(false);

  // Firebase 로그인 감지
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, (user) => {
      setFirebaseReady(true); // Firebase 확인 완료

      if (user) {
        setFirebaseUser(true);
        setProfile({
          photo: user.photoURL || "",
          displayName: user.displayName || "",
          email: user.email || "",
        });
      } else {
        setFirebaseUser(false);
      }
    });

    return () => unsubscribe();
  }, []);

  const { data: meData } = useQuery({
    queryKey: ["me"],
    queryFn: getMe,
    enabled: isFirebaseReady && !isFirebaseUser,
    retry: false,
    staleTime: 1000 * 60 * 5,
  });

  useEffect(() => {
    if (meData && !isFirebaseUser) {
      setProfile({
        photo: meData.data.imageUrl || "",
        displayName: meData.data.userId || "",
        email: meData.data.email || "",
      });
    }
  }, [meData, isFirebaseUser]);

  return { profile };
};
