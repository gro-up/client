import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { firebaseApp } from './app';

export const firebaseAuth = getAuth(firebaseApp);
export const firebaseProvider = new GoogleAuthProvider();
