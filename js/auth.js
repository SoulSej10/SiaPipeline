import { auth } from "./firebase.js";
import {
  signInWithEmailAndPassword,
  sendSignInLinkToEmail,
  isSignInWithEmailLink,
  signInWithEmailLink,
} from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";

// Firebase config (make sure it's set up)
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const otpField = document.getElementById("otp");
const statusText = document.getElementById("status");

document.getElementById("loginBtn").addEventListener("click", async () => {
  const email = emailInput.value;
  const password = passwordInput.value;

  try {
    await signInWithEmailAndPassword(auth, email, password);
    document.getElementById("status").textContent = "Login successful!";
    window.location.href = "landing.html";
  } catch (error) {
    document.getElementById("status").textContent = error.message;
  }
});

document.getElementById("registerBtn").addEventListener("click", async () => {
  const email = emailInput.value;
  const password = passwordInput.value;

  try {
    // Send OTP verification link
    const actionCodeSettings = {
      // Update this to use your actual GitHub Pages URL
      url: 'https://soulsej10.github.io/SiaPipeline/finishSignUp?email=' + email,
      handleCodeInApp: true,
    };

    // Enable Email/Password Authentication for registration
    await sendSignInLinkToEmail(auth, email, actionCodeSettings);
    window.localStorage.setItem('emailForSignIn', email);  // Store email for later use

    otpField.style.display = "block"; // Show OTP field for user to enter the code
    document.getElementById("status").textContent = "OTP sent to your email!";
    document.getElementById("registerBtn").style.display = "none";
    document.getElementById("verifyBtn").style.display = "block"; // Show verify button
  } catch (error) {
    document.getElementById("status").textContent = error.message;
  }
});

// Verify OTP when user enters it
document.getElementById("verifyBtn").addEventListener("click", async () => {
  const email = window.localStorage.getItem('emailForSignIn');
  const otp = otpField.value;

  if (isSignInWithEmailLink(auth, otp)) {
    try {
      await signInWithEmailLink(auth, email, otp);
      window.localStorage.removeItem('emailForSignIn'); // Clear the saved email

      // Optionally, you can now update user info here
      document.getElementById("status").textContent = "OTP Verified successfully!";
      window.location.href = "landing.html"; // Redirect user to landing page after verification
    } catch (error) {
      document.getElementById("status").textContent = error.message;
    }
  }
});
