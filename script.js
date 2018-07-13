function nameFormat() {
    alert("this is functioning"); 
  
      let firstName = document.getElementById('firstName').value;
      let lastName = document.getElementById('lastName').value; 
      console.log(firstName,lastName);
      let nameRegex = /^[A-Z][a-z]{3,}$/;
  
      if(firstName.match(nameRegex)) {
      alert('Yay! First Name inputs were all correct!');
  console.log(true); 
  } else {
      alert('Oh no! Thats an invalid First Name format!');
      console.log(false);
  }
  if(lastName.match(nameRegex)) {
      alert('Yay! Last Name inputs were all correct!');
  console.log(true); 
  } else {
      alert('Oh no! Thats an invalid Last Name format!');
      console.log(false);
  }
  
  }