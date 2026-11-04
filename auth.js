import { auth } from "./firebase-config.js";
import { signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";

const page = location.pathname.split("/").pop() || "index.html";
const isLoginPage = page === "login.html";

// Giriş yoxlanana qədər səhifəni gizlət
if (!isLoginPage) document.documentElement.style.visibility = "hidden";

// "Çıxış" düyməsi (saytın nav-button üslubunda)
const btn = document.createElement("button");
btn.type = "button";
btn.textContent = "Çıxış";
btn.style.cssText =
  "padding:10px 17px;border:0;border-radius:999px;background:rgba(255,255,255,.08);" +
  "border:1px solid rgba(255,255,255,.16);color:#f8f7ff;font:800 12px Inter,system-ui,sans-serif;" +
  "cursor:pointer;white-space:nowrap;";
btn.onclick = () => signOut(auth);

function addButton() {
  const bar = document.querySelector(".nav-inner");
  if (bar) {
    const toggle = bar.querySelector(".menu-toggle");
    bar.insertBefore(btn, toggle || null);
    return;
  }
  const host = document.querySelector("header nav, nav, header");
  if (host) host.appendChild(btn);
  else { btn.style.cssText += "position:fixed;top:12px;right:12px;z-index:9999;"; document.body.appendChild(btn); }
}

if (!isLoginPage) {
  if (document.body) addButton();
  else document.addEventListener("DOMContentLoaded", addButton);
}

onAuthStateChanged(auth, (user) => {
  window.currentUser = user || null;
  document.dispatchEvent(new CustomEvent("authchange", { detail: user }));

  if (isLoginPage) return;
  if (!user) location.replace("login.html?next=" + encodeURIComponent(page));
  else document.documentElement.style.visibility = "";
});

