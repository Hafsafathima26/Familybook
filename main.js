var imgs= [
  "Amaanat.jpg",
  "IMG_1741.jpg",
  "IMG_8973.jpg",
  "IMG_9124.jpg",
  "IMG_9106.jpg",
  ]
var i =0;
function nextslide(){
  if(i==8){
    i=0;
  }
  document.getElementById("album").src=imgs[i];
i++; }
