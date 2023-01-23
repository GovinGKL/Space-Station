// let darkBtn = document.getElementById('darkBtn')
let dark_Switch = document.getElementById("dark_Switch");
let weatherMessage = document.getElementById('weatherMessage')

dark_Switch.addEventListener("click", function click() {
  console.log("Dark mode enabled");
  if (document.body.style.background != "black") {
    document.body.style.background = "black";
    document.body.style.color = "white";
    dark_Switch.innerText = "Disable Dark-Mode";
  } else {
    document.body.style.background = "white";
    document.body.style.color = "black";
    dark_Switch.innerHTML = "Enable Dark-Mode";
  }
});

// Enabling dark-mode feature

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "ae626e2e3fmshaf14c72d9c6fb58p1ca133jsnc5bab184b027",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

const getWeather = (city) => {
  let cityName = document.getElementById('cityName')
  cityName.innerHTML = city;
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      // cloud_pct.innerHTML = response.cloud_pct;
      let temp = document.getElementById('temp')
      temp.innerHTML = response.temp;
      let temp2 = document.getElementById('temp')
      temp2.innerHTML = response.temp;
      let feels_like = document.getElementById('feels_like')
      feels_like.innerHTML = response.feels_like;
      let humidity = document.getElementById('humidity')
      humidity.innerHTML = response.humidity;
      let humidity2 = document.getElementById('humidity2')
      humidity2.innerHTML = response.humidity;
      let min_temp = document.getElementById('min_temp')
      min_temp.innerHTML = response.min_temp;
      let max_temp = document.getElementById('max_temp')
      max_temp.innerHTML = response.max_temp;
      let wind_speed = document.getElementById('wind_speed')
      wind_speed.innerHTML = response.wind_speed;
      let wind_speed2 = document.getElementById('wind_speed2')
      wind_speed2.innerHTML = response.wind_speed;
      let wind_degrees = document.getElementById('wind_degrees')
      wind_degrees.innerHTML = response.wind_degrees;
      let sunrise = document.getElementById('sunrise')
      sunrise.innerHTML = response.sunrise;
      let sunset = document.getElementById('sunset')
      sunset.innerHTML = response.sunset;
     
    })

    .catch((err) => console.error(err));
};

// getWeather;
let submit =  document.getElementById('submit')
submit.addEventListener("click", (e) => {
  e.preventDefault();
  let city = document.getElementById('city')
  getWeather(city.value);
});

getWeather("bangalore ");

const BangaloreWeather = () => {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "ae626e2e3fmshaf14c72d9c6fb58p1ca133jsnc5bab184b027",
      "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
    },
  };

  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Bangalore",
    options
  )
    // fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Mumbai', options)
    // fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Chennai', options)
    // fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi', options)
    // fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Kolkota', options)
    // fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Lucknow', options)
    .then((response) => response.json())
    .then((response) => {
      console.log(response);

      Bangaloretemp.innerHTML = response.temp;
      Bangalorefeels_like.innerHTML = response.feels_like;
      Bangalorehumidity.innerHTML = response.humidity;
      Bangaloremin_temp.innerHTML = response.min_temp;
      Bangaloremax_temp.innerHTML = response.max_temp;
      Bangalorewind_speed.innerHTML = response.wind_speed;
      Bangalorewind_degrees.innerHTML = response.wind_degrees;
      Bangaloresunrise.innerHTML = response.sunrise;
      Bangaloresunset.innerHTML = response.sunset;
    })
    .catch((err) => console.error(err));
};

BangaloreWeather();

const MumbaiWeather = () => {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "ae626e2e3fmshaf14c72d9c6fb58p1ca133jsnc5bab184b027",
      "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
    },
  };

  // fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Bangalore', options)
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Mumbai",
    options
  )
    // fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Chennai', options)
    // fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi', options)
    // fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Kolkota', options)
    // fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Lucknow', options)
    .then((response) => response.json())
    .then((response) => {
      console.log(response);

      Mumbaifeels_like.innerHTML = response.feels_like;
      Mumbaihumidity.innerHTML = response.humidity;
      Mumbaimax_temp.innerHTML = response.max_temp;
      Mumbaimin_temp.innerHTML = response.min_temp;
      Mumbaisunrise.innerHTML = response.sunrise;
      Mumbaisunset.innerHTML = response.sunset;
      Mumbaitemp.innerHTML = response.temp;
      Mumbaiwind_degrees.innerHTML = response.wind_degrees;
      Mumbaiwind_speed.innerHTML = response.wind_speed;
    })
    .catch((err) => console.error(err));
};

MumbaiWeather();

const ChennaiWeather = () => {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "ae626e2e3fmshaf14c72d9c6fb58p1ca133jsnc5bab184b027",
      "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
    },
  };

  // fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Bangalore', options)
  // fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Mumbai', options)
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Chennai",
    options
  )
    // fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi', options)
    // fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Kolkota', options)
    // fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Lucknow', options)
    .then((response) => response.json())
    .then((response) => {
      console.log(response);

      Chennaifeels_like.innerHTML = response.feels_like;
      Chennaihumidity.innerHTML = response.humidity;
      Chennaimax_temp.innerHTML = response.max_temp;
      Chennaimin_temp.innerHTML = response.min_temp;
      Chennaisunrise.innerHTML = response.sunrise;
      Chennaisunset.innerHTML = response.sunset;
      Chennaitemp.innerHTML = response.temp;
      Chennaiwind_degrees.innerHTML = response.wind_degrees;
      Chennaiwind_speed.innerHTML = response.wind_speed;
    })
    .catch((err) => console.error(err));
};

ChennaiWeather();

const DelhiWeather = () => {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "ae626e2e3fmshaf14c72d9c6fb58p1ca133jsnc5bab184b027",
      "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
    },
  };

  // fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Bangalore', options)
  // fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Mumbai', options)
  // fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Chennai', options)
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi",
    options
  )
    // fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Kolkota', options)
    // fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Lucknow', options)
    .then((response) => response.json())
    .then((response) => {
      console.log(response);

      Delhifeels_like.innerHTML = response.feels_like;
      Delhihumidity.innerHTML = response.humidity;
      Delhimax_temp.innerHTML = response.max_temp;
      Delhimin_temp.innerHTML = response.min_temp;
      Delhisunrise.innerHTML = response.sunrise;
      Delhisunset.innerHTML = response.sunset;
      Delhitemp.innerHTML = response.temp;
      Delhiwind_degrees.innerHTML = response.wind_degrees;
      Delhiwind_speed.innerHTML = response.wind_speed;
    })
    .catch((err) => console.error(err));
};

DelhiWeather();

const KolkataWeather = () => {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "ae626e2e3fmshaf14c72d9c6fb58p1ca133jsnc5bab184b027",
      "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
    },
  };

  // fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Bangalore', options)
  // fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Mumbai', options)
  // fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Chennai', options)
  // fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi', options)
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Kolkata",
    options
  )
    // fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Lucknow', options)
    .then((response) => response.json())
    .then((response) => {
      console.log(response);

      Kolkatafeels_like.innerHTML = response.feels_like;
      Kolkatahumidity.innerHTML = response.humidity;
      Kolkatamax_temp.innerHTML = response.max_temp;
      Kolkatamin_temp.innerHTML = response.min_temp;
      Kolkatasunrise.innerHTML = response.sunrise;
      Kolkatasunset.innerHTML = response.sunset;
      Kolkatatemp.innerHTML = response.temp;
      Kolkatawind_degrees.innerHTML = response.wind_degrees;
      Kolkatawind_speed.innerHTML = response.wind_speed;
    })
    .catch((err) => console.error(err));
};

KolkataWeather();

const LucknowWeather = () => {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "ae626e2e3fmshaf14c72d9c6fb58p1ca133jsnc5bab184b027",
      "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
    },
  };

  // fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Bangalore', options)
  // fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Mumbai', options)
  // fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Chennai', options)
  // fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi', options)
  // fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Kolkata', options)
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Lucknow",
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);

      Lucknowfeels_like.innerHTML = response.feels_like;
      Lucknowhumidity.innerHTML = response.humidity;
      Lucknowmax_temp.innerHTML = response.max_temp;
      Lucknowmin_temp.innerHTML = response.min_temp;
      Lucknowsunrise.innerHTML = response.sunrise;
      Lucknowsunset.innerHTML = response.sunset;
      Lucknowtemp.innerHTML = response.temp;
      Lucknowwind_degrees.innerHTML = response.wind_degrees;
      Lucknowwind_speed.innerHTML = response.wind_speed;
    })
    .catch((err) => console.error(err));
};

LucknowWeather();
