function playSound(event) {
     const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
     const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);

     if (!audio) return; // this will end the function execution

     audio.currentTime = 0; //this is rewind the key to the start
     audio.play();

     key.classList.add('playing');
};

function removeTransition(event){
   if(event.propertyName !== 'transform') return; //this will skip if its not transform;

   this.classList.remove('playing');
}
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend',removeTransition));
window.addEventListener('keydown',playSound);
window.addEventListener('click',playSound);