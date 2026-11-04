import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAf4v4US9Sr0KlrD82B0J3QgCDimWFK1vk",
  authDomain: "youdiditaz-c93ea.firebaseapp.com",
  projectId: "youdiditaz-c93ea",
  storageBucket: "youdiditaz-c93ea.firebasestorage.app",
  messagingSenderId: "480440678879",
  appId: "1:480440678879:web:d1116f14fff2d1512c2c6a",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Düyməni yarat (nav/header varsa ora, yoxsa yuxarı sağ küncə)
const btn = document.createElement("button");
btn.id = "authBtn";
btn.type = "button";
btn.textContent = "Daxil ol";
btn.style.cssText =
  "padding:8px 14px;border:0;border-radius:999px;background:#1a73e8;color:#fff;" +
  "font:600 14px system-ui,sans-serif;cursor:pointer;margin-left:10px;";

const host = document.querySelector("header nav, nav, header");
if (host) {
  host.appendChild(btn);
} else {
  btn.style.cssText += "position:fixed;top:12px;right:12px;z-index:9999;";
  document.body.appendChild(btn);
}

btn.addEventListener("click", async () => {
  try {
    if (auth.currentUser) {
      await signOut(auth);
    } else {
      await signInWithPopup(auth, provider);
    }
  } catch (err) {
    console.error("Auth xətası:", err.code, err.message);
    if (err.code === "auth/unauthorized-domain") {
      alert("Bu domen Firebase-də icazəli deyil (Authorized domains).");
    }
  }
});

// Giriş vəziyyəti dəyişəndə düyməni yenilə
onAuthStateChanged(auth, (user) => {
  btn.textContent = user
    ? `Çıxış (${(user.displayName || user.email || "").split(" ")[0]})`
    : "Daxil ol";
  window.currentUser = user || null;
  document.dispatchEvent(new CustomEvent("authchange", { detail: user }));
});
