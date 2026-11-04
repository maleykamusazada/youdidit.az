import { initializeApp } from "https://www.gstatic.com/firebasejs/13.2.0/firebase-app.js";
import {
  getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,
  signInWithPopup, GoogleAuthProvider, sendPasswordResetEmail,
  signOut, onAuthStateChanged, updateProfile
} from "https://www.gstatic.com/firebasejs/13.2.0/firebase-auth.js";
import { firebaseConfig } from "./firebase-config.js";

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const ERRORS = {
  "auth/email-already-in-use": "Bu e-poçt artıq qeydiyyatdan keçib.",
  "auth/invalid-email": "E-poçt ünvanı düzgün deyil.",
  "auth/weak-password": "Parol ən azı 6 simvol olmalıdır.",
  "auth/invalid-credential": "E-poçt və ya parol səhvdir.",
  "auth/user-not-found": "Bu e-poçt ilə hesab tapılmadı.",
  "auth/wrong-password": "Parol səhvdir.",
  "auth/too-many-requests": "Çox cəhd edildi. Bir az sonra yenidən yoxlayın.",
  "auth/popup-closed-by-user": "Google pəncərəsi bağlandı.",
  "auth/network-request-failed": "İnternet bağlantısını yoxlayın."
};
export const errText = e => ERRORS[e.code] || "Xəta baş verdi. Yenidən cəhd edin.";

export async function register(name, email, password) {
  const cred = await createUserWithEmailAndPassword(auth, email, password);
  if (name) await updateProfile(cred.user, { displayName: name });
  return cred.user;
}
export const login = (email, password) => signInWithEmailAndPassword(auth, email, password);
export const googleLogin = () => signInWithPopup(auth, new GoogleAuthProvider());
export const resetPassword = email => sendPasswordResetEmail(auth, email);
export const logout = () => signOut(auth);

// Naviqasiyada <a id="authLink"> varsa avtomatik yenilənir
onAuthStateChanged(auth, user => {
  const link = document.getElementById("authLink");
  if (!link) return;
  if (user) {
    link.textContent = "Çıxış (" + (user.displayName || user.email.split("@")[0]) + ")";
    link.href = "#";
    link.onclick = async e => { e.preventDefault(); await logout(); location.reload(); };
  } else {
    link.textContent = "Daxil ol";
    link.href = "login.html";
    link.onclick = null;
  }
});
