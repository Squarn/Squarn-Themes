//https://github.com/jnicol/particleground

$(document).ready(function() {
$('#particles').particleground({
  minSpeedX: 0.1,
  maxSpeedX: 0.1,
  minSpeedY: 0.1,
  maxSpeedY: 0.1,
  directionX: 'center', // 'center', 'left' or 'right'. 'center' = dots bounce off edges
  directionY: 'center', // 'center', 'up' or 'down'. 'center' = dots bounce off edges
  density: 10000, // How many particles will be generated: one particle every n pixels
  dotColor: '#3d3d3d',
  lineColor: '#666666',
  particleRadius: 10, // Dot size
  lineWidth: .5,
  curvedLines: false,
  proximity: 120, // How close two dots need to be before they join
  parallax: true,
  parallaxMultiplier: 8, // The lower the number, the more extreme the parallax effect
  onInit: function() {},
  onDestroy: function() {}
});
});