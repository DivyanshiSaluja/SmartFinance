document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('userDetailsForm');
  const successMessage = document.getElementById('successMessage');

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Form validation
    if (!validateForm()) return;
    
    // Collect form data
    const formData = {
      email: document.getElementById('email').value,
      name: document.getElementById('name').value,
      age: document.getElementById('age').value,
      role: document.getElementById('role').value,
      income: document.getElementById('income').value,
      hasHealthInsurance: document.getElementById('hasHealthInsurance').value,
      hasEducationLoan: document.getElementById('hasEducationLoan').value,
      hasPPF: document.getElementById('hasPPF').value,
      hasNPS: document.getElementById('hasNPS').value,
      hasLifeInsurance: document.getElementById('hasLifeInsurance').value,
      hasFD: document.getElementById('hasFD').value
    };
    
    // Here you would typically send data to your backend
    console.log('Form data:', formData);
    
    // Show success message
    successMessage.style.display = 'block';
    form.reset();
    
    // Hide form and show success message
    document.querySelector('.form-container').style.opacity = '0.5';
    setTimeout(() => {
      successMessage.scrollIntoView({ behavior: 'smooth' });
    }, 300);
  });

  function validateForm() {
    let isValid = true;
    const inputs = form.querySelectorAll('input, select');
    
    inputs.forEach(input => {
      if (!input.value.trim()) {
        isValid = false;
        input.style.borderColor = '#e53e3e';
        setTimeout(() => {
          input.style.borderColor = '#cbd5e0';
        }, 2000);
      }
    });
    
    // Validate email format
    const email = document.getElementById('email');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value)) {
      isValid = false;
      email.style.borderColor = '#e53e3e';
      setTimeout(() => {
        email.style.borderColor = '#cbd5e0';
      }, 2000);
    }
    
    return isValid;
  }
});

// Protect Form Submission
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  if (form) {
    form.addEventListener('submit', (e) => {
      if (!isUserLoggedIn()) {
        e.preventDefault();
        alert('Please log in to submit the form');
        window.location.href = '../login/login.html';
      }
    });
  }
});
