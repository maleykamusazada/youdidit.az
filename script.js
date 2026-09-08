// Mobile nav toggle
document.addEventListener("DOMContentLoaded", function () {
  var btn = document.querySelector(".menu-btn");
  var nav = document.querySelector(".mobile-nav");
  if (btn && nav) {
    btn.addEventListener("click", function () {
      nav.classList.toggle("open");
      var expanded = nav.classList.contains("open");
      btn.setAttribute("aria-expanded", expanded ? "true" : "false");
    });
  }

  // Order form (Formspree) — AJAX submit so the person stays on-page
  var form = document.getElementById("order-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var status = document.getElementById("form-status");
      var submitBtn = form.querySelector('button[type="submit"]');
      var data = new FormData(form);

      submitBtn.disabled = true;
      submitBtn.textContent = "Göndərilir…";

      fetch(form.action, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      })
        .then(function (response) {
          if (response.ok) {
            status.textContent = "Sorğunuz göndərildi. Tezliklə sizinlə əlaqə saxlanılacaq.";
            status.className = "show ok";
            form.reset();
          } else {
            return response.json().then(function (json) {
              throw new Error(
                (json && json.errors && json.errors.map(function (e) { return e.message; }).join(", ")) ||
                  "Xəta baş verdi."
              );
            });
          }
        })
        .catch(function () {
          status.textContent = "Göndərmək mümkün olmadı. Zəhmət olmasa bir az sonra yenidən cəhd edin, ya da birbaşa youdiditaz@gmail.com ünvanına yazın.";
          status.className = "show err";
        })
        .finally(function () {
          submitBtn.disabled = false;
          submitBtn.textContent = "Sorğunu göndər";
        });
    });
  }
});
/* Mobil menyu üslubları */
.mobile-nav {
  display: none;
  flex-direction: column;
  gap: 12px;
  background: var(--aur-bg-mid);
  padding: 15px 20px 20px;
  border-bottom: 1px solid rgba(185, 174, 214, 0.1);
}

.mobile-nav.open {
  display: flex !important;
}

.mobile-nav a {
  color: var(--aur-ink-dim);
  font-size: 14px;
}

.mobile-nav a:hover {
  color: var(--aur-spark-2);
}

@media (min-width: 850px) {
  .menu-btn {
    display: none;
  }
  .mobile-nav {
    display: none !important;
  }
}

