const doc = document;
var profanity = [
    "ass", "shit", "fuck", "dick", "bitch"
]
var censor = ("*******")
  ;

profanity = new RegExp(profanity.join("|") ,"gi");

function clean(s){
    return s.replace(profanity
                    , function(m) { 
                         return censor.substring(0, m.length)
                      } 
                    );
}

//________________________________________________________

const userNameInput = doc.getElementById('userNameInput');
const signInDiv = doc.getElementById('username');
const signInNav = doc.getElementById('signin');
const signOutNav = doc.getElementById('signout');
const errorDiv = doc.getElementById('error');
const errp = doc.getElementById('errp');
  
function showSignInField() {
    signInDiv.style.display = 'block';
}

function signIn() {
    if (userNameInput.value == '') { 
        errp.textContent = "You have not entered anything as your username"
        errorDiv.style.display = 'block'
        signInDiv.style.display = 'none'
    return
    }

    if (userNameInput.value.length < 8) {
        errp.textContent = "Your username is under 8 characters"
        errorDiv.style.display = 'block'
        signInDiv.style.display = 'none'
        return
    }

    signInNav.textContent = clean(userNameInput.value);
    alert(`Signed in!\n\nClick on your username (${clean(userNameInput.value)}) to change it`)
    userNameInput.value = '';
    signInDiv.style.display = 'none';
    signOutNav.style.display = 'block';
    errorDiv.style.display = 'none'
}

function signOut() {
    signOutNav.style.display = 'none'
    signInNav.textContent = 'Sign In'
}

function closeError() {
    errorDiv.style.display = 'none'
}

//___________________________________________________

const youTubeMenu = doc.getElementById('menu')

function showYouTubeMenu() {
    youTubeMenu.style.display = 'block'
}

function hideYouTubeMenu() {
    youTubeMenu.style.display = 'none'
}