import { auth } from "./firebase-config.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";

const page = location.pathname.split("/").pop() || "index.html";
const isLoginPage = page === "login.html";

// Giriş yoxlanana qədər səhifəni gizlət
if (!isLoginPage) document.documentElement.style.visibility = "hidden";

// "Profil" düyməsi (saytın nav-button üslubunda)
const link = document.createElement("a");
link.href = "profile.html";
link.textContent = "👤 Profil";
link.style.cssText =
  "padding:10px 17px;border-radius:999px;background:linear-gradient(135deg,#6b52ff,#a34eff);" +
  "color:#fff;font:800 12px Inter,system-ui,sans-serif;text-decoration:none;white-space:nowrap;" +
  "box-shadow:0 8px 25px rgba(118,81,255,.28);";

function addLink() {
  const bar = document.querySelector(".nav-inner");
  if (bar) {
    const toggle = bar.querySelector(".menu-toggle");
    bar.insertBefore(link, toggle || null);
    return;
  }
  const host = document.querySelector("header nav, nav, header");
  if (host) host.appendChild(link);
  else { link.style.cssText += "position:fixed;top:12px;right:12px;z-index:9999;"; document.body.appendChild(link); }
}

if (!isLoginPage) {
  if (document.body) addLink();
  else document.addEventListener("DOMContentLoaded", addLink);
  import("./history.js");   // window.yd.log(...) və avtomatik tarixçə
}

onAuthStateChanged(auth, (user) => {
  window.currentUser = user || null;
  document.dispatchEvent(new CustomEvent("authchange", { detail: user }));

  if (isLoginPage) return;
  if (!user) location.replace("login.html?next=" + encodeURIComponent(page));
  else document.documentElement.style.visibility = "";
});
