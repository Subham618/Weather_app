const cityForm = document.querySelector('form');
const card =document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img');
const forcast = new Forcast();
// console.log(forcast);

const updateUI = (data) =>{

       
        const {cityDets, weather } = data; 

          details.innerHTML =`<h5 class="my-3">${cityDets.EnglishName}</h5>
          <div class="my-3">${weather.WeatherText}</div>
          <div class="display-4 my-4">
            <span>${weather.Temperature.Metric.Value}</span>
            <span>&deg;C</span>
          </div>`;

        //update the night/day &icon images 
       const iconSrc =`img/icons/${weather.WeatherIcon}.svg`;
       icon.setAttribute('src',iconSrc);

        // Ternary operator 
         let timesrc = weather.IsDayTime ? 'img/day.svg':'img/night.svg';

         time.setAttribute('src',timesrc);

        //remove the d-none class if present 
        if(card.classList.contains('d-none')){
            card.classList.remove('d-none');
        }
}



cityForm.addEventListener('submit', e =>{
    // prevent default action
    e.preventDefault();

    // get city 
    const city = cityForm.city.value.trim();
    cityForm.reset();

    // console.log(city);
    forcast.updateCity(city)
            .then(data => updateUI(data) )
            .catch(err => console.log(err));
    localStorage.setItem('city',city);

});

if(localStorage.getItem('city')){
  forcast.updateCity(localStorage.getItem('city'))
         .then(data => updateUI(data))
         .catch(err => console.log(err));
}