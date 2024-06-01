const balls = document.getElementsByClassName('ball');

//Use a for loop to iterate through the balls array and add an event listener to each ball
//


document.onmousemove = (event) => {

    //console.log(event.pageX, event.pageY);
    const x = (event.clientX * 100) / window.innerWidth + "%";
    const y = (event.clientY * 100) / window.innerHeight + "%";

    //console.log(x, y);

    for (let i = 0; i < 2; i++) {
        balls[i].style.left = x;
        balls[i].style.top = y;
        balls[i].style.transform = "translate(-" + x + ",-" + y + ")";
    }
}
  


