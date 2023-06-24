const cityForm = document.querySelector('form');
const card =document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img');

const updateUI = (data) =>{

        //   console.log(data);
        //   const cityDets = data.cityDets;
        //   const weather = data.weather;

        //destructure properties -  if objects properties has same name as data
        const {cityDets, weather } = data;  // it should work 

          details.innerHTML =`<h5 class="my-3">${cityDets.EnglishName}</h5>
          <div class="my-3">${weather.WeatherText}</div>
          <div class="display-4 my-4">
            <span>${weather.Temperature.Metric.Value}</span>
            <span>&deg;C</span>
          </div>`;

            // Debuggin Purpose
        //    console.log(cityDets.EnglishName);
        //    console.log(weather.WeatherText);
        // console.log(cityDets,weather);
        
        //update the night/day &icon images 
       const iconSrc =`img/icons/${weather.WeatherIcon}.svg`;
       icon.setAttribute('src',iconSrc);

        // Ternary operator 
         let timesrc = weather.IsDayTime ? 'img/day.svg':'img/night.svg';

        // let timesrc = null;
        // if(weather.IsDayTime)
        //  timesrc='img/day.svg';
        //  else
        //  timesrc='img/night.svg';

         time.setAttribute('src',timesrc);


        //remove the d-none class if present 
        if(card.classList.contains('d-none')){
            card.classList.remove('d-none');
        }
}

// const updateCity = async(city) =>{
//                 const cityDets = await getCity(city);
//                 const weather= await getWeather(cityDets.Key);

//                             // return {
//                             //     cityDets: cityDets,
//                             //     weather: weather,
//                             // };


//                             // property name is equal to values 
//                             return{
//                                 cityDets,
//                                 weather  
//                             };
// };

cityForm.addEventListener('submit', e =>{
    // prevent default action
    e.preventDefault();

    // get city 
    const city = cityForm.city.value.trim();
    cityForm.reset();

    //update the ui with new city
    // updateCity(city)
    //         .then(data => console.log(data))
    //         .catch(err => console.log(err));

    // print on website 
    updateCity(city)
            .then(data => updateUI(data) )
            .catch(err => console.log(err));
    localStorage.setItem('city',city);

});

if(localStorage.getItem('city')){
  updateCity(localStorage.getItem('city'))
         .then(data => updateUI(data))
         .catch(err => console.log(err));
}