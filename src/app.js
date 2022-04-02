const doc = document;
const sleep = (ms) => {
    return new Promise(r => setTimeout(r, ms))
  }

let profanity = [
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

//___________________________________________________

const youTubeMenu = doc.getElementById('menu')

function showYouTubeMenu() {
    youTubeMenu.style.display = 'block'
}

function hideYouTubeMenu() {
    youTubeMenu.style.display = 'none'
}

//___________________________________________________

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

const sun = doc.getElementById('sun_a')
const moon = doc.getElementById('moon_a')
const sunMobile = doc.getElementById('sun_a_mobile')
const moonMobile = doc.getElementById('moon_a_mobile')

function toggleA() {
    doc.body.classList.toggle("darkmode")
    sun.style.display = 'none'
    moon.style.display = 'block'
}

function toggleB() {
    doc.body.classList.toggle("darkmode")
    sun.style.display = 'block'
    moon.style.display = 'none'
}

function toggleAM() {
    doc.body.classList.toggle("darkmode")
    sunMobile.style.display = 'none'
    moonMobile.style.display = 'block'
}

function toggleBM() {
    doc.body.classList.toggle("darkmode")
    sunMobile.style.display = 'block'
    moonMobile.style.display = 'none'
}

// _________________________________________________________

