
/* https://github.com/davidbau/seedrandom Copyright 2013 David Bau. */
(function(a,b,c,d,e,f){function k(a){var b,c=a.length,e=this,f=0,g=e.i=e.j=0,h=e.S=[];for(c||(a=[c++]);d>f;)h[f]=f++;for(f=0;d>f;f++)h[f]=h[g=j&g+a[f%c]+(b=h[f])],h[g]=b;(e.g=function(a){for(var b,c=0,f=e.i,g=e.j,h=e.S;a--;)b=h[f=j&f+1],c=c*d+h[j&(h[f]=h[g=j&g+b])+(h[g]=b)];return e.i=f,e.j=g,c})(d)}function l(a,b){var e,c=[],d=(typeof a)[0];if(b&&"o"==d)for(e in a)try{c.push(l(a[e],b-1))}catch(f){}return c.length?c:"s"==d?a:a+"\0"}function m(a,b){for(var d,c=a+"",e=0;c.length>e;)b[j&e]=j&(d^=19*b[j&e])+c.charCodeAt(e++);return o(b)}function n(c){try{return a.crypto.getRandomValues(c=new Uint8Array(d)),o(c)}catch(e){return[+new Date,a,a.navigator.plugins,a.screen,o(b)]}}function o(a){return String.fromCharCode.apply(0,a)}var g=c.pow(d,e),h=c.pow(2,f),i=2*h,j=d-1;c.seedrandom=function(a,f){var j=[],p=m(l(f?[a,o(b)]:0 in arguments?a:n(),3),j),q=new k(j);return m(o(q.S),b),c.random=function(){for(var a=q.g(e),b=g,c=0;h>a;)a=(a+c)*d,b*=d,c=q.g(1);for(;a>=i;)a/=2,b/=2,c>>>=1;return(a+c)/b},p},m(c.random(),b)})(this,[],Math,256,6,52);

var data = [
{title: ":D", url: "slides/slideshow.html#0.jpg"},
{title: ":D", url: "slides/slideshow.html#1.jpg"},
{title: ":D", url: "slides/slideshow.html#2.jpg"},
{title: ":D", url: "slides/slideshow.html#3.jpg"},
{title: ":D", url: "slides/slideshow.html#4.jpg"},
{title: ":D", url: "slides/slideshow.html#5.jpg"},
{title: ":D", url: "slides/slideshow.html#6.jpg"},
{title: ":D", url: "slides/slideshow.html#7.jpg"},
{title: ":D", url: "slides/slideshow.html#8.jpg"},
{title: ":D", url: "slides/slideshow.html#9.jpg"},
{title: ":D", url: "slides/slideshow.html#10.jpg"},
{title: ":D", url: "slides/slideshow.html#11.jpg"},
{title: ":D", url: "slides/slideshow.html#12.jpg"},
{title: ":D", url: "slides/slideshow.html#13.jpg"},
{title: ":D", url: "slides/slideshow.html#14.jpg"},
{title: ":D", url: "slides/slideshow.html#15.jpg"},
{title: ":D", url: "slides/slideshow.html#16.jpg"},
{title: ":D", url: "slides/slideshow.html#17.jpg"},
{title: ":D", url: "slides/slideshow.html#18.jpg"},
{title: ":D", url: "slides/slideshow.html#19.jpg"},
{title: ":D", url: "slides/slideshow.html#20.jpg"},
{title: ":D", url: "slides/slideshow.html#21.jpg"},
{title: ":D", url: "slides/slideshow.html#22.jpg"},
{title: ":D", url: "slides/slideshow.html#23.jpg"},
{title: ":D", url: "slides/slideshow.html#24.jpg"},
{title: ":D", url: "slides/slideshow.html#25.jpg"},
{title: ":D", url: "slides/slideshow.html#26.jpg"},
{title: ":D", url: "slides/slideshow.html#27.jpg"},
{title: ":D", url: "slides/slideshow.html#28.jpg"},
{title: ":D", url: "slides/slideshow.html#29.jpg"},
{title: ":D", url: "slides/slideshow.html#30.jpg"},
{title: ":D", url: "slides/slideshow.html#31.jpg"},
{title: ":D", url: "slides/slideshow.html#32.jpg"},
{title: ":D", url: "slides/slideshow.html#33.jpg"},
{title: ":D", url: "slides/slideshow.html#34.jpg"},
{title: ":D", url: "slides/slideshow.html#35.jpg"},
{title: ":D", url: "slides/slideshow.html#36.jpg"},
{title: ":D", url: "slides/slideshow.html#37.jpg"},
{title: ":D", url: "slides/slideshow.html#38.jpg"},
{title: ":D", url: "slides/slideshow.html#39.jpg"},
{title: ":D", url: "slides/slideshow.html#40.jpg"},
{title: ":D", url: "slides/slideshow.html#41.jpg"},
{title: ":D", url: "slides/slideshow.html#42.jpg"},
{title: ":D", url: "slides/slideshow.html#43.jpg"},
{title: ":D", url: "slides/slideshow.html#44.jpg"},
{title: ":D", url: "slides/slideshow.html#45.jpg"},
{title: ":D", url: "slides/slideshow.html#46.jpg"},
{title: ":D", url: "slides/slideshow.html#47.jpg"},
{title: ":D", url: "slides/slideshow.html#48.jpg"},
{title: ":D", url: "slides/slideshow.html#49.jpg"},
{title: ":D", url: "slides/slideshow.html#50.jpg"},
{title: ":D", url: "slides/slideshow.html#51.jpg"},
{title: ":D", url: "slides/slideshow.html#52.jpg"},
{title: ":D", url: "slides/slideshow.html#53.jpg"},
{title: ":D", url: "slides/slideshow.html#54.jpg"},
{title: ":D", url: "slides/slideshow.html#55.jpg"},
{title: ":D", url: "slides/slideshow.html#56.jpg"},
{title: ":D", url: "slides/slideshow.html#57.jpg"},
{title: ":D", url: "slides/slideshow.html#58.jpg"},
{title: ":D", url: "slides/slideshow.html#59.jpg"},
{title: ":D", url: "slides/slideshow.html#60.jpg"},
{title: ":D", url: "slides/slideshow.html#61.jpg"},
{title: ":D", url: "slides/slideshow.html#62.jpg"},
{title: ":D", url: "slides/slideshow.html#63.jpg"},
{title: ":D", url: "slides/slideshow.html#64.jpg"},
{title: ":D", url: "slides/slideshow.html#65.jpg"},
{title: ":D", url: "slides/slideshow.html#66.jpg"},
{title: ":D", url: "slides/slideshow.html#67.jpg"},
{title: ":D", url: "slides/slideshow.html#68.jpg"},
{title: ":D", url: "slides/slideshow.html#69.jpg"},
{title: ":D", url: "slides/slideshow.html#70.jpg"},
{title: ":D", url: "slides/slideshow.html#71.jpg"},
{title: ":D", url: "slides/slideshow.html#72.jpg"},
{title: ":D", url: "slides/slideshow.html#73.jpg"},
{title: ":D", url: "slides/slideshow.html#74.jpg"},
{title: ":D", url: "slides/slideshow.html#75.jpg"},
{title: ":D", url: "slides/slideshow.html#76.jpg"},
{title: ":D", url: "slides/slideshow.html#77.jpg"},
{title: ":D", url: "slides/slideshow.html#78.jpg"},
{title: ":D", url: "slides/slideshow.html#79.jpg"},
{title: ":D", url: "slides/slideshow.html#80.jpg"},
{title: ":D", url: "slides/slideshow.html#81.jpg"},
{title: ":D", url: "slides/slideshow.html#82.jpg"},
{title: ":D", url: "slides/slideshow.html#83.jpg"},
{title: ":D", url: "slides/slideshow.html#84.jpg"},
{title: ":D", url: "slides/slideshow.html#85.jpg"},
{title: ":D", url: "slides/slideshow.html#86.jpg"},
{title: ":D", url: "slides/slideshow.html#87.jpg"},
{title: ":D", url: "slides/slideshow.html#88.jpg"},
{title: ":D", url: "slides/slideshow.html#89.jpg"},
{title: ":D", url: "slides/slideshow.html#90.jpg"},
{title: ":D", url: "slides/slideshow.html#91.jpg"},
{title: ":D", url: "slides/slideshow.html#92.jpg"},
{title: ":D", url: "slides/slideshow.html#93.jpg"},
{title: ":D", url: "slides/slideshow.html#94.jpg"},
{title: ":D", url: "slides/slideshow.html#95.jpg"},
{title: ":D", url: "slides/slideshow.html#96.jpg"},
{title: ":D", url: "slides/slideshow.html#97.jpg"},
{title: ":D", url: "slides/slideshow.html#98.jpg"},
{title: ":D", url: "slides/slideshow.html#99.jpg"}
];

data.forEach(function(d, i) {
  d.i = i % 10;
  d.j = i / 10 | 0;
});

Math.seedrandom(+d3.time.hour(new Date));

d3.shuffle(data);

var height = 460,
    imageWidth = 132,
    imageHeight = 152,
    radius = 75,
    depth = 4;

var currentFocus = [innerWidth / 2, height / 2],
    desiredFocus,
    idle = true;

var style = document.body.style,
    transform = ("webkitTransform" in style ? "-webkit-"
        : "MozTransform" in style ? "-moz-"
        : "msTransform" in style ? "-ms-"
        : "OTransform" in style ? "-o-"
        : "") + "transform";

var hexbin = d3.hexbin()
    .radius(radius);

if (!("ontouchstart" in document)) d3.select("#examples")
    .on("mousemove", mousemoved);

var deep = d3.select("#examples-deep");

var canvas = deep.append("canvas")
    .attr("height", height);

var context = canvas.node().getContext("2d");

var svg = deep.append("svg")
    .attr("height", height);

var mesh = svg.append("path")
    .attr("class", "example-mesh");

var anchor = svg.append("g")
      .attr("class", "example-anchor")
    .selectAll("a");

var graphic = deep.selectAll("svg,canvas");

var image = new Image;
image.src = "wedding-matrix.jpg?3f2d00ffdba6ced9c50f02ed42f12f6156368bd2";
image.onload = resized;

d3.select(window)
    .on("resize", resized)
    .each(resized);

function drawImage(d) {
  context.save();
  context.beginPath();
  context.moveTo(0, -radius);

  for (var i = 1; i < 6; ++i) {
    var angle = i * Math.PI / 3,
        x = Math.sin(angle) * radius,
        y = -Math.cos(angle) * radius;
    context.lineTo(x, y);
  }

  context.clip();
  context.drawImage(image,
      imageWidth * d.i, imageHeight * d.j,
      imageWidth, imageHeight,
      -imageWidth / 2, -imageHeight / 2,
      imageWidth, imageHeight);
  context.restore();
}

function resized() {
  var deepWidth = innerWidth * (depth + 1) / depth,
      deepHeight = height * (depth + 1) / depth,
      centers = hexbin.size([deepWidth, deepHeight]).centers();

  desiredFocus = [innerWidth / 2, height / 2];
  moved();

  graphic
      .style("left", Math.round((innerWidth - deepWidth) / 2) + "px")
      .style("top", Math.round((height - deepHeight) / 2) + "px")
      .attr("width", deepWidth)
      .attr("height", deepHeight);

  centers.forEach(function(center, i) {
    center.j = Math.round(center[1] / (radius * 1.5));
    center.i = Math.round((center[0] - (center.j & 1) * radius * Math.sin(Math.PI / 3)) / (radius * 2 * Math.sin(Math.PI / 3)));
    context.save();
    context.translate(Math.round(center[0]), Math.round(center[1]));
    drawImage(center.example = data[(center.i % 10) + ((center.j + (center.i / 10 & 1) * 5) % 10) * 10]);
    context.restore();
  });

  mesh.attr("d", hexbin.mesh);

  anchor = anchor.data(centers, function(d) { return d.i + "," + d.j; });

  anchor.exit().remove();

  anchor.enter().append("a")
      .attr("xlink:href", function(d) { return d.example.url; })
      .attr("xlink:title", function(d) { return d.example.title; })
    .append("path")
      .attr("d", hexbin.hexagon());

  anchor
      .attr("transform", function(d) { return "translate(" + d + ")"; });
}

function mousemoved() {
  var m = d3.mouse(this);

  desiredFocus = [
    Math.round((m[0] - innerWidth / 2) / depth) * depth + innerWidth / 2,
    Math.round((m[1] - height / 2) / depth) * depth + height / 2
  ];

  moved();
}

function moved() {
  if (idle) d3.timer(function() {
    if (idle = Math.abs(desiredFocus[0] - currentFocus[0]) < .5 && Math.abs(desiredFocus[1] - currentFocus[1]) < .5) currentFocus = desiredFocus;
    else currentFocus[0] += (desiredFocus[0] - currentFocus[0]) * .14, currentFocus[1] += (desiredFocus[1] - currentFocus[1]) * .14;
    deep.style(transform, "translate(" + (innerWidth / 2 - currentFocus[0]) / depth + "px," + (height / 2 - currentFocus[1]) / depth + "px)");
    return idle;
  });
}