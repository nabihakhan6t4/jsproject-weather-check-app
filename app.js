

// var weather = prompt("Enter your area weather \n hot \n cold \n sunny \n cloudy \n partly \n rainy \n stormy \n windy \n snowy");

// if (weather == 'hot') {
//     document.write('<div class="card rounded-5 p-4 " style="width: 18rem;">' +
//     '<img src="images/hot.png" class=" m-auto img-fluid rounded-5" alt="..."width="100vw"> '  +
//    ' <div class="card-body ">' +
//     '  <h1 class="card-text text-center">' + 'its ' + weather +  ' today' + '</h1>' +
//    ' </div>' +
//  ' </div>');
// }  else if (weather == 'cold') {
//     document.write('<div class="card rounded-5 p-4 " style="width: 18rem;">' +
//     '<img src="images/cold.jpeg" class=" m-auto img-fluid rounded-5" alt="..."width="100vw" > '  +
//    ' <div class="card-body ">' +
//     '  <h1 class="card-text text-center">' + 'its ' + weather +  ' today' + '</h1>' +
//    ' </div>' +
//  ' </div>');
// }
//  else if (weather == 'sunny') {
//     document.write('<div class="card rounded-5 p-4 " style="width: 18rem;">' +
//     '<img src="images/sunny.jpeg" class=" m-auto img-fluid rounded-5" alt="..."width="100vw" > '  +
//    ' <div class="card-body ">' +
//     '  <h1 class="card-text text-center">' + 'its ' + weather +  ' today' + '</h1>' +
//    ' </div>' +
//  ' </div>');
// }  else if (weather == 'cloudy') {
//     document.write('<div class="card rounded-5 p-4 " style="width: 18rem;">' +
//     '<img src="images/cloudy.jpeg" class=" m-auto img-fluid rounded-5" alt="..."width="100vw" > '  +
//    ' <div class="card-body ">' +
//     '  <h1 class="card-text text-center">' + 'its ' + weather +  ' today' + '</h1>' +
//    ' </div>' +
//  ' </div>');
// }
//  else if (weather == 'partly') {
//     document.write('<div class="card rounded-5 p-4 " style="width: 18rem;">' +
//     '<img src="images/partly.png" class=" m-auto img-fluid rounded-5" alt="..."width="100vw" > '  +
//    ' <div class="card-body ">' +
//     '  <h1 class="card-text text-center">' + 'its ' + weather +  ' today' + '</h1>' +
//    ' </div>' +
//  ' </div>');
// }
//  else if (weather == 'rainy') {
//     document.write('<div class="card rounded-5 p-4 " style="width: 18rem;">' +
//     '<img src="images/rainy.jpeg" class=" m-auto img-fluid rounded-5" alt="..."width="100vw" > '  +
//    ' <div class="card-body ">' +
//     '  <h1 class="card-text text-center">' + 'its ' + weather +  ' today' + '</h1>' +
//    ' </div>' +
//  ' </div>');
// }

//  else if (weather == 'stormy') {
//     document.write('<div class="card rounded-5 p-4 " style="width: 18rem;">' +
//     '<img src="images/stormy.png" class=" m-auto img-fluid rounded-5" alt="..."width="100vw" > '  +
//    ' <div class="card-body ">' +
//     '  <h1 class="card-text text-center">' + 'its ' + weather +  ' today' + '</h1>' +
//    ' </div>' +
//  ' </div>');
// }


//  else if (weather == 'windy') {
//     document.write('<div class="card rounded-5 p-4 " style="width: 18rem;">' +
//     '<img src="images/windy.jpeg" class=" m-auto img-fluid rounded-5" alt="..."width="100vw" > '  +
//    ' <div class="card-body ">' +
//     '  <h1 class="card-text text-center">' + 'its ' + weather +  ' today' + '</h1>' +
//    ' </div>' +
//  ' </div>');
// }

//  else if (weather == 'snowy') {
//     document.write('<div class="card rounded-5 p-4 " style="width: 18rem;">' +
//     '<img src="images/snowy.png" class=" m-auto img-fluid rounded-5" alt="..."width="100vw" > '  +
//    ' <div class="card-body ">' +
//     '  <h1 class="card-text text-center">' + 'its ' + weather +  ' today' + '</h1>' +
//    ' </div>' +
//  ' </div>');
// }

//  else {
//     document.write("<h1 class='m-auto'> 😜 Are you kidding me? </h1>");
// }

var userWeather = prompt("enter your area weather/temperature/celsius");

if (userWeather <= 39 && userWeather >= 33){
    document.write(
       ' <div class="card m-auto" >' +
       ' <img src="https://cdn.dribbble.com/users/818299/screenshots/4950562/layer_20-heat_wave_seperated_layers_1.gif" class="custom-clip">' +
        '<div class="card-body">'+
         ' <h2 class="card-title text-capitalize mb-3 p-3 text-center border">heat-wave</h2>'+
        '  <h4 class=" text-center border mb-3 p-3">Heat waves are periods of abnormally hot weather, which are accompanied by high humidity. Stay hydrated and avoid direct sun exposure!</h4>' +
       ' <h5 class="card-text text-center mb-3">its ' + userWeather + '°C    today </h5>'+
        '</div>' + 
    '  </div>'
    )
}
 else if (userWeather <= 32 && userWeather >= 27){
    document.write(
       ' <div class="card m-auto" >' +
       ' <img src="https://media0.giphy.com/media/WsBqsCEVT0yaf7Ajtf/200w.gif?cid=6c09b952zzpeekoxj3tcxf3tajz06xm4ed2kq0bq0wpyi104&ep=v1_gifs_search&rid=200w.gif&ct=g" class="card-img-top img-fluid custom-clip" alt="...">' +
        '<div class="card-body">'+
         ' <h2 class="card-title text-capitalize mb-3 p-3 text-center border">very-hot</h2>'+
        '  <h4 class=" text-center border mb-3 p-3">Todays weather is extremely hot with soaring temperatures and intense heat from the sun.</h4>' +
       ' <h5 class="card-text text-center mb-3">its ' + userWeather + '°C    today </h5>'+
        '</div>' + 
    '  </div>'
    )
}
 else if (userWeather <= 26  && userWeather >= 23){
    document.write(
       ' <div class="card m-auto" >' +
       ' <img src="https://i.pinimg.com/originals/f6/3e/de/f63ede80baf5967ed9086063420a86a9.gif" class="card-img-top img-fluid custom-clip" alt="...">' +
        '<div class="card-body">'+
         ' <h2 class="card-title text-capitalize mb-3 p-3 text-center border">hot</h2>'+
        '  <h4 class=" text-center border mb-3 p-3"> Hot weather is marked by high temperatures, intense warmth, discomfort, and a need for shade and hydration. </h4>' +
       ' <h5 class="card-text text-center mb-3">its ' + userWeather + '°C    today </h5>'+
        '</div>' + 
    '  </div>'
    )
}
else if (userWeather <= 22  && userWeather >= 16){
    document.write(
       ' <div class="card m-auto" >' +
       ' <img src="https://media2.giphy.com/media/26FL3uMhARSAvIZZS/200w.gif?cid=6c09b9529jtlm5t9vaerff8cdwk2xhm6kwe4irhy2wu21qo6&ep=v1_gifs_search&rid=200w.gif&ct=g" class="card-img-top img-fluid custom-clip" alt="...">' +
        '<div class="card-body">'+
         ' <h2 class="card-title text-capitalize mb-3 p-3 text-center border">room-temperature</h2>'+
        '  <h4 class=" text-center border mb-3 p-3"> Room temperature is the comfortable ambient temperature around 20 to 22 degrees Celsius (68 to 72 degrees Fahrenheit). </h4>' +
       ' <h5 class="card-text text-center mb-3">its ' + userWeather + '°C    today </h5>'+
        '</div>' + 
    '  </div>'
    )
}
else if (userWeather <= 15  && userWeather >= 11){
    document.write(
       ' <div class="card m-auto" >' +
       ' <img src="https://www.icegif.com/wp-content/uploads/2023/01/icegif-879.gif" class="card-img-top img-fluid custom-clip" alt="...">' +
        '<div class="card-body">'+
         ' <h2 class="card-title text-capitalize mb-3 p-3 text-center border">warm</h2>'+
        '  <h4 class=" text-center border mb-3 p-3"> Warm weather features mild to moderately high temperatures. </h4>' +
       ' <h5 class="card-text text-center mb-3">its ' + userWeather + '°C    today </h5>'+
        '</div>' + 
    '  </div>'
    )
}
else if (userWeather <= 15  && userWeather >= 11){
    document.write(
       ' <div class="card m-auto" >' +
       ' <img src="https://media1.giphy.com/media/HvYdoLbPqSdNu/200w.gif?cid=6c09b952vhzs1w6051kjyep80xeqpwokn5u4ar0m0a1hkcv6&ep=v1_gifs_search&rid=200w.gif&ct=g"class="card-img-top img-fluid custom-clip" alt="...">' +
        '<div class="card-body">'+
         ' <h2 class="card-title text-capitalize mb-3 p-3 text-center border">mild</h2>'+
        '  <h4 class=" text-center border mb-3 p-3">Mild weather signifies comfortable temperatures, often accompanied by gentle breezes and pleasant conditions.</h4>' +
       ' <h5 class="card-text text-center mb-3">its ' + userWeather + '°C    today </h5>'+
        '</div>' + 
    '  </div>'
    )
}
else if (userWeather <= 10  && userWeather >= 5){
    document.write(
       ' <div class="card m-auto" >' +
       ' <img src="https://media4.giphy.com/media/QYSZWvBhlfQTL8Fapy/giphy.gif?cid=6c09b952f8ngkptmo0p53zhuhrzucpypvrni2qmnzf9uq87w&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=g" class="card-img-top img-fluid custom-clip" alt="...">' +
        '<div class="card-body">'+
         ' <h2 class="card-title text-capitalize mb-3 p-3 text-center border">cool</h2>'+
        '  <h4 class=" text-center border mb-3 p-3">Cool weather is characterized by lower temperatures, often accompanied by a refreshing breeze, creating a pleasant and comfortable atmosphere.</h4>' +
       ' <h5 class="card-text text-center mb-3">its ' + userWeather + '°C    today </h5>'+
        '</div>' + 
    '  </div>'
    )
}
else if (userWeather <= 4  && userWeather >= 0){
    document.write(
       ' <div class="card m-auto" >' +
       ' <img src="https://i.gifer.com/g0W0.gif"class="card-img-top img-fluid custom-clip" alt="...">'+
        '<div class="card-body">'+
         ' <h2 class="card-title text-capitalize mb-3 p-3 text-center border">water-freezes</h2>'+
        '  <h4 class=" text-center border mb-3 p-3">Water freezes when its temperature drops below 0 degrees Celsius (32 degrees Fahrenheit), transforming from a liquid state into solid ice..</h4>' +
       ' <h5 class="card-text text-center mb-3">its ' + userWeather + '°C    today </h5>'+
        '</div>' + 
    '  </div>'
    )
}