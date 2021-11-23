crashRide = document.getElementById('crash-ride');
hitHatTop = document.getElementById('hihat-top');

const playingClass = 'playing',
animateCrashOrRide = () => {
    crashRide.style.transform = 'rotate(0deg) scale(1.5)';
},
animateHitHatClosed = () => {
    hitHatTop.style.top = '170px';
},
playSound = e => {
    const keyCode = e.keyCode;
    keyElement = document.querySelector(`div[data-key="${keyCode}"]`);
    console.log(keyElement);
    if(!keyElement){return;}

    const audioElement = document.querySelector(`audio[data-key="${keyCode}"]`);
    audioElement.currentTime = 0;
    audioElement.play();

    switch(keyCode){
        case 82:
        case 69:
            animateCrashOrRide();
            break;
        case 73:
        case 75:
            animateHitHatClosed();
            break;
    }

    keyElement.classList.add(playingClass);
},
removeCrashRideTransition = e => {
    if(e.propertyName !== 'transform')  return;

    e.target.style.transform = 'rotate(-7.3deg) scale(1.5)';
},
removeHitHatTopTransition = e => {
    if(e.propertyName !== 'top')  return;

    e.target.style.top = '165px';
};


crashRide.addEventListener('transitionend', removeCrashRideTransition);
hitHatTop.addEventListener('transitionend', removeHitHatTopTransition);

window.addEventListener('keydown', playSound);

