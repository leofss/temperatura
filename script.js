if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(successFunction);
} else {
    alert('erro, falha na geolocalização');
}

function successFunction(position) {
    const lat = position.coords.latitude;
    const long = position.coords.longitude;

    fetch('https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+long+'&appid=6878bb234ab18572a269d71e74593619')
    .then(response => response.json())
    .then(response => {GetApi(response)});
}


function GetApi(response) {
    const icon = response['weather'][0]['icon'];
    const tempvalue = response['main']['temp'];
    const desc = response['weather'][0]['description'];
    const iconurl = "http://openweathermap.org/img/w/"+icon+".png";
    DisplayApi(iconurl, desc, tempvalue);
    NewWth(iconurl, desc, tempvalue)
  }

function ToCelsius(tempvalue) {
  return Math.trunc(celsius = tempvalue - 273.15);
}

function DisplayApi(iconurl, desc, tempvalue) {
  document.getElementById('weather-icon').innerHTML='<img src='+iconurl+'>';
  document.getElementById('weather-desc').innerHTML= desc;
  document.getElementById('weather-temp').innerHTML= ToCelsius(tempvalue); 
}

function NewWth(iconurl, desc, tempvalue) {
  obj =  [
    desc,
    iconurl, 
    ToCelsius(tempvalue),
  ];

  tmp = [
    obj,
  ] 
  
  document.getElementById('new-weather').innerHTML= getItem('tmp');
}

function Salvar() {
  setItem('tmp', tmp)
  getItem('tmp')
  tmp.push(obj, Date());
  document.getElementById('new-weather').innerHTML= getItem('tmp'); 
}

function setItem(key, item) {
  localStorage.setItem(key, JSON.stringify(item))
}

function getItem(key) {
  const item = localStorage.getItem(key); 
  return JSON.parse(item) ;
}