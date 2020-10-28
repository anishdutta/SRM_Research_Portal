// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


var firebaseConfig = {
    apiKey: "AIzaSyDCE0BDSOZS-mKoUApeYqUw_x52It6wqWI",
    authDomain: "srm-research-portal-3ef39.firebaseapp.com",
    databaseURL: "https://srm-research-portal-3ef39.firebaseio.com",
    projectId: "srm-research-portal-3ef39",
    storageBucket: "srm-research-portal-3ef39.appspot.com",
    messagingSenderId: "338025397922",
    appId: "1:338025397922:web:7e43bb0bc83e3de213a1fb",
    measurementId: "G-9WCQV8696P"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
//Reference messages collection
//var workshop =firebase.database().ref('Workshop');


//listen for form submit
document.getElementById('Paper').addEventListener('submit',submitwork);

// Submit form
function submitwork(){
    //Get values
    var Title =document.getElementById('Title').value;
    var Publisher =document.getElementById('Publisher').value;
    var Volume =document.getElementById('Volume').value;
    var Page =document.getElementById('Page').value;
    var date =document.getElementById('date').value;
    var Type =document.getElementById('Type').value;
    var snip =document.getElementById('snip').value;
    var impact =document.getElementById('impact').value;
    var name =document.getElementById('name').value;
    var email =document.getElementById('email').value;
    var paper =document.getElementById('paper').value;
    
//pass all values
    saveMessage(Title,Publisher,Volume,Page,date,Type,snip,impact,name,email,paper);

    //Show Alert
    //add div with class of Alert
    //Css -Add display to none
    // document.querySelector('.alert').getElementsByClassName.display ='block';

    // //Hide Alert after 3s
    // setTimeout(function(){
    //     document.querySelector('.alert').getElementsByClassName.display = 'none';
    // },3000);

    //clear form
    //document.getElementById('Workshops').reset();
}


//Save messages to firebase
// all input fields
function saveMessage(Title,Publisher,Volume,Page,date,Type,snip,impact,name,email,paper)  
{ 
    firebase.database().ref('PaperPublication').push({    
        Title : Title,
        PublisherName: Publisher,
        Volume:  Volume,
        Page: Page,
        date: date,
        Type: Type,
        Snip : snip,
        Impact: impact,
        Name: name,
        Email: email,
        Paper: paper
    })
}  

