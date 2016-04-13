$(document).ready(function(){
  console.log("working");
  var ball = {
    x : 50,
    y : 100,
    radius: 20,
    arc_start: 0,
    arc_end: 2*Math.PI,
    id:"ball",
    fall_rate: 0.5,
  }
  $('#game_board').html();
  var myCanvas = '<canvas id="myCanvas" width="500" height="500" style="border:1px solid #000000;"></canvas>';
  $('#game_board').html(myCanvas);
  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");
  var x = 10, y = 100;
       ctx.fillStyle = "black";
       ctx.fillRect(700, 100, 100, 100);

       function draw(target) {
           ctx.beginPath();
           ctx.arc(target.x, target.y,target.radius, target.arc_start, target.arc_end);
           ctx.fillStyle = 'rgba(250,0,0,0.4)';
           ctx.fill();
           y += target.fall_rate;
          //  ctx.fillStyle = "rgba(34,45,23,0.4)";
          //  ctx.fillRect(0, 0, c.width, c.height);
           requestAnimationFrame(draw);
           //ctx.clearRect(0,0,can.width,can.height);
       }
       draw(ball);

})
