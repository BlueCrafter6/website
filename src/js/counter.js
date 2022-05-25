const sleep = (ms) => {
    return new Promise(r => setTimeout(r, ms))
}

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
const outputElement = document.getElementById('sub-count');
const outputElement1 = document.getElementById('video-count')
const outputElement2 = document.getElementById('view-count')

async function getYouTubeSubs() {

    const getData = await axios.get(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${youTubeChannelId}&key=${APIKey}`)

    const subCount = getData.data.items[0].statistics.subscriberCount

    await sleep(100)

    outputElement.textContent = counter("sub-count", 0, subCount, 500)
}

async function getYouTubeVids() {
    const getData = await axios.get(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${youTubeChannelId}&key=${APIKey}`)

    const vidCount = getData.data.items[0].statistics.videoCount
    
    await sleep(100)

    outputElement1.textContent = counter("video-count", 0, vidCount, 500)
}

async function getChannelViews() {
    const getData = await axios.get(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${youTubeChannelId}&key=${APIKey}`)

    const viewCount = getData.data.items[0].statistics.viewCount
    
    await sleep(100)

    outputElement2.textContent = counter("view-count", 0, viewCount, 0)
}

getYouTubeSubs() 
getYouTubeVids()
getChannelViews()