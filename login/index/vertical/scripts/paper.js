
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
        var storageRef = firebase.storage().ref('Paper');
    // Get the file from DOM
        var brochure = document.getElementById("paper").files[0];
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
var storageRef = storage.ref();
        
        $('#List').find('tbody').html('');
        
        // var i=0;

        storageRef.child('Events/').listAll().then(function(result){
            result.items.forEach(function(imageRef){
                
                // i++;
                displayImage(imageRef);
                //console.log("Image Reference "+ imageRef.toString());
            });
        });
        function displayImage(row,images){
            images.getDownloadURL().then(function(url){
                console.log(url);
                paperurl = url;
        
                let new_html = ' ';
                new_html += '<tr>';
                new_html += '<td>';
                new_html += row;
                new_html += '</tr>';
                new_html += '<td>';
                new_html += '<img src ="'+url+'"width="100px" style="float:right">';
                new_html += '</td>';
                new_html += '</tr>';
                $('#List').find('tbody').append(new_html);
        
        
            });
        }


//Save messages to firebase
// all input fields
function saveMessage(Title,Publisher,Volume,Page,date,Type,snip,impact,name,email,url)  
{ 
    console.log(paperurl);
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
        Paper: paperurl
    })
}  
