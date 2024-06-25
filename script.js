console.log('Let write Javascript');


async function getSongs()
{
  
  let a = await fetch("http://127.0.0.1:6007/songs/")
  let response = await a.text();
  // console.log(response)
  let div = document.createElement("div")
  div.innerHTML=response;
  let as = div.getElementsByTagName("a")
  let songs = []
  for (let index= 0; index < as.length; index++)
  {
    const element = as[index];
    if(element.href.endsWith(".mp3")){
      songs.push(element.href.split("/songs/")[1])
    
    }}
    console.log(songs)
  return songs
}

async function main()
{
  let currentSong;
  // get the list of all songs in the  playlist
  let songs = await getSongs()
  console.log(songs)
  
  let songUL = document.querySelector(".songList").getElementsByTagName("ul")[0]
  for(const song  of songs ) {
   songUL.innerHTML = songUL.innerHTML + `<li> <div class="info">
   <div>${song.replaceAll("%20"," ").replaceAll("%5"," ").replaceAll("%2"," ")}</div>
   <div>alfaiz</div>
  </div>       
  <img class="invert" src="play.svg" alt="">       
 </li>  
   </li>` ;
  }

  
  //play  the first song n
  var audio = new Audio(songs[0]);
  audio.play(); 
  
  audio.addEventListener("loadeddata", () => {
    let duration = audio.duration;
    console.log(audio.duration,audio.currentSrc , audio.currentTime)
    the duration variable now holds the duration (in seconds) of the audio clip
  }
  Attach an event listerner to each song
  Array.from(document.querySelector("'songList").getElementsByTagName("li")).forEach(e=>{
    console.log(e)
  })
)
;}

main()
  