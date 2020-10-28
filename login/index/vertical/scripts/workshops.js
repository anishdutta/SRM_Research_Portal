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
document.getElementById('Workshops').addEventListener('submit',submitwork);

// Submit form
function submitwork(){
    //Get values
    var Type =getInputVal('Type');
    var Subtype =getInputVal('Subtype');
    var Topic =getInputVal('Topic');
    var ConductedBy =getInputVal('ConductedBy');
    var Place =getInputVal('Place');
    var DandT =getInputVal('DandT');

    //pass all values
    saveMessage(Type,Subtype,Topic,ConductedBy,Place,DandT);

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



//Function to get form values
function getInputVal(id){
     return document.getElementById(id).value;
}

//Save messages to firebase
// all input fields
function saveMessage(Type,Subtype,Topic,ConductedBy,Place,DandT)  
{ 
    console.log(Type,Subtype,Topic,ConductedBy,Place,DandT);
    firebase.database().ref('workshops').push({    
        Type : Type,
        Subtype: Subtype,
        Topic: Topic,
        ConductedBy: ConductedBy,
        Place: Place,
        Date : DandT
    })
}  

