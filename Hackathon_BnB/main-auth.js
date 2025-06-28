// main-auth.js
import { signUp, signIn, signOut } from './auth.js';

// Signup form handler
document.getElementById('signupForm')?.addEventListener('submit', async (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const { error } = await signUp(email, password, name);
  if (error) {
    alert(`Signup failed: ${error.message}`);
  } else {
    alert('Check your email for confirmation!');
    window.location.href = './index1.html';
  }
});

// Login form handler
document.getElementById('loginForm')?.addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const { error } = await signIn(email, password);
  if (error) {
    alert(`Login failed: ${error.message}`);
  } else {
    window.location.href = './dashboard.html';
  }
});

// Logout button handler (if present)
document.getElementById('logoutBtn')?.addEventListener('click', async () => {
  await signOut();
  window.location.href = './index1.html';
});
