// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

var paperurl = "";
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
function uploadFile(){
    // Created a Storage Reference with root dir
        var storageRef = firebase.storage().ref('events');
    // Get the file from DOM
        var brochure = document.getElementById("photos").files[0];
    //dynamically set reference to the file name
        var thisRef = storageRef.child(brochure.name);
    //put request upload file to firebase storage
    thisRef.put(brochure)
.then(snapshot => {
   return snapshot.ref.getDownloadURL();   // Will return a promise with the download link
})

.then(downloadURL => {
    alert('Uploaded');
  console.log(`Successfully uploaded file and got download link - ${downloadURL}`);
  paperurl = downloadURL;
  return downloadURL;
})

.catch(error => {
  // Use to signal error if something goes wrong.
  console.log(`Failed to upload file and get link - ${error}`);
});

    }

//listen for form submit
document.getElementById('Event').addEventListener('submit',submitwork);

// Submit form
function submitwork(){
    //Get values
    var Type =getInputVal('Type');
    var Title =getInputVal('Title');
    var Role =getInputVal('Role');
    var DandT =getInputVal('DandT');
    var internals =getInputVal('internals');
    var externals =getInputVal('externals');
    var brochure =getInputVal('brochure');
    var photos =getInputVal('photos');
    
    
    //pass all values
    saveMessage(Type,Title,Role,DandT,internals,externals,brochure,photos);

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
function saveMessage(Type,Title,Role,DandT,internals,externals,brochure,photos)  
{ 
    console.log(Type,Title,Role,DandT,internals,externals,brochure,photos);
    firebase.database().ref('events').push({    
        Type : Type,
        Title:  Title,
        Role: Role,
        DateTime: DandT,
        NumberofInternals: internals,
        NumberofExternals : externals,
        Brochure: brochure,
        Photos: paperurl
    })
}  

