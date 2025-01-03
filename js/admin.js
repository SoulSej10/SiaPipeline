import { auth, db } from "./firebase.js";
import { signOut } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";

document.getElementById("logoutBtn").addEventListener("click", async () => {
  await signOut(auth);
  window.location.href = "index.html";
});

const userList = document.getElementById("userList");

const usersSnapshot = await getDocs(collection(db, "users"));
usersSnapshot.forEach((doc) => {
  const user = doc.data();
  userList.innerHTML += `<p>${user.email}</p>`;
});
