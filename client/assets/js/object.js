var ball = {
  x : 50,
  y : 100,
  radius: 20,
  arc_start: 0,
  arc_end: 2*Math.PI,
  id:"ball",
  fall_rate: 3,
}
var score = 0;

function update_score(){
  $("#score").text(10+parseInt($("#score").text()));
}


$(document).ready(function(){
  console.log("working");

  $('#game_board').html();
  var myCanvas = '<canvas id="myCanvas" width="500" height="500" style="border:1px solid #000000;"></canvas>';
  $('#game_board').html(myCanvas);
  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");
  var x = 10, y = 100;
       ctx.fillStyle = "black";
       ctx.fillRect(700, 100, 100, 100);

       function draw() {
           ctx.beginPath();
           ctx.arc(ball.x, ball.y, 20, 0, 2 * Math.PI);
           ctx.fillStyle = 'rgba(250,0,0,0.4)';
           ctx.fill();
           ball.y += ball.fall_rate;
           ctx.fillStyle = "rgba(34,45,23,0.4)";
           ctx.fillRect(0, 0, c.width, c.height);
           requestAnimationFrame(draw);
           if (ball.y > 500){
             ball.y = 500;
             score += 10;
             update_score();
             ball.fall_rate = 0;
           }
           //ctx.clearRect(0,0,can.width,can.height);
       }
       draw();

$(document).click(function(){
  ball.fall_rate = 0;
});
// dictionary of algorithms
})
