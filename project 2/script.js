    let music = document.querySelector("audio");
    let img = document.querySelector("img");
    let play = document.getElementById("play");
    console.log(play);

    let artist = document.getElementById("artist");
    let title = document.getElementById("title");
    let prev = document.getElementById("prev");
    let next = document.getElementById("next");

    
     
    const songs =[
        {
            name:"music-1",
        Image:"image-1",
        title:"ram siya ram",
        artist:"sachet tandon",
    },{
         name:"music-2",
        Image:"image-2",
        title:"mera safar",
        artist:"iqlipse nova",

    },{
         name:"music-3",
        Image:"image-3",
        title:"aashayein",
        artist:"kk()",
    }
]
     let isPlaying = false;
    // for play function
    const playMusic =  ()=> {
     isPlaying = true;
     music.play();
     play.classList.replace("fa-play","fa-pause");
     img.classList.add("anime");
    };


    // for pause function
    const pauseMusic =  ()=>{
     isPlaying = false;
     music.pause();
     play.classList.replace("fa-pause","fa-play");
     img.classList.remove("anime");
    };

    play.addEventListener("click", ()=>{
       if (isPlaying) {
       pauseMusic();
       } else {
        playMusic();
       }
    });

    //  changing the music data

    const loadSong = (songs) =>{
        title.textContent = songs.title;
        artist.textContent = songs.artist;
        music.src = "music/" + songs.name +".mp3";
        img.src = "images/" + songs.Image +".jpg";
    }
    
    songIndex = 1;
    // loadSong(song[2]);

    const nextSong = () =>{
        songIndex = (songIndex + 1) % songs.length;
        loadSong(songs[songIndex])
        playMusic();
    };

    const prevSong = () =>{
        songIndex = (songIndex - 1 + songs.length) % songs.length;
        loadSong(songs[songIndex])
        playMusic();
    };

    next.addEventListener("click", nextSong);
    prev.addEventListener("click", prevSong);

