const firebaseConfig = {
    apiKey: "AIzaSyBhOBCzdOc-xbyfzz-cJxX_H_zvozK2dBo",
    authDomain: "contactus-17fbc.firebaseapp.com",
    databaseURL: "https://contactus-17fbc-default-rtdb.firebaseio.com",
    projectId: "contactus-17fbc",
    storageBucket: "contactus-17fbc.appspot.com",
    messagingSenderId: "569578034586",
    appId: "1:569578034586:web:2ae2a5267bcaa93f7a1623",
    measurementId: "G-MJ0KXBWDNE"
  };
  
  // initialize firebase
  firebase.initializeApp(firebaseConfig);
  
  // reference your database
  var contactFormDB = firebase.database().ref("contactForm");
  
  document.getElementById("contactForm").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    var name = getElementVal("name");
    var emailid = getElementVal("emailid");
    var msgContent = getElementVal("msgContent");
  
    saveMessages(name, emailid, msgContent);
  
    //   enable alert
    document.querySelector(".alert").style.display = "block";
  
    //   remove the alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
  
    //   reset the form
    document.getElementById("contactForm").reset();
  }
  
  const saveMessages = (name, emailid, msgContent) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
      name: name,
      emailid: emailid,
      msgContent: msgContent,
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };
  