//var firebaseConfig = { 
      //apiKey: "AIzaSyDNLButkPXSY55QE4RT_b-O5hWHO5peQD0",
      //authDomain: "kwitter-28e1b.firebaseapp.com",
      //databaseURL: "https://kwitter-28e1b-default-rtdb.asia-southeast1.firebasedatabase.app",
      //projectId: "kwitter-28e1b",
      //storageBucket: "kwitter-28e1b.appspot.com",
      //messagingSenderId: "375130589396",
      //appId: "1:375130589396:web:69a2dbcbedf5225bc61341",
      //measurementId: "G-K5T2BY4FBN"
  //  };
   // firebase.initializeApp(firebaseConfig);

   var firebaseConfig = { apiKey: "AIzaSyCKrjl8A3zY_2o5LWPoscEkOj4Hk02V7SA", authDomain: "kwitter-4a17a.firebaseapp.com", databaseURL: "https://kwitter-4a17a-default-rtdb.firebaseio.com", projectId: "kwitter-4a17a", storageBucket: "kwitter-4a17a.appspot.com", messagingSenderId: "142879599603", appId: "1:142879599603:web:8973790e57dc7783e80086", measurementId: "G-SQGCK3B4EK" }; 
    firebase.initializeApp(firebaseConfig);
  
//ADD YOUR FIREBASE LINKS HERE
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name;

function add_room(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child("room_name").update({purpose:"adding room"});
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("room name" + Room_names);
row = "<div class = 'room_name' id = "+Room_names + " onclick='redirecttoroom(this.id)'> #"+Room_names + "</div> <hr>";
document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirecttoroom(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}