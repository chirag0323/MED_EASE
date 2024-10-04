const firebaseConfig = {
    apiKey: "AIzaSyCYEOJxItISzQjGTZ-u50HpGIxtzsTp1Wg",
    authDomain: "appointments-23607.firebaseapp.com",
    databaseURL: "https://appointments-23607-default-rtdb.firebaseio.com",
    projectId: "appointments-23607",
    storageBucket: "appointments-23607.appspot.com",
    messagingSenderId: "415359980707",
    appId: "1:415359980707:web:bc4d3ad0affaa967cc9b16",
    measurementId: "G-MTFM7Q3VC8"
  };
    
    // initialize firebase
    firebase.initializeApp(firebaseConfig);
    
    // reference your database
    var contactFormDB = firebase.database().ref("Appointments");
    
    document.getElementById("Appointments").addEventListener("submit", submitForm);
    
    function submitForm(e) {
      e.preventDefault();
    
      var name = getElementVal("name");
      var age = getElementVal("age");
      var email = getElementVal("email");
      var Date = getElementVal("Date");
      
      var Time = getElementVal("Time");
    
      saveMessages(name, age, email ,Date, Time);
    
      //   enable alert
      document.querySelector(".alert").style.display = "block";
    
      //   remove the alert
      setTimeout(() => {
        document.querySelector(".alert").style.display = "none";
      }, 3000);
    
      //   reset the form
      document.getElementById("DutyLeave").reset();
    }
    
    const saveMessages = (name, age, email, Date, Time) => {
      var newContactForm = contactFormDB.push();
    
      newContactForm.set({
        name: name,
        age: age,
        email: email,
        Date:Date,
        Time:Time
      });
    };
    
    const getElementVal = (id) => {
      return document.getElementById(id).value;
    };
    