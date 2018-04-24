// Enlarge on hover, return back to initial size when mouse leaves
var buttonEl1 = document.getElementById("CSStransforms1");
function animateButton1(scale, duration, elasticity) {
  anime.remove(buttonEl1);
  anime({
    targets: buttonEl1,
    scale: scale,
    duration: duration,
    elasticity: elasticity
  });
}
function enterButton1() { animateButton1(1.8, 800, 400) };
function leaveButton1() { animateButton1(1.0, 600, 300) };
buttonEl1.addEventListener('mouseenter', enterButton1, false);
buttonEl1.addEventListener('mouseleave', leaveButton1, false);

// Enlarge on hover, return back to initial size when mouse leaves
var buttonEl2 = document.getElementById("CSStransforms2");
function animateButton2(scale, duration, elasticity) {
  anime.remove(buttonEl2);
  anime({
    targets: buttonEl2,
    scale: scale,
    duration: duration,
    elasticity: elasticity
  });
}
function enterButton2() { animateButton2(1.8, 800, 400) };
function leaveButton2() { animateButton2(1.0, 600, 300) };
buttonEl2.addEventListener('mouseenter', enterButton2, false);
buttonEl2.addEventListener('mouseleave', leaveButton2, false);

// Enlarge on hover, return back to initial size when mouse leaves
var buttonEl3 = document.getElementById("CSStransforms3");
function animateButton3(scale, duration, elasticity) {
  anime.remove(buttonEl3);
  anime({
    targets: buttonEl3,
    scale: scale,
    duration: duration,
    elasticity: elasticity
  });
}
function enterButton3() { animateButton3(1.8, 800, 400) };
function leaveButton3() { animateButton3(1.0, 600, 300) };
buttonEl3.addEventListener('mouseenter', enterButton3, false);
buttonEl3.addEventListener('mouseleave', leaveButton3, false);

// Enlarge on hover, return back to initial size when mouse leaves
var buttonEl4 = document.getElementById("CSStransforms4");
function animateButton4(scale, duration, elasticity) {
  anime.remove(buttonEl4);
  anime({
    targets: buttonEl4,
    scale: scale,
    duration: duration,
    elasticity: elasticity
  });
}
function enterButton4() { animateButton4(1.8, 800, 400) };
function leaveButton4() { animateButton4(1.0, 600, 300) };
buttonEl4.addEventListener('mouseenter', enterButton4, false);
buttonEl4.addEventListener('mouseleave', leaveButton4, false);

// Enlarge on hover, return back to initial size when mouse leaves
var buttonEl5 = document.getElementById("CSStransforms5");
function animateButton5(scale, duration, elasticity) {
  anime.remove(buttonEl5);
  anime({
    targets: buttonEl5,
    scale: scale,
    duration: duration,
    elasticity: elasticity
  });
}
function enterButton5() { animateButton5(1.8, 800, 400) };
function leaveButton5() { animateButton5(1.0, 600, 300) };
buttonEl5.addEventListener('mouseenter', enterButton5, false);
buttonEl5.addEventListener('mouseleave', leaveButton5, false);
