//url= https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=100&q=kgf%202&key=[YOUR_API_KEY]

const api= 'AIzaSyD_163wyLI9r41InWrdPJcX0abejxDBlwU';

//api2=AIzaSyAW6DHQ9sUlTPpZsn4lU5hTq-qLsjYSyiU

const searchvideos= async()=>{
    try{
        const q = document.getElementById('query').value;

        const res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=100&q=${q}%202&key=${api}`);

        const data = await res.json()
        // console.log(data.items);
        append(data.items);

    }catch(err){
        console.log(err);

    }
};

const append= (videos)=>{
    let show_video = document.getElementById('show_video')

    show_video.innerHTML= null;

    videos.forEach(({id:{videoId},snippet:{title} }) => {

        let div = document.createElement('div');
        
        let iframe=document.createElement('iframe');

        iframe.src= `https://www.youtube.com/embed/${videoId}`;

        iframe.width= '100%';
        iframe.height='100%';
        iframe.allow='fullscreen';

        let name =document.createElement('h5');

        name.innerText= title;

        div.append(iframe,name)

        let data={
            title,
            videoId
        };

        div.onclick=()=>
        showVideo(data);

        show_video.append(div)

    });
}


const showVideo=(x)=>{
    window.location.href='video.html'
    localStorage.setItem('video', JSON.stringify(x));

}