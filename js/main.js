let song;


function setup() {
    createCanvas(windowWidth, windowHeight);

    song = loadSound('assets/00.mp3');
    song1 = loadSound('assets/01.mp3');
    song2 = loadSound('assets/02.mp3');
    song3 = loadSound('assets/03.mp3');
    song4 = loadSound('assets/04.mp3');
    song5 = loadSound('assets/05.mp3');

    let col = color(0, 0, 0);
    let dec = "none";

    link0 = createA('assets/00.mp3', 'audio one', '_blank');
    link0.style('color', col);
    link0.style('text-decoration', dec);

    link1 = createA('assets/01.mp3', 'audio two', '_blank');
    link1.style('color', col);
    link1.style('text-decoration', dec);

    link2 = createA('assets/02.mp3', 'audio three', '_blank');
    link2.style('color', col);
    link2.style('text-decoration', dec);

    link3 = createA('assets/03.mp3', 'audio four', '_blank');
    link3.style('color', col);
    link3.style('text-decoration', dec);

    link4 = createA('assets/04.mp3', 'audio five', '_blank');
    link4.style('color', col);
    link4.style('text-decoration', dec);

    link5 = createA('assets/05.mp3', 'audio six', '_blank');
    link5.style('color', col);
    link5.style('text-decoration', dec);


}


function draw() {
    createCanvas(windowWidth, windowHeight);
    background(250, 250, 250);

    var x = window.innerWidth;
    var y = window.innerHeight;


    if (window.innerWidth < 600) {
        var x = 1200 - window.innerWidth;
    }


    let x1 = 10;
    let y1 = 30;

    let x2 = x - 400;
    let y2 = y - 880;

    let x3 = x - 400;
    let y3 = 90;

    let x4 = x - 100;
    let y4 = y - 100;

    let x5 = x - 58;
    let y5 = y - 590;

    let x6 = x - 231;
    let y6 = y - 245;


    link0.position(x1, y1);
    link1.position(x2, y2);
    link2.position(x3, y3);
    link3.position(x4, y4);
    link4.position(x5, y5);
    link5.position(x6, y6);

    let pad = 10;

    noFill();
    stroke(0, 0, 0);
    bezier(x1 + pad, y1 + pad, 500, 600, 700, 90, x2 + pad, y2 + pad);
    bezier(x3 + pad, y3 + pad, 500, 600, 700, 900, x5 + pad, y5 + pad);
    bezier(x5 + pad, y5 + pad, 1500, 900, 800, 100, x4 + pad, y4 + pad);
    bezier(x3 + pad, y3 + pad, 887, 115, 110, 80, x6 + pad, y6 + pad);
}
