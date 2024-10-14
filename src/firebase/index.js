import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAEHIgHTzcDewjxUvlzKTvkDiYbPuUdxwk",
  authDomain: "flood-warning-8e647.firebaseapp.com",
  databaseURL: "https://flood-warning-8e647-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "flood-warning-8e647",
  storageBucket: "flood-warning-8e647.appspot.com",
  messagingSenderId: "844824643733",
  appId: "1:844824643733:web:b328e3ee576f18c08c739c"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
