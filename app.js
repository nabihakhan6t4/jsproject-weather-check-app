var weather = prompt("Enter your area weather \n hot \n cold \n sunny \n cloudy \n partly \n rainy \n stormy \n windy \n snowy");

if (weather == 'hot') {
    document.write('<div class="card w-50 m-auto " style="width: 18rem;">' +
    '<img src="images/hot.png" class="card-img-top rounded-5" alt="...">' +
   ' <div class="card-body ">' +
    '  <h1 class="card-text text-center">' + 'its ' + weather +  ' today' + '</h1>' +
   ' </div>' +
 ' </div>');
}  else if (weather == 'cold') {
    document.write('<div class="card w-50 m-auto " style="width: 18rem;">' +
    '<img src="images/cold.jpeg" class="card-img-top rounded-5" alt="...">' +
   ' <div class="card-body ">' +
    '  <h1 class="card-text text-center">' + 'its ' + weather +  ' today' + '</h1>' +
   ' </div>' +
 ' </div>');
}
 else if (weather == 'sunny') {
    document.write('<div class="card w-50 m-auto " style="width: 18rem;">' +
    '<img src="images/sunny.jpeg" class="card-img-top rounded-5" alt="...">' +
   ' <div class="card-body ">' +
    '  <h1 class="card-text text-center">' + 'its ' + weather +  ' today' + '</h1>' +
   ' </div>' +
 ' </div>');
}  else if (weather == 'cloudy') {
    document.write('<div class="card w-50 m-auto " style="width: 18rem;">' +
    '<img src="images/cloudy.jpeg" class="card-img-top rounded-5" alt="...">' +
   ' <div class="card-body ">' +
    '  <h1 class="card-text text-center">' + 'its ' + weather +  ' today' + '</h1>' +
   ' </div>' +
 ' </div>');
}
 else if (weather == 'partly') {
    document.write('<div class="card w-50 m-auto " style="width: 18rem;">' +
    '<img src="images/partly.png" class="card-img-top rounded-5" alt="...">' +
   ' <div class="card-body ">' +
    '  <h1 class="card-text text-center">' + 'its ' + weather +  ' today' + '</h1>' +
   ' </div>' +
 ' </div>');
}
 else if (weather == 'rainy') {
    document.write('<div class="card w-50 m-auto " style="width: 18rem;">' +
    '<img src="images/rainy.jpeg" class="card-img-top rounded-5" alt="...">' +
   ' <div class="card-body ">' +
    '  <h1 class="card-text text-center">' + 'its ' + weather +  ' today' + '</h1>' +
   ' </div>' +
 ' </div>');
}

 else if (weather == 'stormy') {
    document.write('<div class="card w-50 m-auto " style="width: 18rem;">' +
    '<img src="images/stormy.png" class="card-img-top rounded-5" alt="...">' +
   ' <div class="card-body ">' +
    '  <h1 class="card-text text-center">' + 'its ' + weather +  ' today' + '</h1>' +
   ' </div>' +
 ' </div>');
}


 else if (weather == 'windy') {
    document.write('<div class="card w-50 m-auto " style="width: 18rem;">' +
    '<img src="images/windy.jpeg" class="card-img-top rounded-5" alt="...">' +
   ' <div class="card-body ">' +
    '  <h1 class="card-text text-center">' + 'its ' + weather +  ' today' + '</h1>' +
   ' </div>' +
 ' </div>');
}

 else if (weather == 'snowy') {
    document.write('<div class="card rounded-5 p-5 " style="width: 18rem;">' +
    '<img src="images/snowy.png" class=" m-auto img-fluid rounded-5" alt="..."width="100vw" > '  +
   ' <div class="card-body ">' +
    '  <h1 class="card-text text-center">' + 'its ' + weather +  ' today' + '</h1>' +
   ' </div>' +
 ' </div>');
}

 else {
    document.write("<h1 class='m-auto'> 😜 Are you kidding me? </h1>");
}

