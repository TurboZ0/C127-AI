song_legend="";
song_potter="";

function preload() {
    song= loadSound("Legends_song1.mp3");
    song1= loadSound("Harry_Potter.mp3")
}
function setup() {
    canvas= createCanvas(600,500);
    canvas.position(620,220);

    video= createCapture(VIDEO); 
    video.hide();
}

function draw() {
    image(video, 0, 0, 600, 500);
}