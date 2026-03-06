
const buttons = document.querySelectorAll('.button');

const body = document.querySelector('body');


buttons.forEach(function (button) {


    button.addEventListener('click', function(e){

        console.log(e);

        if(e.target.id === 'grey'){
            body.style.backgroundColor = 'grey';
        }

        if(e.target.id === 'pink'){
            body.style.backgroundColor = 'pink';
        }

        if(e.target.id === 'blue'){
            body.style.backgroundColor = 'blue';
        }

        if(e.target.id === 'black'){
            body.style.backgroundColor = 'black';
        }

    });

});


