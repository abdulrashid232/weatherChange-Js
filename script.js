const weatherChange = document.querySelector('.weather');
const authorText = document.querySelector('.txt');
const author = document.querySelector('.controller');

weatherChange.addEventListener('change', setWeather);

function setWeather(){
    const choice = weatherChange.value;

    if(choice === 'sunny'){
        authorText.textContent= 'It is a very sunny day so the pool is heated up, remember to carry a towel to the pool';
        author.textContent ='John Bob';
    }else if (choice === 'rainy') {
        authorText.textContent = 'It has rained all day, Do not forget to bring an unbrella along to the market square';
        author.textContent = 'Abdul';
    }else if (choice ==='snowing'){
        authorText.textContent = 'What a snowy day, today is one of the brightest day covered with snow';
        author.textContent = 'Amatu Issah';
        
    }else if(choice ==='windy'){
        authorText.textContent = 'It is going to be a great day the wind is blowing very smoothly and steadily';
        author.textContent = 'Kpatakpata'
    }else{
        authorText.textContent='';
        author.textContent='';
    }
}