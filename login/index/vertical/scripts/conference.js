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
document.getElementById('Conference').addEventListener('submit',submitwork);

// Submit form
function submitwork(){
    //Get values
    var Type =document.getElementById('Type').value;
    var Author =document.getElementById('Authors').value;
    var Title =document.getElementById('Title').value;
    var Conference =document.getElementById('nameConf').value;
    var Place =document.getElementById('Place').value;
    var from =document.getElementById('fromD').value;
    var till =document.getElementById('toD').value;
    var proof =document.getElementById('proof').value;
    
    
    //pass all values
    saveMessage(Type,Author,Title,Conference,Place,from,till,proof);

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
function saveMessage(Type,Author,Title,Conference,Place,from,till,proof)  
{ 
    firebase.database().ref('conference').push({    
        Type : Type,
        "Number of Author":Author,
        Title:  Title,
        Conference: Conference,
        Place: Place,
        Start: from,
        End : till,
        "Proof": proof,
    })
}  

