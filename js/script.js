let count = 0;
const mainElement = document.querySelector("div.main>img");
const url = [
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTovIFlhdEsXx3Y_f6zPoYlqS6wskPzAjBXUg&usqp=CAU",
  "https://kstyle-mag.com/wp-content/uploads/2020/04/97fae20b1c5c4658b967528964ac02c7.jpg",
 "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4O1pObuU69MG-8Zr7TnfzbcAT62nbKfEEmw&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE14OCuYnzoM8tzMR30INIZiUD5V356CQyow&usqp=CAU",
"https://c799eb2b0cad47596bf7b1e050e83426.cdnext.stream.ne.jp/img/article/000/290/748/f7e7d921b93802eddd876412a389093620210618125253854.jpg",
"https://www.crank-in.net/img/db/227024085109312_650.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYTChHr7Jm_VKGUPPsBnjku-hYOo2Sd12BNQ&usqp=CAU",
 "https://www.sanspo.com/geino/images/20210509/geo21050908000005-p1.jpg",
  "http://www.shima-girl.com/newsite/wp-content/uploads/2015/04/038.jpg",
"https://ogre.natalie.mu/artist/48791/20200519/inouemao_art20200218.jpg?imwidth=640&imdensity=1",
  "https://contents.oricon.co.jp/cdn-cgi/image/width=750,quality=85,format=auto/upimg/news/20200127/2153710_202001270055067001580112348e.jpg",
  "https://contents.oricon.co.jp/cdn-cgi/image/width=750,quality=85,format=auto/upimg/news/20211210/2217110_202112100447796001639124403e.jpg",
  "https://www.ken-on.co.jp/wp-content/uploads/imgactf_yamaguchi_l.jpg"
];

function left() {
  // console.log(count);
  count--;
  if (count <= 0) {
    count = url.length-1;
  }
  mainElement.setAttribute('src', url[count]);
}
function right() {
  count++;
  if (count >= url.length) {
    count = 0;
  }
  mainElement.setAttribute('src', url[count]);
}

let timer;
let nowPlaying = false;

function autoPlay() {
  right();
  timer = setTimeout(function() {
    autoPlay();
  }, 2000);
}

function play() {
  if (nowPlaying) {
    return;
  }
  nowPlaying = true;
  autoPlay();
}

function stop() {
  clearTimeout(timer);
  nowPlaying = false;
}

function reset() {
  stop();
  mainElement.setAttribute('src', url[0]);
  count = 0;
}
