//
// window.onload = function(){
//   var size = 5;
//   var width = innerWidth;
//   var height = 600;
//
//   var cols = 5;
//   var rows = 5;
//
//   var spaceX = Math.floor(width/cols);
//   var spaceY = Math.floor(height/rows);
//
//   console.log(spaceX,spaceY);
//
//   var img = new Image();
//   img.src = "images/1-1.jpg";
//   img.onload = function(){
//     var canvas = document.getElementById('canvas');
//     var ctx = canvas.getContext('2d');
//     canvas.width = width;
//     canvas.height = height;
//     var h = img.height;
//     var w = img.width;
//     for(var i = 0; i < rows; i++){
//       for(var j = 0; j < cols; j++){
//         ctx.drawImage(img,i * spaceX, j * spaceY,w/20,h/20);
//         console.log(i * spaceX);
//         console.log(j * spaceY);
//       }
//     }
//   }
//
// }
