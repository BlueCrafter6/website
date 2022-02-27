const doc = document;
var profanity = [
    "ass", "shit", "fuck", "dick", "bitch", "kant"
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
    return
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

//___________________________________________________

const learnMoreCard = doc.getElementById('learnmore')

function showLMCard() {
    learnMoreCard.style.display = 'block'
}

function hideLMCard() {
    learnMoreCard.style.display = 'none'
}

//____________________________________________________

function counter(id, start, end, duration) {
    let obj = document.getElementById(id),
     current = start,
     range = end - start,
     increment = end > start ? 1 : -1,
     step = Math.abs(Math.floor(duration / range)),
     timer = setInterval(() => {
      current += increment;
      obj.textContent = current;
      if (current == end) {
       clearInterval(timer);
      }
     }, step);
   }

const APIKey = "AIzaSyCdx9GPicMygoA5NqNETPNFQDYUa0NGLaU";
const youTubeChannelId = "UCukZHqeKLdBfdyEPgZ4OcBA";
const outputElement = doc.querySelector('#sub-count');
const outputElement1 = doc.querySelector('#video-count')
const outputElement2 = doc.querySelector('#view-count')

async function getYouTubeSubs() {
    const getData = await axios.get(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${youTubeChannelId}&key=${APIKey}`)

    const subCount = getData.data.items[0].statistics.subscriberCount

    outputElement.textContent = counter("sub-count", 0, subCount, 500)
}

async function getYouTubeVids() {
    const getData = await axios.get(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${youTubeChannelId}&key=${APIKey}`)

    const vidCount = getData.data.items[0].statistics.videoCount
    

    outputElement1.textContent = counter("video-count", 0, vidCount, 500)
}

async function getChannelViews() {
    const getData = await axios.get(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${youTubeChannelId}&key=${APIKey}`)

    const viewCount = getData.data.items[0].statistics.viewCount
    

    outputElement2.textContent = counter("view-count", 0, viewCount, 200)
}

getYouTubeSubs() && getYouTubeVids() && getChannelViews();

/*
hiddenSubscriberCount: false
subscriberCount: "41"
videoCount: "38"
viewCount: "1577"
*/

//__________________________________________________________

const sun = doc.querySelector('#suna')
const moon = doc.querySelector('#moona')

function toggleA() {
    doc.body.classList.toggle("lightmode")
    sun.style.display = 'none'
    moon.style.display = 'block'
}

function toggleB() {
    doc.body.classList.toggle("lightmode")
    sun.style.display = 'block'
    moon.style.display = 'none'
}

// _________________________________________________________
