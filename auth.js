import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import {
  getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged,
  createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail,
} from "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";

const app = initializeApp({
  apiKey: "AIzaSyAf4v4US9Sr0KlrD82B0J3QgCDimWFK1vk",
  authDomain: "youdiditaz-c93ea.firebaseapp.com",
  projectId: "youdiditaz-c93ea",
  storageBucket: "youdiditaz-c93ea.firebasestorage.app",
  messagingSenderId: "480440678879",
  appId: "1:480440678879:web:d1116f14fff2d1512c2c6a",
});
const auth = getAuth(app);

/* ---------- Nav düyməsi ---------- */
const btn = document.createElement("button");
btn.type = "button";
btn.textContent = "Daxil ol";
btn.style.cssText = "padding:8px 14px;border:0;border-radius:999px;background:#1a73e8;color:#fff;font:600 14px system-ui,sans-serif;cursor:pointer;margin-left:10px;";
const host = document.querySelector("header nav, nav, header");
if (host) host.appendChild(btn);
else { btn.style.cssText += "position:fixed;top:12px;right:12px;z-index:9999;"; document.body.appendChild(btn); }

/* ---------- Giriş pəncərəsi ---------- */
const modal = document.createElement("div");
modal.style.cssText = "display:none;position:fixed;inset:0;background:rgba(0,0,0,.55);z-index:10000;align-items:center;justify-content:center;padding:16px;font-family:system-ui,sans-serif;";
modal.innerHTML = `
<div style="background:#fff;color:#222;border-radius:16px;padding:22px;width:100%;max-width:340px;box-sizing:border-box">
  <h3 id="aTitle" style="margin:0 0 14px;font-size:20px">Daxil ol</h3>
  <input id="aEmail" type="email" placeholder="E-poçt" autocomplete="email" style="width:100%;box-sizing:border-box;padding:11px;margin-bottom:10px;border:1px solid #ccc;border-radius:10px;font-size:16px">
  <input id="aPass" type="password" placeholder="Şifrə (ən azı 6 simvol)" autocomplete="current-password" style="width:100%;box-sizing:border-box;padding:11px;margin-bottom:10px;border:1px solid #ccc;border-radius:10px;font-size:16px">
  <div id="aMsg" style="color:#d93025;font-size:13px;min-height:18px;margin-bottom:8px"></div>
  <button id="aSubmit" style="width:100%;padding:12px;border:0;border-radius:10px;background:#1a73e8;color:#fff;font-size:16px;font-weight:600;cursor:pointer">Daxil ol</button>
  <button id="aGoogle" style="width:100%;padding:12px;margin-top:8px;border:1px solid #ccc;border-radius:10px;background:#fff;color:#222;font-size:16px;cursor:pointer">Google ilə davam et</button>
  <div style="display:flex;justify-content:space-between;margin-top:12px;font-size:14px">
    <a href="#" id="aSwitch" style="color:#1a73e8">Qeydiyyat</a>
    <a href="#" id="aReset" style="color:#1a73e8">Şifrəni unutdum</a>
  </div>
  <div id="aClose" style="text-align:center;margin-top:12px;color:#777;font-size:14px;cursor:pointer">Bağla</div>
</div>`;
document.body.appendChild(modal);

const $ = (id) => modal.querySelector("#" + id);
let mode = "login";

function setMode(m) {
  mode = m;
  $("aTitle").textContent = m === "login" ? "Daxil ol" : "Qeydiyyat";
  $("aSubmit").textContent = m === "login" ? "Daxil ol" : "Qeydiyyatdan keç";
  $("aSwitch").textContent = m === "login" ? "Qeydiyyat" : "Hesabım var";
  $("aPass").autocomplete = m === "login" ? "current-password" : "new-password";
  $("aMsg").textContent = "";
}
const msg = (t, ok) => { $("aMsg").style.color = ok ? "#188038" : "#d93025"; $("aMsg").textContent = t; };
const open = () => { setMode("login"); modal.style.display = "flex"; };
const close = () => { modal.style.display = "none"; };

const errors = {
  "auth/invalid-email": "E-poçt düzgün deyil.",
  "auth/missing-password": "Şifrəni yaz.",
  "auth/weak-password": "Şifrə ən azı 6 simvol olmalıdır.",
  "auth/email-already-in-use": "Bu e-poçt artıq qeydiyyatdadır.",
  "auth/invalid-credential": "E-poçt və ya şifrə səhvdir.",
  "auth/user-not-found": "Bu e-poçtla hesab yoxdur.",
  "auth/wrong-password": "Şifrə səhvdir.",
  "auth/too-many-requests": "Çox cəhd oldu, bir az sonra yenidən yoxla.",
  "auth/unauthorized-domain": "Bu domen Firebase-də icazəli deyil.",
  "auth/popup-closed-by-user": "",
};

$("aSwitch").onclick = (e) => { e.preventDefault(); setMode(mode === "login" ? "signup" : "login"); };
$("aClose").onclick = close;
modal.addEventListener("click", (e) => { if (e.target === modal) close(); });

$("aSubmit").onclick = async () => {
  const email = $("aEmail").value.trim(), pass = $("aPass").value;
  try {
    if (mode === "login") await signInWithEmailAndPassword(auth, email, pass);
    else await createUserWithEmailAndPassword(auth, email, pass);
    close();
  } catch (err) { msg(errors[err.code] ?? "Xəta: " + err.code); }
};

$("aGoogle").onclick = async () => {
  try { await signInWithPopup(auth, new GoogleAuthProvider()); close(); }
  catch (err) { msg(errors[err.code] ?? "Xəta: " + err.code); }
};

$("aReset").onclick = async (e) => {
  e.preventDefault();
  const email = $("aEmail").value.trim();
  if (!email) return msg("Əvvəlcə e-poçtu yaz.");
  try { await sendPasswordResetEmail(auth, email); msg("Bərpa linki e-poçta göndərildi.", true); }
  catch (err) { msg(errors[err.code] ?? "Xəta: " + err.code); }
};

btn.onclick = () => (auth.currentUser ? signOut(auth) : open());

onAuthStateChanged(auth, (user) => {
  btn.textContent = user ? "Çıxış" : "Daxil ol";
  window.currentUser = user || null;
  document.dispatchEvent(new CustomEvent("authchange", { detail: user }));
});
