import { auth } from "./firebase-config.js";
import { signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";

const page = location.pathname.split("/").pop() || "index.html";
const isLoginPage = page === "login.html";

// Giriş yoxlanana qədər səhifəni gizlət (kontent görünməsin)
if (!isLoginPage) document.documentElement.style.visibility = "hidden";

// Nav düyməsi (giriş səhifəsində göstərmirik)
const btn = document.createElement("button");
btn.type = "button";
btn.textContent = "Çıxış";
btn.style.cssText = "padding:8px 14px;border:0;border-radius:999px;background:#1a73e8;color:#fff;font:600 14px system-ui,sans-serif;cursor:pointer;margin-left:10px;";
btn.onclick = () => signOut(auth);

if (!isLoginPage) {
  const add = () => {
    const host = document.querySelector("header nav, nav, header");
    if (host) host.appendChild(btn);
    else { btn.style.cssText += "position:fixed;top:12px;right:12px;z-index:9999;"; document.body.appendChild(btn); }
  };
  if (document.body) add(); else document.addEventListener("DOMContentLoaded", add);
}

onAuthStateChanged(auth, (user) => {
  window.currentUser = user || null;
  document.dispatchEvent(new CustomEvent("authchange", { detail: user }));

  if (isLoginPage) return;               // login.html özü yönləndirir
  if (!user) {
    location.replace("login.html?next=" + encodeURIComponent(page));
  } else {
    document.documentElement.style.visibility = "";   // səhifəni göstər
  }
});
