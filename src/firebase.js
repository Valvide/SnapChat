import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyDDX2H0EM1cbF_FUTzWtfyns53TRvTGBO4",
  authDomain: "snapchat-yt-40f00.firebaseapp.com",
  projectId: "snapchat-yt-40f00",
  storageBucket: "snapchat-yt-40f00.appspot.com",
  messagingSenderId: "268174793487",
  appId: "1:268174793487:web:9440e3d3339ea88bb07c7a",
};

const provider = new GoogleAuthProvider();
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

export { provider, auth, db, storage };
