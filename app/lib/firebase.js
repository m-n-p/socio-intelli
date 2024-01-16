import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyDvqMQ7s8yJkghW1MRunfHNynx7LGYKht4",
  authDomain: "genesis-unwinded.firebaseapp.com",
  projectId: "genesis-unwinded",
  storageBucket: "genesis-unwinded.appspot.com",
  messagingSenderId: "895198374364",
  appId: "1:895198374364:web:b3416557444fae64ff4719",
  measurementId: "G-BEYQ6ZMCK1",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);
