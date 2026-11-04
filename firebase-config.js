import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAf4v4US9Sr0KlrD82B0J3QgCDimWFK1vk",
  authDomain: "youdiditaz-c93ea.firebaseapp.com",
  projectId: "youdiditaz-c93ea",
  storageBucket: "youdiditaz-c93ea.firebasestorage.app",
  messagingSenderId: "480440678879",
  appId: "1:480440678879:web:d1116f14fff2d1512c2c6a",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);