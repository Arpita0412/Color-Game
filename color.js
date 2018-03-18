var mode, colors, pickedColor, squares, colorDisplay, messageDisplay, h1, resetButton, modeButton;

mode = 6;
colors = [];

squares = document.querySelectorAll('.square');
colorDisplay = document.getElementById('colorDisplay');
messageDisplay = document.getElementById('message');
h1 = document.querySelector('h1');
resetButton = document.getElementById('reset');
modeButton = document.querySelectorAll('.gameMode');




function setUpSquares() {
    for (var i = 0; i < squares.length; i++) {
        
        squares[i].addEventListener('click', function(){
            var colorClicked = this.style.background;
            
            if(colorClicked === pickedColor) {    
                messageDisplay.textContent = "Correct!";
                resetButton.textContent = "Play Again?";
                changeColors(colorClicked);
                h1.style.background = colorClicked;

            } else {
                
                this.style.background = '#333';

             
            messageDisplay.textContent = "Try Again!";
            }
            
        });

    }
}


function setUpModeButtons() {
    // MODE BUTTON EVENTS
    for (var i = 0; i < modeButton.length; i++) {
        modeButton[i].addEventListener('click', function () {
            modeButton[0].classList.remove('active');
            modeButton[1].classList.remove('active');
            this.classList.add('active');
            this.textContent === "Easy" ? mode = 3 : mode = 6;

            reset();

        });

    }
}

function reset(){
    colors = generateRandomColor(mode);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor; 
    // change colors of the squares
    for (var i = 0; i < squares.length; i++) {
        // if there's a color to paint from the array
        if(colors[i]) {
            // reshow all the squares before looping
            squares[i].style.display = 'block';
            // paint the square
            squares[i].style.background = colors[i];
        } else {
            squares[i].style.display = 'none';
        }
        
        
        
    }
    // reset the button text
    resetButton.textContent = 'New Colors';
    // reset the background of the h1
    h1.style.background = 'steelblue';
    // clear the message display
    messageDisplay.textContent = ""; 
    
}
resetButton.addEventListener('click', reset);

