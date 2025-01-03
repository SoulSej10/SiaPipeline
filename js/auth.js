import { auth } from "./firebase.js";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";

document.getElementById("loginBtn").addEventListener("click", async () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    await signInWithEmailAndPassword(auth, email, password);
    document.getElementById("status").textContent = "Login successful!";
    window.location.href = "landing.html";
  } catch (error) {
    document.getElementById("status").textContent = error.message;
  }
});

document.getElementById("registerBtn").addEventListener("click", async () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    await createUserWithEmailAndPassword(auth, email, password);
    document.getElementById("status").textContent = "Registration successful!";
    window.location.href = "landing.html";
  } catch (error) {
    document.getElementById("status").textContent = error.message;
  }
});
