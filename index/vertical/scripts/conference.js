// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var Type="";
var Author ="";
var Title ="";
var Conference ="";
var Place ="";
var From ="";
var till = "";
var proof = "";

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
     Type =document.getElementById('Type').value;
     Author =document.getElementById('Authors').value;
     Title =document.getElementById('Title').value;
     Conference =document.getElementById('nameConf').value;
     Place =document.getElementById('Place').value;
     From =document.getElementById('fromD').value;
     till =document.getElementById('toD').value;
     proof =document.getElementById('proof').value;
    
    
    //pass all values
    saveMessage(Type,Author,Title,Conference,Place,From,till,proof);

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
function saveMessage(Type,Author,Title,Conference,Place,From,till,proof)  
{ 
    if(Type!="" && Author!="" && Title!="" && Conference!="" && Place!="" && From!="" && till!="" && proof!=""){
        firebase.database().ref('conference').push({    
            Type : Type,
            NumberofAuthor:Author,
            Title:  Title,
            Conference: Conference,
            Place: Place,
            Start: From,
            End : till,
            Proof: proof,
        })
        var alertness = `<div class="col-sm-12">
            <div class="alert alert-success alert-dismissible fade show mt-4 px-4 mb-0 text-center" role="alert">
                <i class="uil uil-exclamation-octagon d-block display-4 mt-2 mb-3 text-danger"></i>
                <h5 class="text-success">Entry Created</h5>
            </div>
        </div>`;
    $('#bhokal').append(alertness);    

    }else{
        var alertness = `<div class="col-sm-12">
            <div class="alert alert-danger alert-dismissible fade show mt-4 px-4 mb-0 text-center" role="alert">
                <i class="uil uil-exclamation-octagon d-block display-4 mt-2 mb-3 text-danger"></i>
                <h5 class="text-danger">Kindly Fill all the Fields.</h5>
            </div>
        </div>`;
    $('#bhokal').append(alertness);
    }
}  

