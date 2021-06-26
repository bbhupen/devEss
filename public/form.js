form = document.getElementById("form")
form.addEventListener('submit', submitForm);
var imgName, imgUrl;
var files = [];
var reader = new FileReader();




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
var fireStorage = firebase.storage()

//Submit Form

document.getElementById("select").onclick = function (e) {
    var input = document.createElement('input');
    input.type = 'file';

    input.onchange = e => {
        files = e.target.files;
        reader = new FileReader();
        reader.onload = function () {
            document.getElementById("myimg").src = reader.result;
        }
        reader.readAsDataURL(files[0])
    }
    input.click();
}


function submitForm(e) {
    e.preventDefault();
    var email = getInputVal("email");
    var title = getInputVal("title");
    var link = getInputVal("link");
    var desc = getInputVal("desc");
    var category = getInputVal("category")
    var image = getInputVal("namebox")

    

    console.log(email)

    //Text Uploads
    // saveSubmission(email, title, link, desc, category, image);

    uploadImage(email, title, link, desc, category, image)
    document.querySelector('.alert').style.display = 'block'

    setTimeout(function () {
        document.querySelector('.alert').style.display = 'none' 
    }, 3000)

    console.log("Success fully contributed")


    //Clear Form
    form.reset()
}



function uploadImage(email, title, link, desc, category, image) {
    var uploadTask = fireStorage.ref(category+'/'+image+".png").put
    (files[0])

    uploadTask.on('state_changed', function (snapshot) {
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        // document.getElementById('UpProgress').innerHTML = 'Upload' + progress + '%';
    },
    
        function (error) {
        alert('error')
        },

        function () {
            uploadTask.snapshot.ref.getDownloadURL().then(function (url) {
                image = url;

                var newSubmitRef = submitRef.ref(category).push();
                newSubmitRef.set({
                    email: email,
                    title: title,
                    link: link,
                    desc: desc,
                    image: url
                })
                console.log('image added successfully')
            })
        })
    
    return imgUrl
}



function saveSubmission(email, title, link, desc, category, image) {
    var newSubmitRef = submitRef.ref(category).push();
    newSubmitRef.set({
        email: email,
        title: title,
        link: link,
        desc: desc,
        image: image
    })
}

function getInputVal(id) {
    return document.getElementById(id).value;
}

