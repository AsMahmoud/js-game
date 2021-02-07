function animate(){
    ctx1.clearRect(0, 0, canvas.width, canvas.height);
    ctx2.clearRect(0, 0, canvas.width, canvas.height);
    ctx3.clearRect(0, 0, canvas.width, canvas.height);
    ctx4.clearRect(0, 0, canvas.width, canvas.height);
    ctx5.clearRect(0, 0, canvas.width, canvas.height);
    // // handleRipples(); 
    // ctx2.drawImage(background_lvl2, 0, 0);
    // // handleParticles();
    // frogger.draw();
    // frogger.update();   
   
    ctx1.drawImage(background, 0, 0);
    // ctx2.drawImage(river, 0, 20);
    handleObstacles();
    // handleScoreBoard();
    // ctx4.drawImage(grass, 0, 0);
    // frame++;
    requestAnimationFrame(animate);
}
animate();
