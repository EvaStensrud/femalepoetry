function setup() {
    createCanvas(1500, 1000);
  }
  let a = 0
  
  function draw() {
    background(17, 1, 1);
    
    let factor = sin(a)*5
    let maxAmplitude = 200
    let posX = factor * maxAmplitude
    fill(0, 255, 0)
    textSize(100)
    text("AGGREGAT", posX, 73)

    let newFactor = sin(a)*10
    let newMaxamplitude = 250
    posY = newFactor * newMaxamplitude
    text("TRAUER", posX, 167)
    text("STEIN", posX, 267)
    text("HERZ", posX, 367)
    
    a+=0.01
  }