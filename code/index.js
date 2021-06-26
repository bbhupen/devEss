root = document.getElementById("root")


// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyC4TiUJRDDT1S68BDLHZkii2_efOk8tVMI",
    authDomain: "devess-b79b7.firebaseapp.com",
    projectId: "devess-b79b7",
    storageBucket: "devess-b79b7.appspot.com",
    messagingSenderId: "295703687700",
    appId: "1:295703687700:web:1c4ea7ef6b2e3762f3ad01"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var getDataRef = firebase.database()




// var imageSRC = getInputVal("imgSRC");
// var title = getInputVal("title");
// var link = getInputVal("link");
// var desc = getInputVal("desc");





document.getElementById('category').addEventListener('change', function () {
    var category = getInputVal("category")
    getDataRef.ref(category).once("value", function (snapshot) {
        snapshot.forEach(function (element) {
            document.querySelector('#root').innerHTML += `
        <div class="card mb-3">
            <img class="card-img-top" src="{src}" id="imageSRC">
            <div class="card-body">
                <h5 class="card-title" id="title">${element.val().title}</h5>
                <p class="card-text" id="desc">${element.val().desc}</p>
                <a href="${element.val().link}"><button class="btn btn-dark" >Check it
                        out</button></a>
            </div>
        </div>`
        })
    })

    clearBox("root")
});


function clearBox(elementID) {
    document.getElementById(elementID).innerHTML = "";
}



function getInputVal(id) {
    return document.getElementById(id).value;
}