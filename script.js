let request = new XMLHttpRequest();
const api_key = '8b64dd88e9c8ef3360842ef7f6dc1a2d';

request.open('GET','https://restcountries.eu/rest/v2/all',true);

request.send();


request.onload = function(){
 let data = JSON.parse(this.response);
 console.log(data);
 let latitude = data[104].latlng[0];
 let longitude = data[104].latlng[1];
 let capitalCity = data[104].capital;
 let url = 'https://api.openweathermap.org/data/2.5/weather?lat='+latitude+'&lon='+longitude+'&appid='+api_key;
 let url1 = 'https://api.openweathermap.org/data/2.5/weather?q='+capitalCity+'&appid='+api_key;
 let getWeather = (url) =>{
     let req = new XMLHttpRequest();
     req.open('GET',url,true);
     req.send();
     req.onload = function(){
        let res = JSON.parse(this.response);
        console.log(res);
     }
 }
getWeather(url);
getWeather(url1);


} 

 



