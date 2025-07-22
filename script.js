// script.js
document.getElementById("ageForm").addEventListener("submit", function(e) {
    e.preventDefault();
    
    const dob = document.getElementById("dob").value;
    if (!dob) {
      alert("Please enter your date of birth");
      return;
    }
  
    const birthDate = new Date(dob);
    const today = new Date();
  
    if (birthDate > today) {
      alert("Birth date can't be in the future");
      return;
    }
  
    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();
  
    if (days < 0) {
      months--;
      days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }
  
    if (months < 0) {
      years--;
      months += 12;
    }
    result.style.display = "block";
    result.innerHTML.style = years,months,days 
    document.getElementById("result").innerHTML = 
      `<p>You are <span class="highlight">${years}</span> years, 
        <span class="highlight">${months}</span> months, and 
        <span class="highlight">${days}</span> days old.</p>`;
  });
  