// Import Firebase libraries
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";


// Your Firebase project's configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyAKM98angSbdTOH7q6d2b7tcAB2fZF33G0",
//   authDomain: "pipeline-885b6.firebaseapp.com",
//   projectId: "pipeline-885b6",
//   storageBucket: "pipeline-885b6.appspot.com", // Corrected the storage bucket domain
//   messagingSenderId: "757099453629",
//   appId: "1:757099453629:web:abc9bcbd8713328871ebd4",
// };

const firebaseConfig = {
  apiKey: "AIzaSyC2cneLOr5JWh23hIaUhHp1qYeZSV87Vws",
  authDomain: "pipelinesia.firebaseapp.com",
  projectId: "pipelinesia",
  storageBucket: "pipelinesia.firebasestorage.app",
  messagingSenderId: "844992024928",
  appId: "1:844992024928:web:df7c37e9db92f16f9bce05",
  measurementId: "G-CR20D4WBGM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
const analytics = getAnalytics(app);