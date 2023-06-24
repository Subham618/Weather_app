const key = 'ljGn16uhKATiGeSVinNZocQPwTo1fzr0';


const getWeather = async(id) =>{
    const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${id}?apikey=${key}`;
    const response = await fetch(base+query);
    const data = await response.json();
    return data[0];
}


// console.log(getWeather('202349'));  // as it is pending beasuse it takes time to return the data 
//by using .then method you can get data which return promise 
// getWeather('202349').then(data =>{
//     console.log(data);
// }).catch(err =>{
//     console.log(err);
// });
  

const getCity = async(city)=>{
    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${key}&q=${city}`;
    const response = await fetch(base + query);
    const data = await response.json();
    // console.log(data)
    return data[0];

};
const updateCity = async(city) =>{
                const cityDets = await getCity(city);
                const weather= await getWeather(cityDets.Key);

                            // return {
                            //     cityDets: cityDets,
                            //     weather: weather,
                            // };


                            // property name is equal to values 
                            return{
                                cityDets,
                                weather  
                            };
};


// getCity('patna');  return all the closet value which matches the patna city

// getCity('patna')
//        .then(data =>{
//         return getWeather(data.Key);
//        }).then(data =>{
//         console.log(data);
//        })
//        .catch(err => console.log('error'));

       
