// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var Type="";
var Subtype="";
var Topic="";
var ConductedBy="";
var Place="";
var DandT="";

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

src="assets/libs/sweetalert2/sweetalert2.min.js";

//<!-- Sweet alert init js-->
    src="assets/js/pages/sweet-alerts.init.js";
    src="assets/libs/simplebar/simplebar.min.js";
    src="assets/libs/node-waves/waves.min.js";
    src="assets/libs/waypoints/lib/jquery.waypo;ints.min.js";
    src="assets/libs/jquery.counterup/jquery.co;unterup.min.js";

//listen for form submit
document.getElementById('Workshops').addEventListener('submit',submitwork);

// Submit form
function submitwork(){
    //Get values
    Type =getInputVal('Type');
    Subtype =getInputVal('Subtype');
    Topic =getInputVal('Topic');
    ConductedBy =getInputVal('ConductedBy');
    Place =getInputVal('Place');
    DandT =getInputVal('DandT');

    //pass all values
    saveMessage(Type,Subtype,Topic,ConductedBy,Place,DandT);  
}



//Function to get form values
function getInputVal(id){
     return document.getElementById(id).value;
}

//Save messages to firebase
// all input fields
function saveMessage(Type,Subtype,Topic,ConductedBy,Place,DandT)  
{ 
    if(Type != "" && Subtype != "" && Topic != "" &&  ConductedBy!= "" && Place !="" && DandT !="" ){
            firebase.database().ref('workshops').push({    
                Type : Type,
                Subtype: Subtype,
                Topic: Topic,
                ConductedBy: ConductedBy,
                Place: Place,
                Date : DandT
        });
        var alertness = `<div class="col-sm-12">
            <div class="alert alert-success alert-dismissible fade show mt-4 px-4 mb-0 text-center" role="alert">
                <i class="uil uil-exclamation-octagon d-block display-4 mt-2 mb-3 text-danger"></i>
                <h5 class="text-success">Entry Created</h5>
            </div>
        </div>`;
    $('#bhokal').append(alertness);       

    }
    else{
        var alertness = `<div class="col-sm-12">
            <div class="alert alert-danger alert-dismissible fade show mt-4 px-4 mb-0 text-center" role="alert">
                <i class="uil uil-exclamation-octagon d-block display-4 mt-2 mb-3 text-danger"></i>
                <h5 class="text-danger">Kindly Fill all the Fields.</h5>
            </div>
        </div>`;
    $('#bhokal').append(alertness);
   }
    
}  
