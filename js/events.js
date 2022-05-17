function makeRed(){
    document.body.style.backgroundColor = 'red';
}

// handle blue button click by setting function name

const blueButton = document.getElementById('make-blue-button');
        //just set the name of the function
        blueButton.onclick = makeBlue ;


        function makeBlue(){
            document.body.style.backgroundColor = 'blue';
        }

// handle yellow button by anonymus function
const yellowButton = document.getElementById('make-yellow-button');

        // anonymus function (which doesn't have name)
        yellowButton.onclick = function(){
            document.body.style.backgroundColor = 'yellow';
        }

// handle by using add eventlisenter

const goldenButton = document.getElementById('make-goldenrod');
         goldenButton.addEventListener('click', makeGoldenRod);

         function makeGoldenRod(){
             document.body.style.backgroundColor = 'goldenrod';
         }

// add eventlistener 

const hotPinkButton = document.getElementById('make-hotpink');
        hotPinkButton.addEventListener('click', function(){
            document.body.style.backgroundColor = 'hotpink';
        })
// direct shortcut

const l = document.getElementById('make-light-blue').addEventListener('click', function(){
    document.body.style.backgroundColor = 'lightblue';
})
