const StreamrClient = require('streamr-client')

const wallet = StreamrClient.generateEthereumAccount()

//console.log(wallet.privateKey)

const client = new StreamrClient({
    auth: {
        privateKey: '##################################################################'
		//privateKey: wallet.privateKey
    }
})



var firebase = require("firebase");
require("firebase/auth");
require("firebase/firestore");
require("firebase/database");

var firebaseConfig = {
    apiKey: "#######################################",
    authDomain: "######################",
    databaseURL: "#############################",
    projectId: "######",
    storageBucket: "##################",
    messagingSenderId: "############",
    appId: "#:#######################################",
    measurementId: "#-##########"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //firebase.analytics();

var db = firebase.database()



var query = firebase.database().ref("user_posture_storage").orderByKey();
query.once("value")
  .then(function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
		
      var key = childSnapshot.key;
	  
      var childData = childSnapshot.val();
	  var obj = {key: childData};
    client.publish('0xe583fceea836a0501dda9ca63e4377bd470804bc/Plicly', obj)
    

  });
});


