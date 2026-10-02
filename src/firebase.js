import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC5Xjbl0e2Zbh8tMutHIOGa8ki4ZXW9uk0",
  authDomain: "aether-albatross.firebaseapp.com",
  projectId: "aether-albatross",
  storageBucket: "aether-albatross.firebasestorage.app",
  messagingSenderId: "396672803742",
  appId: "1:396672803742:web:349490b0336a687246ac8f",
  measurementId: "G-78BQXJMR3E"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;