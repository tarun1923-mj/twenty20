const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

async function register() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  if (password !== confirmPassword) {
    msg.innerText = "passwords do not match";
    return;
  }

  if (!passwordRegex.test(password)) {
    msg.innerText =
      "password must be 8+ chars with uppercase, lowercase and number";
    return;
  }

  const res = await fetch("/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password })
  });

  const data = await res.json();

  if (data.error) {
    msg.innerText = data.error;
  } else {
    window.location.href = "/";
  }
}

async function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const res = await fetch("/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password })
  });

  const data = await res.json();

  if (data.error) {
    msg.innerText = data.error;
  } else {
    localStorage.setItem("email", data.email);
    window.location.href = "/portfolio";
  }
}
