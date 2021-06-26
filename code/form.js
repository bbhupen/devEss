form = document.getElementById("form")
form.addEventListener('submit', submitForm);


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

var submitRef = firebase.database()

//Submit Form

function submitForm(e) {
    e.preventDefault();
    var email = getInputVal("email");
    var title = getInputVal("title");
    var link = getInputVal("link");
    var desc = getInputVal("desc");
    var category = getInputVal("category")

    console.log(email)

    saveSubmission(email, title, link, desc, category);

    document.querySelector('.alert').style.display = 'block'

    setTimeout(function () {
        document.querySelector('.alert').style.display = 'none' 
    }, 3000)

    console.log("Success fully contributed")


    //Clear Form
    form.reset()
}



function saveSubmission(email, title, link, desc, category) {
    var newSubmitRef = submitRef.ref(category).push();
    newSubmitRef.set({
        email: email, 
        title: title,
        link: link,
        desc: desc
    })
}

function getInputVal(id) {
    return document.getElementById(id).value;
}