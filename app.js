

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

// var userWeather = prompt("enter your area weather/temperature/celsius");

if (userWeather < 39 && userWeather >= 33){
    document.write(
       ' <div class="card m-auto" >' +
       ' <img src="https://media1.giphy.com/media/Ify8LioiUw91qBxyu1/200w.gif?cid=6c09b952o7urmzubo1bzgoybj181hccb028rcdgm2bdaap9n&ep=v1_gifs_search&rid=200w.gif&ct=g" class="card-img-top img-fluid custom-clip" alt="...">' +
        '<div class="card-body">'+
         ' <h2 class="card-title text-capitalize mb-3 p-3 text-center border">heat-wave</h2>'+
        '  <h4 class=" text-center border mb-3 p-3">Heat waves are periods of abnormally hot weather, which are accompanied by high humidity. Stay hydrated and avoid direct sun exposure!</h4>' +
       ' <h5 class="card-text text-center mb-3">its ' + userWeather + '°C    today </h5>'+
        '</div>' + 
    '  </div>'
    )
}
if (userWeather < 39 && userWeather >= 33){
    document.write(
       ' <div class="card m-auto" >' +
       ' <img src="https://media1.giphy.com/media/Ify8LioiUw91qBxyu1/200w.gif?cid=6c09b952o7urmzubo1bzgoybj181hccb028rcdgm2bdaap9n&ep=v1_gifs_search&rid=200w.gif&ct=g" class="card-img-top img-fluid custom-clip" alt="...">' +
        '<div class="card-body">'+
         ' <h2 class="card-title text-capitalize mb-3 p-3 text-center border">heat-wave</h2>'+
        '  <h4 class=" text-center border mb-3 p-3">Heat waves are periods of abnormally hot weather, which are accompanied by high humidity. Stay hydrated and avoid direct sun exposure!</h4>' +
       ' <h5 class="card-text text-center mb-3">its ' + userWeather + '°C    today </h5>'+
        '</div>' + 
    '  </div>'
    )
}
if (userWeather < 39 && userWeather >= 33){
    document.write(
       ' <div class="card m-auto" >' +
       ' <img src="https://media1.giphy.com/media/Ify8LioiUw91qBxyu1/200w.gif?cid=6c09b952o7urmzubo1bzgoybj181hccb028rcdgm2bdaap9n&ep=v1_gifs_search&rid=200w.gif&ct=g" class="card-img-top img-fluid custom-clip" alt="...">' +
        '<div class="card-body">'+
         ' <h2 class="card-title text-capitalize mb-3 p-3 text-center border">heat-wave</h2>'+
        '  <h4 class=" text-center border mb-3 p-3">Heat waves are periods of abnormally hot weather, which are accompanied by high humidity. Stay hydrated and avoid direct sun exposure!</h4>' +
       ' <h5 class="card-text text-center mb-3">its ' + userWeather + '°C    today </h5>'+
        '</div>' + 
    '  </div>'
    )
}
if (userWeather < 39 && userWeather >= 33){
    document.write(
       ' <div class="card m-auto" >' +
       ' <img src="https://media1.giphy.com/media/Ify8LioiUw91qBxyu1/200w.gif?cid=6c09b952o7urmzubo1bzgoybj181hccb028rcdgm2bdaap9n&ep=v1_gifs_search&rid=200w.gif&ct=g" class="card-img-top img-fluid custom-clip" alt="...">' +
        '<div class="card-body">'+
         ' <h2 class="card-title text-capitalize mb-3 p-3 text-center border">heat-wave</h2>'+
        '  <h4 class=" text-center border mb-3 p-3">Heat waves are periods of abnormally hot weather, which are accompanied by high humidity. Stay hydrated and avoid direct sun exposure!</h4>' +
       ' <h5 class="card-text text-center mb-3">its ' + userWeather + '°C    today </h5>'+
        '</div>' + 
    '  </div>'
    )
}
if (userWeather < 39 && userWeather >= 33){
    document.write(
       ' <div class="card m-auto" >' +
       ' <img src="https://media1.giphy.com/media/Ify8LioiUw91qBxyu1/200w.gif?cid=6c09b952o7urmzubo1bzgoybj181hccb028rcdgm2bdaap9n&ep=v1_gifs_search&rid=200w.gif&ct=g" class="card-img-top img-fluid custom-clip" alt="...">' +
        '<div class="card-body">'+
         ' <h2 class="card-title text-capitalize mb-3 p-3 text-center border">heat-wave</h2>'+
        '  <h4 class=" text-center border mb-3 p-3">Heat waves are periods of abnormally hot weather, which are accompanied by high humidity. Stay hydrated and avoid direct sun exposure!</h4>' +
       ' <h5 class="card-text text-center mb-3">its ' + userWeather + '°C    today </h5>'+
        '</div>' + 
    '  </div>'
    )
}
