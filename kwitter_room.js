// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyDb-4s6cW_VQv2-hreFqdDE1C2vpbTRrDc",
      authDomain: "project-93-5c82c.firebaseapp.com",
      databaseURL: "https://project-93-5c82c-default-rtdb.firebaseio.com",
      projectId: "project-93-5c82c",
      storageBucket: "project-93-5c82c.appspot.com",
      messagingSenderId: "839583447360",
      appId: "1:839583447360:web:e1e817ba20b5cbe875a2a5"
    };
    
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;
 localStorage.setItem("room_name", room_name);   
    window.location = "kwitter_page.html";
   firebase.database().ref("/").child(room_name).update({
  purpose : "adding room name"
   })};

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
  Room_names = childKey;
  //Start Code
  console.log("Room Name - " + Room_names);
 row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
 document.getElementById("output").innerHTML += row;
//End Code
});
});

}

getData();

function redirectToRoomName(name)
{
console.log(name);
localStorage.setItem("room_name", name);
window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location = "index.html";
}
