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

// Retrieve new posts as they are added to our database
function getdata(){

var playersRef = firebase.database().ref("conference/");
    playersRef.on("child_added", function(data) {
    var mokData = [data.val()];
    console.log(mokData);
    $.each(mokData, function (i) {
        var templateString = '<div class="card"><div class="card-head"><img src="./assets/images/6316-removebg-preview.png" width="150px"><h2>'+mokData[i].Conference+'<br><span>'+mokData[i].Type+'</span></h2></div><div class="card-main"><h4><p>Start :'+mokData[i].Start+'</p>End:'+mokData[i].End+'<br>Place:'+mokData[i].Place+'<br></h4></div><a class="linkbtn" href="'+mokData[i].Proof+'" target = "_blank"> <button  class="downloadbtn"><i class="fa fa-download"></i> &nbspDownload</button> </a></div>';
        $('#test12').append(templateString);
        })
    });
}

getdata();