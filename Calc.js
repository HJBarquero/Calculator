//Variables

const screen = document.querySelector('.calc_screen');
const btns = document.querySelectorAll('.calc_btns button');

//Get each btn element of the calcualtor
btns.forEach(btn => {
  btn.addEventListener('click', () => {
    console.log('pressed button: ', btn.textContent);

    const getBtn = btn.textContent;
   try { 
    if (btn.classList.contains('C')) { //get the class 'C' and when is pressed, screen.textContent = '0'
      screen.textContent = '0';
      return;

    } if (btn.classList.contains('delete')) {

      if (screen.textContent.length === 1) { 
        screen.textContent = '0';

      } else {
        screen.textContent = screen.textContent.slice(0, -1); //Delete the last button with .slice

      }
      return;
    }

    if (btn.classList.contains('equal')) {
      screen.textContent = eval(screen.textContent); //Result (eval screen.textContent)

      return;
    }

    if (screen.textContent === '0') {
      screen.textContent = getBtn; //If pressed 0, still in 0


    

    } else {
      screen.textContent = screen.textContent += getBtn
    }

  


 } catch(error){ //Capture the error
  screen.textContent = 'Syntax Error'; 
  console.log('More  technical details  error: ', error.message);
 } 

  })
})


