
var firebaseConfig = {
  apiKey: "AIzaSyCijplm6USl0XefZjg1Ir2khSgpBkgqoF0",
  authDomain: "chatter-birds.firebaseapp.com",
  databaseURL: "https://chatter-birds-default-rtdb.firebaseio.com",
  projectId: "chatter-birds",
  storageBucket: "chatter-birds.appspot.com",
  messagingSenderId: "252607876240",
  appId: "1:252607876240:web:57be8396fe33859b1b5c15",
  measurementId: "G-W8VR2QW43L"
};

var app = initializeApp(firebaseConfig);
    
  user_name = localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML = "welcome" + user_name + "!";
  function addroom(){
        room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
          purpose:"adding room name"
    });
    localStorage.setItem("room_name", room_name);
window.location = "kwitterpage.html";



  }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
console.log("room name: "+Room_names);
row = "<div class = 'room_name'  id ="+Room_names+"onclick = 'redirectToroomname(this.id)'>#"+ Room_names +"</div><hr";
document.getElementById("output").innerHTML +=row;
    //End code
    });});}
getData();
function redirectToroomname(name)
{
console.log(name);
localStorage.setItem("roomname",name);
window.location = "kwitterpage.html";
}

function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}
