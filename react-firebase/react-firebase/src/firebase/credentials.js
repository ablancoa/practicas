import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
  getBytes,
} from "firebase/storage";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  query,
  where,
  doc,
  getDoc,
  updateDoc,
  deleteDoc,
  setDoc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
};

const firebaseApp = initializeApp(firebaseConfig);
export default firebaseApp;

export const auth = getAuth(firebaseApp);
export const db = getFirestore(firebaseApp);
export const storage = getStorage(firebaseApp);

export async function userExists(uid) {
  const userRef = doc(db, "users", uid);
  const userSnap = await getDoc(userRef);
  return userSnap.exists();
}

export async function existUserName(username) {
  const users = [];
  const userRef = collection(db, "users");
  const q = query(userRef, where("username", "==", username));

  const querySnapshot = await getDocs(q);

  querySnapshot.forEach((doc) => {
    users.push(doc.data());
  });

  return users.length > 0 ? users[0].uid : null;
}

export async function registerNewUser(user) {
  try {
    const collectionRef = collection(db, "users");
    await setDoc(doc(collectionRef, user.uid), user);
  } catch (error) {
    console.log(error);
  }
}

export async function updateUser(user) {
  try {
    const collectionRef = collection(db, "users");
    await setDoc(doc(collectionRef, user.uid), user);
  } catch (error) {
    console.log(error);
  }
}

export async function getUserInfo(uid) {
  try {
    const docRef = doc(db, "users", uid);
    const document = await getDoc(docRef);
    return document.data();
  } catch (error) {
    console.log(error);
  }
}
