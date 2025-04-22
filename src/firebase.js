// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // ✅ Import Auth
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDS2oAb2rjFLR91ykMXgIiKUmB8Ce_84HQ",
  authDomain: "love-area-c4766.firebaseapp.com",
  projectId: "love-area-c4766",
  storageBucket: "love-area-c4766.appspot.com", // ❗ fixed the storageBucket domain
  messagingSenderId: "392266670371",
  appId: "1:392266670371:web:c2ac63156cbf505acd6c96",
  measurementId: "G-V2WLFLEQ3H"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app); // ✅ Export this
// npn run build
export { auth };
