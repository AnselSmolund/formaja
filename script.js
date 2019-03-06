var count1 = 0;
function changeImage1(){
  var imgs = ["images/1-1.jpg","images/1-2.jpg","images/1-3.jpg",
  "images/1-4.jpg","images/1-5.PNG","images/1-6.PNG","images/1-7.jpg",
  "images/1-8.jpg","images/1-9.jpg","images/1-10.jpg","images/1-11.jpg"];
  var currImg = document.getElementById('img-1').src;
  var fileName = currImg.substring(currImg.lastIndexOf('/')+1);
  if(count1 >= imgs.length){
    count1 = 0;
  }
  document.getElementById('img-1').src = imgs[count1];
  count1++;

}
window.setInterval(function(){
  changeImage1();
}, 2000);
