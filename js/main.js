import { auth, db } from "./firebase.js";
import { signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";
import { doc, getDoc } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";

const userName = document.getElementById("userName");
const logoutBtn = document.getElementById("logoutBtn");
const activeProjects = document.getElementById("activeProjects");
const openIssues = document.getElementById("openIssues");
const recentCommits = document.getElementById("recentCommits");

logoutBtn.addEventListener("click", async () => {
  await signOut(auth);
  window.location.href = "index.html";
});

onAuthStateChanged(auth, async (user) => {
  if (user) {
    const userDoc = await getDoc(doc(db, "users", user.uid));
    userName.textContent = userDoc.data().name || "User";
    fetchDashboardData(user.uid);
  } else {
    window.location.href = "index.html";
  }
});

async function fetchDashboardData(userId) {
  try {
    const dashboardDoc = await getDoc(doc(db, "dashboard", userId));
    const data = dashboardDoc.data();
    if (data) {
      activeProjects.textContent = data.activeProjects || 0;
      openIssues.textContent = data.openIssues || 0;
      recentCommits.textContent = data.recentCommits || 0;
    }
  } catch (error) {
    console.error("Error fetching dashboard data:", error);
  }
}

// Add smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

