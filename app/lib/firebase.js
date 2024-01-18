import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyCFXpZtypZ_uFe0JXTjdd5vIj3g36sTcFg",
  authDomain: "sociointel-2cb7b.firebaseapp.com",
  projectId: "sociointel-2cb7b",
  storageBucket: "sociointel-2cb7b.appspot.com",
  messagingSenderId: "872999120414",
  appId: "1:872999120414:web:c26a8707c1b7223a6b880f",
  measurementId: "G-0MRT04W53T",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);
